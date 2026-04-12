import { Box, IconButton, Stack } from "@mui/material";
import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import CategoryCard from "./CategoryCard";
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
};

const CategoriesGrid = ({
  topics,
  onOpenTopic,
  editMode,
  onEditTopic,
  onDeleteTopic,
}: CategoriesGridProps) => {
  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "900px" }}>
      {topics.map((topic) => {
        const IconComponent = getIcon(topic.w2is);
        return (
          <Box key={topic.Id} sx={{ position: "relative" }}>
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
      })}
    </Stack>
  );
};

export default CategoriesGrid;
