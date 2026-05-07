import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export interface ReorderUpdate {
  id: number;
  order: number;
}

export interface UseReorderableResult<T> {
  orderedItems: T[];
  isDirty: boolean;
  saving: boolean;
  onDragEnd: (event: DragEndEvent) => void;
  save: () => Promise<void>;
  cancel: () => void;
}

// Re-seeds local state only when the *set of IDs* changes, not on every fetch,
// so an in-progress reorder isn't clobbered by a refetch with identical content.
function idsKey<T extends { Id: number }>(items: T[]): string {
  return items.map((i) => i.Id).join(",");
}

export function useReorderable<T extends { Id: number }>(
  fetchedItems: T[],
  saveOrder: (updates: ReorderUpdate[]) => Promise<void>
): UseReorderableResult<T> {
  const [orderedItems, setOrderedItems] = useState<T[]>(fetchedItems);
  const [isDirty, setIsDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const lastSavedRef = useRef<T[]>(fetchedItems);
  const fetchedKey = useMemo(() => idsKey(fetchedItems), [fetchedItems]);
  const lastSeededKeyRef = useRef<string>(idsKey(fetchedItems));

  useEffect(() => {
    if (fetchedKey !== lastSeededKeyRef.current) {
      setOrderedItems(fetchedItems);
      lastSavedRef.current = fetchedItems;
      lastSeededKeyRef.current = fetchedKey;
      setIsDirty(false);
    }
  }, [fetchedKey, fetchedItems]);

  const onDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    setOrderedItems((items) => {
      const oldIndex = items.findIndex((i) => i.Id === active.id);
      const newIndex = items.findIndex((i) => i.Id === over.id);
      if (oldIndex < 0 || newIndex < 0) return items;
      const next = arrayMove(items, oldIndex, newIndex);
      const baseline = lastSavedRef.current;
      const dirty = next.some((it, idx) => baseline[idx]?.Id !== it.Id);
      setIsDirty(dirty);
      return next;
    });
  }, []);

  const save = useCallback(async () => {
    const baseline = lastSavedRef.current;
    const updates: ReorderUpdate[] = [];
    orderedItems.forEach((item, idx) => {
      if (baseline[idx]?.Id !== item.Id) {
        updates.push({ id: item.Id, order: idx });
      }
    });
    if (updates.length === 0) {
      setIsDirty(false);
      return;
    }
    setSaving(true);
    try {
      await saveOrder(updates);
      lastSavedRef.current = orderedItems;
      setIsDirty(false);
    } finally {
      setSaving(false);
    }
  }, [orderedItems, saveOrder]);

  const cancel = useCallback(() => {
    setOrderedItems(lastSavedRef.current);
    setIsDirty(false);
  }, []);

  return { orderedItems, isDirty, saving, onDragEnd, save, cancel };
}
