import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, IconButton } from "@mui/material";
import DragIndicator from "@mui/icons-material/DragIndicator";

type SortableTopicRowProps = {
  id: number;
  children: ReactNode;
};

const SortableTopicRow = ({ id, children }: SortableTopicRowProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        position: "relative",
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.6 : 1,
        zIndex: isDragging ? 10 : "auto",
      }}
    >
      <IconButton
        {...attributes}
        {...listeners}
        size="small"
        sx={{
          position: "absolute",
          top: 8,
          left: 56,
          zIndex: 2,
          color: "#6EA3FF",
          bgcolor: "rgba(0,0,0,0.3)",
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
        }}
      >
        <DragIndicator fontSize="small" />
      </IconButton>
      {children}
    </Box>
  );
};

export default SortableTopicRow;
