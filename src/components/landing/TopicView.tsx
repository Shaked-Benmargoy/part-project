import { useState } from "react";
import { Box, Button, CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddOutlined from "@mui/icons-material/AddOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import LandingLayout from "./LandingLayout";
import ExpandableInfoCard from "./ExpandableInfoCard";
import SubTopicContent from "./SubTopicContent";
import EditModeToggle from "../admin/EditModeToggle";
import SubTopicDialog from "../admin/SubTopicDialog";
import DeleteConfirmDialog from "../admin/DeleteConfirmDialog";
import { useSubTopics } from "../../hooks/useSubTopics";
import { useAdminContext } from "../../contexts/AdminContext";
import { getIcon } from "../../utils/iconMap";
import {
  SubTopic,
  createSubTopic,
  updateSubTopic,
  deleteSubTopic,
} from "../../services/sharepointApi";

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

type TopicViewProps = {
  topicId: number;
  topicTitle: string;
  onBack: () => void;
  refetchTopics: () => void;
};

const TopicView = ({ topicId, topicTitle, onBack, refetchTopics }: TopicViewProps) => {
  const { subTopics, loading, error, refetch: refetchSubTopics } = useSubTopics(topicId);
  const { editMode } = useAdminContext();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const [subTopicDialogOpen, setSubTopicDialogOpen] = useState(false);
  const [editingSubTopic, setEditingSubTopic] = useState<SubTopic | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingSubTopic, setDeletingSubTopic] = useState<SubTopic | null>(null);

  const handleAddSubTopic = () => {
    setEditingSubTopic(null);
    setSubTopicDialogOpen(true);
  };

  const handleEditSubTopic = (st: SubTopic) => {
    setEditingSubTopic(st);
    setSubTopicDialogOpen(true);
  };

  const handleDeleteSubTopic = (st: SubTopic) => {
    setDeletingSubTopic(st);
    setDeleteDialogOpen(true);
  };

  const handleSaveSubTopic = async (data: {
    Title: string;
    data: string;
    icon: string;
    link: string;
  }) => {
    if (editingSubTopic) {
      await updateSubTopic(editingSubTopic.Id, data);
    } else {
      await createSubTopic({ ...data, topic_id: topicId });
    }
    refetchSubTopics();
  };

  const handleConfirmDelete = async () => {
    if (deletingSubTopic) {
      await deleteSubTopic(deletingSubTopic.Id);
      refetchSubTopics();
    }
  };

  return (
    <LandingLayout>
      <Stack
        sx={{
          minHeight: "100vh",
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 4 },
          alignItems: "center",
        }}
        spacing={3}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1040px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EditModeToggle />
          <Button
            onClick={onBack}
            startIcon={<ArrowBackIcon sx={{ transform: "rotate(180deg)" }} />}
            sx={{
              color: "#6EA3FF",
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontWeight: 800,
            }}
          >
            חזרה לדף הראשי
          </Button>
        </Box>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          {topicTitle}
        </Typography>

        {editMode && (
          <Button
            onClick={handleAddSubTopic}
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
            הוספת תת-נושא חדש
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
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "1040px" }}>
            {subTopics.map((st) => {
              const IconComponent = getIcon(st.icon);
              return (
                <ExpandableInfoCard
                  key={st.Id}
                  title={st.Title}
                  icon={<IconComponent />}
                  content={<SubTopicContent data={st.data} link={st.link} />}
                  expanded={expandedId === st.Id}
                  onChange={() =>
                    setExpandedId(expandedId === st.Id ? null : st.Id)
                  }
                  actions={
                    editMode ? (
                      <>
                        <IconButton
                          size="small"
                          onClick={() => handleEditSubTopic(st)}
                          sx={adminBtnSx}
                        >
                          <EditOutlined fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteSubTopic(st)}
                          sx={deleteBtnSx}
                        >
                          <DeleteOutlined fontSize="small" />
                        </IconButton>
                      </>
                    ) : undefined
                  }
                />
              );
            })}
          </Stack>
        )}
      </Stack>

      <SubTopicDialog
        open={subTopicDialogOpen}
        onClose={() => setSubTopicDialogOpen(false)}
        onSave={handleSaveSubTopic}
        subTopic={editingSubTopic}
      />
      <DeleteConfirmDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        itemName={deletingSubTopic?.Title ?? ""}
      />
    </LandingLayout>
  );
};

export default TopicView;
