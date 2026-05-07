# Edit Logo & Reorder Topics/Subtopics — Design

**Date:** 2026-05-07
**Status:** Approved by user, ready for implementation plan

## Goal

Extend the existing admin edit mode so that site admins can:

1. Replace any of the three site logos (`footerLogo.png`, `logo.png`, `logo2.png`) by uploading a new image file.
2. Reorder topics on the home page and subtopics inside each topic, via drag-and-drop, with explicit save/cancel.

Read-only viewers see no change.

## Context

- Edit mode already exists (`AdminContext`, `EditModeToggle`) and supports CRUD on topics and subtopics through SharePoint lists via PnPjs.
- Logos are static images in the SharePoint `Shared Documents` library; their `<img src>` URLs are hardcoded in `HeroSection.tsx` and `FooterSection.tsx`.
- Topics and subtopics are currently fetched with `orderBy("Id")`, so insertion order is the only ordering signal.

## SharePoint changes (manual, by site admin)

Add one column to each list, both of type **Number**, default empty:

- **Topics** list → `Order`
- **SubTopic** list → `Order`

No other SharePoint schema changes. Logos remain in `Shared Documents` at their existing paths and are overwritten in place.

## Feature 1: Logo edit

### UI

In edit mode, each `<img>` for a logo is wrapped in an `EditableLogo` component that overlays a small pencil/upload `IconButton` in the top-right corner of the image. Outside edit mode, the component renders only the `<img>`.

Click flow:

1. Pencil click → opens hidden `<input type="file" accept="image/*">`.
2. File selected → `LogoConfirmDialog` opens showing a preview of the chosen file (`URL.createObjectURL(file)`) plus Cancel / "החלף לוגו" buttons.
3. Confirm → upload runs; button shows a spinner; dialog closes on success.
4. Error → snackbar "שגיאה בהעלאת הלוגו"; dialog stays open so user can retry or cancel.

### Cache-busting

Browsers will cache the previous image at the same URL. To force re-fetch:

- `AdminContext` adds `logoVersion: number` (initialized to `Date.now()` on app load) and `bumpLogoVersion()`.
- `EditableLogo` appends `?v={logoVersion}` to its `src` for every render.
- A successful upload calls `bumpLogoVersion()`, causing all three logos in the app to re-fetch from SharePoint.

### Upload mechanics

New service function in `src/services/sharepointApi.ts`:

```ts
export async function uploadLogo(filename: string, file: File): Promise<void> {
  await sp.web
    .getFolderByServerRelativePath("Shared Documents")
    .files.addUsingPath(filename, file, { Overwrite: true });
}
```

`filename` is one of `"footerLogo.png"`, `"logo.png"`, `"logo2.png"`. The path stays identical to the current `<img src>` paths. The function relies on PnPjs `@pnp/sp/files`.

## Feature 2: Reorder topics and subtopics

### Library

New dependencies: **`@dnd-kit/core`** and **`@dnd-kit/sortable`**. Chosen for small bundle, accessibility (keyboard reorder out of the box), and active maintenance.

### UI

In edit mode:

- Each topic card on `HomeView` and each subtopic accordion on `TopicView` gets a drag handle (`DragIndicator` icon, `☰`) at the start of its row, in the same overlay area as the existing edit/delete buttons.
- The list is wrapped in `<DndContext>` + `<SortableContext>`. Each row is a `SortableTopicRow` / `SortableSubTopicRow` using `useSortable`.
- During drag, items reorder visually only.

When the user drops an item in a new position, two buttons appear above the list:

- **"שמירת סדר"** — primary button, persists changes.
- **"ביטול"** — text button, reverts to the last fetched order.

Both render only when the local order differs from the last-saved order (`isDirty === true`).

### Pending-state model — `useReorderable` hook

Both `HomeView` and `TopicView` use a shared hook:

```ts
function useReorderable<T extends { Id: number }>(
  fetchedItems: T[],
  saveOrder: (updates: Array<{ id: number; order: number }>) => Promise<void>
): {
  orderedItems: T[];
  isDirty: boolean;
  onDragEnd: (event: DragEndEvent) => void;
  save: () => Promise<void>;
  cancel: () => void;
  saving: boolean;
}
```

