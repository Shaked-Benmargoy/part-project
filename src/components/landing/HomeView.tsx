import { useState } from "react";
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import AddOutlined from "@mui/icons-material/AddOutlined";
import LandingLayout from "./LandingLayout";
import HeroSection from "./HeroSection";
import CategoriesGrid from "./CategoriesGrid";
import FooterSection from "./FooterSection";
import EditModeToggle from "../admin/EditModeToggle";
import TopicDialog from "../admin/TopicDialog";
import DeleteConfirmDialog from "../admin/DeleteConfirmDialog";
import { Topic, createTopic, updateTopic, deleteTopic } from "../../services/sharepointApi";
import { useAdminContext } from "../../contexts/AdminContext";

type HomeViewProps = {
  topics: Topic[];
  loading: boolean;
  error: string | null;
  onOpenTopic: (topic: Topic) => void;
  refetchTopics: () => void;
};

const HomeView = ({ topics, loading, error, onOpenTopic, refetchTopics }: HomeViewProps) => {
  const { editMode } = useAdminContext();

  const [topicDialogOpen, setTopicDialogOpen] = useState(false);
  const [editingTopic, setEditingTopic] = useState<Topic | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingTopic, setDeletingTopic] = useState<Topic | null>(null);

  const handleAddTopic = () => {
    setEditingTopic(null);
    setTopicDialogOpen(true);
  };

  const handleEditTopic = (topic: Topic) => {
    setEditingTopic(topic);
    setTopicDialogOpen(true);
  };

  const handleDeleteTopic = (topic: Topic) => {
    setDeletingTopic(topic);
    setDeleteDialogOpen(true);
  };

  const handleSaveTopic = async (data: { Title: string; w2is: string }) => {
    if (editingTopic) {
      await updateTopic(editingTopic.Id, data);
    } else {
      await createTopic(data);
    }
    refetchTopics();
  };

  const handleConfirmDelete = async () => {
    if (deletingTopic) {
      await deleteTopic(deletingTopic.Id);
      refetchTopics();
    }
  };

  return (
    <LandingLayout>
      <Stack
        spacing={4}
        sx={{
          minHeight: "100vh",
          px: 3,
          py: 5,
          alignItems: "center",
        }}
      >
        <HeroSection />
        <EditModeToggle />
        {editMode && (
          <Button
            onClick={handleAddTopic}
            startIcon={<AddOutlined />}
            sx={{
              color: "#fff",
              bgcolor: "#2449C6",
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontWeight: 700,
              borderRadius: "12px",
              px: 3,
              py: 1,
              "&:hover": { bgcolor: "#1a3a9e" },
            }}
          >
            הוספת נושא חדש
          </Button>
        )}
        {loading ? (
          <CircularProgress sx={{ color: "#6EA3FF" }} />
        ) : error ? (
          <Typography
            sx={{
              color: "#ff6b6b",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            שגיאה בטעינת הנתונים. נסו לרענן את הדף.
          </Typography>
        ) : (
          <CategoriesGrid
            topics={topics}
            onOpenTopic={onOpenTopic}
            editMode={editMode}
            onEditTopic={handleEditTopic}
            onDeleteTopic={handleDeleteTopic}
          />
        )}
        <FooterSection />
      </Stack>

      <TopicDialog
        open={topicDialogOpen}
        onClose={() => setTopicDialogOpen(false)}
        onSave={handleSaveTopic}
        topic={editingTopic}
      />
      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        itemName={deletingTopic?.Title ?? ""}
      />
    </LandingLayout>
  );
};

export default HomeView;
