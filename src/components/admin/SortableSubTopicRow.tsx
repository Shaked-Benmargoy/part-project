import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, IconButton } from "@mui/material";
import DragIndicator from "@mui/icons-material/DragIndicator";

export type DragHandleProps = Record<string, any>;

type SortableSubTopicRowProps = {
  id: number;
  children: (handleProps: DragHandleProps) => ReactNode;
};

export const SubTopicDragHandle = (props: DragHandleProps) => (
  <IconButton
    {...props}
    size="small"
    sx={{
      color: "#6EA3FF",
      bgcolor: "rgba(0,0,0,0.3)",
      cursor: "grab",
      "&:active": { cursor: "grabbing" },
      "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
    }}
  >
    <DragIndicator fontSize="small" />
  </IconButton>
);

const SortableSubTopicRow = ({ id, children }: SortableSubTopicRowProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const handleProps: DragHandleProps = { ...attributes, ...listeners };

  return (
    <Box
      ref={setNodeRef}
      sx={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.6 : 1,
        zIndex: isDragging ? 10 : "auto",
        position: "relative",
      }}
    >
      {children(handleProps)}
    </Box>
  );
};

export default SortableSubTopicRow;
