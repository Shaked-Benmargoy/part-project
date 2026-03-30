import { Stack } from "@mui/material";
import CategoryCard from "./CategoryCard";
import { Topic } from "../../services/sharepointApi";
import { getIcon } from "../../utils/iconMap";

type CategoriesGridProps = {
  topics: Topic[];
  onOpenTopic: (topic: Topic) => void;
};

const CategoriesGrid = ({ topics, onOpenTopic }: CategoriesGridProps) => {
  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "900px" }}>
      {topics.map((topic) => {
        const IconComponent = getIcon(topic.w2is);
        return (
          <CategoryCard
            key={topic.Id}
            title={topic.Title}
            icon={<IconComponent />}
            onClick={() => onOpenTopic(topic)}
          />
        );
      })}
    </Stack>
  );
};

export default CategoriesGrid;
