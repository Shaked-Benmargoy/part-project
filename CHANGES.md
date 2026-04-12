# Migration Summary: Hardcoded Data → SharePoint Lists

## Overview

Migrated the app from 27 hardcoded category files to dynamic data fetching from two SharePoint lists using PnPjs. The app now reads all content from SharePoint, allowing updates without code changes.

## SharePoint Data Model

### Topics list
| Column | Internal Name | Type |
|--------|--------------|------|
| Title | `Title` | Text |
| Icon | `w2is` | Text (MUI icon name) |

### SubTopic list
| Column | Internal Name | Type |
|--------|--------------|------|
| Title | `Title` | Text |
| data | `data` | Note (plain text) |
| topic_id | `topic_id` | Number (FK → Topics.Id) |
| icon | `icon` | Text (MUI icon name) |
| link | `link` | Text (URL) |

## Files Created

| File | Purpose |
|------|---------|
| `src/config.ts` | Reads SharePoint site URL from env var or `window.__SP_SITE_URL__` |
| `src/services/sharepointApi.ts` | PnPjs-based API service — `fetchTopics()` and `fetchSubTopics(topicId)` |
| `src/hooks/useTopics.ts` | React hook returning `{ topics, loading, error }` |
| `src/hooks/useSubTopics.ts` | React hook returning `{ subTopics, loading, error }` for a given topic |
| `src/utils/iconMap.ts` | Maps ~45 MUI icon name strings to components, with `InfoOutlined` fallback |
| `src/components/landing/TopicView.tsx` | Generic view replacing all 9 category *View files |
| `src/components/landing/SubTopicContent.tsx` | Renders plain text data + optional link |
| `src/components/landing/ExpandableInfoCard.tsx` | Moved from `Keva/` to shared location (unchanged) |
| `.env` | `REACT_APP_SHAREPOINT_SITE_URL` for production |
| `.env.development` | Same var for local dev |
| `scripts/populate-sharepoint.js` | Browser console script to populate SharePoint lists with all original data |
| `CLAUDE.md` | Codebase guide for Claude Code |

## Files Modified

| File | Change |
|------|--------|
| `src/pages/LandingPage.tsx` | Replaced 9 hardcoded view imports + 10-way union type with `useTopics()` hook and single `selectedTopic` state |
| `src/components/landing/HomeView.tsx` | Replaced 9 `onOpen*` callbacks with `topics`, `loading`, `error`, `onOpenTopic` props |
| `src/components/landing/CategoriesGrid.tsx` | Replaced 9 hardcoded categories + callbacks with dynamic `topics` array and `onOpenTopic` |
| `package.json` | Added `@pnp/sp`, `@pnp/queryable`, `@pnp/logging` |

## Files Deleted (27)

All 9 category folders under `src/components/landing/`:

- `Keva/` — KevaData.tsx, KevaCategoriesGrid.tsx, KevaView.tsx, ExpandableInfoCard.tsx
- `Miluim/` — MiluimData.tsx, MiluimCategoriesGrid.tsx, MiluimView.tsx
- `Sadir/` — SadirData.tsx, SadirCategoriesGrid.tsx, SadirView.tsx
- `Medical/` — MedicalData.tsx, MedicalCategoriesGrid.tsx, MedicalView.tsx
- `Dental/` — DentalData.tsx, DentalCategoriesGrid.tsx, DentalView.tsx
- `Food/` — FoodData.tsx, FoodCategoriesGrid.tsx, FoodView.tsx
- `Logistics/` — LogisticsData.tsx, LogisticsCategoriesGrid.tsx, LogisticsView.tsx
- `Psychology/` — PsychologyData.tsx, PsychologyCategoriesGrid.tsx, PsychologyView.tsx
- `Personal/` — PersonalData.tsx, PersonalCategoriesGrid.tsx, PersonalView.tsx

## Architecture Before & After

### Before
```
LandingPage (useState<"home"|"keva"|"miluim"|...>)
  ├── HomeView (9 onOpen* callbacks)
  │   └── CategoriesGrid (9 hardcoded categories, title-to-callback mapping)
  └── KevaView / MiluimView / SadirView / ... (9 separate components)
      └── *CategoriesGrid → *Data.tsx (hardcoded JSX content)
```

### After
```
LandingPage (useTopics(), useState<Topic | null>)
  ├── HomeView (topics[], onOpenTopic)
  │   └── CategoriesGrid (dynamic from SharePoint Topics list)
  └── TopicView (generic, fetches SubTopics by topic_id)
      └── ExpandableInfoCard → SubTopicContent (plain text + link)
```

## How to Add New Content

No code changes needed. Just add rows to the SharePoint lists:
- New topic → add row to **Topics** list with Title and Icon (`w2is`)
- New subtopic → add row to **SubTopic** list with Title, data, icon, link, and the parent's topic_id
