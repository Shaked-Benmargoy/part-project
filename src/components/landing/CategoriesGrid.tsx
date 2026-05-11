import { Box, IconButton, Stack } from "@mui/material";
import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import CategoryCard from "./CategoryCard";
import SortableTopicRow from "../admin/SortableTopicRow";
import { Topic } from "../../services/sharepointApi";
import { getIcon } from "../../utils/iconMap";

const adminBtnSx = {
  color: "#6EA3FF",
  bgcolor: "rgba(0,0,0,0.3)",
  "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
};

const deleteBtnSx = {
  color: "#ff6b6b",
  bgcolor: "rgba(0,0,0,0.3)",
  "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
};

type CategoriesGridProps = {
  topics: Topic[];
  onOpenTopic: (topic: Topic) => void;
  editMode?: boolean;
  onEditTopic?: (topic: Topic) => void;
  onDeleteTopic?: (topic: Topic) => void;
  onDragEnd?: (event: DragEndEvent) => void;
};

const CategoriesGrid = ({
  topics,
  onOpenTopic,
  editMode,
  onEditTopic,
  onDeleteTopic,
  onDragEnd,
}: CategoriesGridProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const renderCard = (topic: Topic) => {
    const IconComponent = getIcon(topic.w2is);
    return (
      <Box sx={{ position: "relative" }}>
        {editMode && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: 2,
              display: "flex",
              gap: 0.5,
            }}
          >
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onEditTopic?.(topic);
              }}
              sx={adminBtnSx}
            >
              <EditOutlined fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteTopic?.(topic);
              }}
              sx={deleteBtnSx}
            >
              <DeleteOutlined fontSize="small" />
            </IconButton>
          </Box>
        )}
        <CategoryCard
          title={topic.Title}
          icon={<IconComponent />}
          onClick={() => onOpenTopic(topic)}
        />
      </Box>
    );
  };

  if (!editMode) {
    return (
      <Stack spacing={2} sx={{ width: "100%", maxWidth: "900px" }}>
        {topics.map((topic) => (
          <Box key={topic.Id}>{renderCard(topic)}</Box>
        ))}
      </Stack>
    );
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={topics.map((t) => t.Id)} strategy={verticalListSortingStrategy}>
        <Stack spacing={2} sx={{ width: "100%", maxWidth: "900px" }}>
          {topics.map((topic) => (
            <SortableTopicRow key={topic.Id} id={topic.Id}>
              {renderCard(topic)}
            </SortableTopicRow>
          ))}
        </Stack>
      </SortableContext>
    </DndContext>
  );
};

export default CategoriesGrid;
