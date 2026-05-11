import { act, renderHook } from "@testing-library/react";
import { useReorderable, ReorderUpdate } from "./useReorderable";
import { DragEndEvent } from "@dnd-kit/core";

interface Item {
  Id: number;
  Title: string;
}

const items: Item[] = [
  { Id: 1, Title: "A" },
  { Id: 2, Title: "B" },
  { Id: 3, Title: "C" },
];

function dragEvent(activeId: number, overId: number): DragEndEvent {
  return {
    active: { id: activeId },
    over: { id: overId },
  } as unknown as DragEndEvent;
}

describe("useReorderable", () => {
  it("starts clean and reflects fetched order", () => {
    const { result } = renderHook(() => useReorderable(items, jest.fn()));
    expect(result.current.orderedItems.map((i) => i.Id)).toEqual([1, 2, 3]);
    expect(result.current.isDirty).toBe(false);
  });

  it("becomes dirty after a drag that changes order", () => {
    const { result } = renderHook(() => useReorderable(items, jest.fn()));
    act(() => result.current.onDragEnd(dragEvent(1, 3)));
    expect(result.current.orderedItems.map((i) => i.Id)).toEqual([2, 3, 1]);
    expect(result.current.isDirty).toBe(true);
  });

  it("cancel reverts to last saved order and clears dirty", () => {
    const { result } = renderHook(() => useReorderable(items, jest.fn()));
    act(() => result.current.onDragEnd(dragEvent(1, 3)));
    act(() => result.current.cancel());
    expect(result.current.orderedItems.map((i) => i.Id)).toEqual([1, 2, 3]);
    expect(result.current.isDirty).toBe(false);
  });

  it("save sends updates only for items whose index changed and clears dirty", async () => {
    const saveOrder = jest.fn(async (_: ReorderUpdate[]) => {});
    const { result } = renderHook(() => useReorderable(items, saveOrder));
    act(() => result.current.onDragEnd(dragEvent(1, 2)));
    await act(async () => {
      await result.current.save();
    });
    expect(saveOrder).toHaveBeenCalledTimes(1);
    const updates = saveOrder.mock.calls[0][0];
    const ids = updates.map((u) => u.id).sort();
    expect(ids).toEqual([1, 2]);
    expect(result.current.isDirty).toBe(false);
  });

  it("save with no changes does not call saveOrder", async () => {
    const saveOrder = jest.fn(async (_: ReorderUpdate[]) => {});
    const { result } = renderHook(() => useReorderable(items, saveOrder));
    await act(async () => {
      await result.current.save();
    });
    expect(saveOrder).not.toHaveBeenCalled();
  });

  it("re-seeds when the set of IDs changes", () => {
    const { result, rerender } = renderHook(
      ({ data }: { data: Item[] }) => useReorderable(data, jest.fn()),
      { initialProps: { data: items } }
    );
    act(() => result.current.onDragEnd(dragEvent(1, 3)));
    expect(result.current.isDirty).toBe(true);
    const newItems: Item[] = [
      { Id: 1, Title: "A" },
      { Id: 2, Title: "B" },
      { Id: 3, Title: "C" },
      { Id: 4, Title: "D" },
    ];
    rerender({ data: newItems });
    expect(result.current.orderedItems.map((i) => i.Id)).toEqual([1, 2, 3, 4]);
    expect(result.current.isDirty).toBe(false);
  });

  it("does not re-seed when fetched array changes identity but IDs are unchanged", () => {
    const { result, rerender } = renderHook(
      ({ data }: { data: Item[] }) => useReorderable(data, jest.fn()),
      { initialProps: { data: items } }
    );
    act(() => result.current.onDragEnd(dragEvent(1, 3)));
    rerender({ data: [...items] });
    expect(result.current.orderedItems.map((i) => i.Id)).toEqual([2, 3, 1]);
    expect(result.current.isDirty).toBe(true);
  });
});
