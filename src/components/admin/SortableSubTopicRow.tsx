import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, Stack } from "@mui/material";
import DragIndicator from "@mui/icons-material/DragIndicator";

type SortableSubTopicRowProps = {
  id: number;
  children: ReactNode;
};

const SortableSubTopicRow = ({ id, children }: SortableSubTopicRowProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  return (
    <Stack
      ref={setNodeRef}
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        width: "100%",
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.6 : 1,
        zIndex: isDragging ? 10 : "auto",
      }}
    >
      <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
      <Box
        component="button"
        type="button"
        {...attributes}
        {...listeners}
        sx={{
          flexShrink: 0,
          width: 36,
          height: 36,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          borderRadius: "50%",
          color: "#6EA3FF",
          bgcolor: "rgba(0,0,0,0.3)",
          cursor: "grab",
          touchAction: "none",
          padding: 0,
          "&:active": { cursor: "grabbing" },
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
          "& svg": { fontSize: 20 },
        }}
      >
        <DragIndicator fontSize="small" />
      </Box>
    </Stack>
  );
};

export default SortableSubTopicRow;