Behavior:

- Seeds `orderedItems` from `fetchedItems` on first render and any time the fetched ID set changes (not on every fetch — that would clobber an in-progress reorder).
- `onDragEnd` updates `orderedItems` via `arrayMove` and sets `isDirty = true`.
- `save()` walks the array; for any item whose new index differs from the index in the last-saved snapshot, it calls `saveOrder([{ id, order: newIndex }, …])`. Updates run in parallel via `Promise.all`. On success: refetch from SharePoint, clear `isDirty`. On failure: snackbar; keep state pending so user can retry.
- `cancel()` reverts `orderedItems` to the last fetched snapshot, clears `isDirty`.

`Order` is dense (0, 1, 2, …) and rewritten for every changed row on save.

### Sort change in service layer

`fetchTopics` and `fetchSubTopics` switch from `.orderBy("Id")` to `.orderBy("Order").orderBy("Id")` so existing items without an Order still get a deterministic position by their `Id`.

### New-item creation

`createTopic` / `createSubTopic` are extended to set `Order = (max existing Order) + 1`, so newly added items appear at the bottom of the list. The caller is responsible for computing `max + 1` from the current loaded list (or, equivalently, from the array length when items are dense).

### Leaving edit mode while dirty

`EditModeToggle` (and the back-button on `TopicView`) consult `isDirty`. If true, an `UnsavedChangesDialog` opens: "יש שינויים שלא נשמרו. לצאת בלי לשמור?" with Cancel / "צא בלי לשמור". Confirming discards local order and exits.

## Files

### New

- `src/components/admin/EditableLogo.tsx`
- `src/components/admin/LogoConfirmDialog.tsx`
- `src/components/admin/SortableTopicRow.tsx`
- `src/components/admin/SortableSubTopicRow.tsx`
- `src/components/admin/ReorderToolbar.tsx`
- `src/components/admin/UnsavedChangesDialog.tsx`
- `src/hooks/useReorderable.ts`

### Modified

- `src/contexts/AdminContext.tsx` — add `logoVersion` + `bumpLogoVersion`.
- `src/services/sharepointApi.ts` — `Order` field on interfaces; new sort order; `Order` in `createTopic` / `createSubTopic`; new `uploadLogo`; existing `updateTopic` / `updateSubTopic` extended with optional `Order`.
- `src/components/landing/HeroSection.tsx` — wrap both logos in `EditableLogo`.
- `src/components/landing/FooterSection.tsx` — wrap `logo2.png` in `EditableLogo`.
- `src/components/landing/CategoriesGrid.tsx` — wrap topic list in `<DndContext>` + `<SortableContext>` when `editMode`; render via `SortableTopicRow`.
- `src/components/landing/TopicView.tsx` — same for subtopics; wire `useReorderable`, `ReorderToolbar`, `UnsavedChangesDialog`.
- `src/components/landing/HomeView.tsx` — same for topics.
- `package.json` — add `@dnd-kit/core`, `@dnd-kit/sortable`.

### Untouched

`ExpandableInfoCard`, `CategoryCard`, `LandingLayout`, `SubTopicContent`, existing admin dialogs (`TopicDialog`, `SubTopicDialog`, `DeleteConfirmDialog`, `IconSelect`, `EditModeToggle`).

## Testing

Add one Jest test for `useReorderable`:

- Drag changes `orderedItems` and sets `isDirty`.
- `cancel()` restores last-saved order and clears `isDirty`.
- `save()` calls `saveOrder` only with rows whose index changed; clears `isDirty` on success.

Drag interactions inside `@dnd-kit` are library behavior and are not unit-tested. Logo upload is a thin wrapper around PnPjs and not unit-tested.

## Out of scope

- Reordering across topics (moving a subtopic to a different topic).
- Bulk reorder of icons or other admin metadata.
- Image cropping, resizing, or format conversion on upload.
- Versioning / undo of past logo uploads beyond what SharePoint's own version history provides.
- Permission changes — admin check (`IsSiteAdmin`) is unchanged.
