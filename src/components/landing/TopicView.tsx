import { useState } from "react";
import { Box, Button, CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddOutlined from "@mui/icons-material/AddOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import LandingLayout from "./LandingLayout";
import ExpandableInfoCard from "./ExpandableInfoCard";
import SubTopicContent from "./SubTopicContent";
import EditModeToggle from "../admin/EditModeToggle";
import SubTopicDialog from "../admin/SubTopicDialog";
import DeleteConfirmDialog from "../admin/DeleteConfirmDialog";
import ReorderToolbar from "../admin/ReorderToolbar";
import UnsavedChangesDialog from "../admin/UnsavedChangesDialog";
import SortableSubTopicRow from "../admin/SortableSubTopicRow";
import { useSubTopics } from "../../hooks/useSubTopics";
import { useAdminContext } from "../../contexts/AdminContext";
import { useReorderable, ReorderUpdate } from "../../hooks/useReorderable";
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
  const { editMode, toggleEditMode } = useAdminContext();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const [subTopicDialogOpen, setSubTopicDialogOpen] = useState(false);
  const [editingSubTopic, setEditingSubTopic] = useState<SubTopic | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingSubTopic, setDeletingSubTopic] = useState<SubTopic | null>(null);
  const [unsavedDialogOpen, setUnsavedDialogOpen] = useState(false);
  const [pendingExitAction, setPendingExitAction] = useState<"toggleEdit" | "back" | null>(null);

  const saveSubTopicOrder = async (updates: ReorderUpdate[]) => {
    await Promise.all(updates.map((u) => updateSubTopic(u.id, { Order: u.order })));
    refetchSubTopics();
  };

  const {
    orderedItems: orderedSubTopics,
    isDirty,
    saving,
    onDragEnd,
    save,
    cancel,
  } = useReorderable<SubTopic>(subTopics, saveSubTopicOrder);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

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
      const maxOrder = orderedSubTopics.reduce(
        (m, s) => (typeof s.Order === "number" && s.Order > m ? s.Order : m),
        -1
      );
      await createSubTopic({ ...data, topic_id: topicId, Order: maxOrder + 1 });
    }
    refetchSubTopics();
  };

  const handleConfirmDelete = async () => {
    if (deletingSubTopic) {
      await deleteSubTopic(deletingSubTopic.Id);
      refetchSubTopics();
    }
  };

  const handleAttemptExit = () => {
    if (isDirty) {
      setPendingExitAction("toggleEdit");
      setUnsavedDialogOpen(true);
      return false;
    }
    return true;
  };

  const handleBack = () => {
    if (editMode && isDirty) {
      setPendingExitAction("back");
      setUnsavedDialogOpen(true);
      return;
    }
    onBack();
  };

  const handleConfirmExitDirty = () => {
    cancel();
    setUnsavedDialogOpen(false);
    if (pendingExitAction === "toggleEdit") toggleEditMode();
    else if (pendingExitAction === "back") onBack();
    setPendingExitAction(null);
  };

  const handleCancelExitDirty = () => {
    setUnsavedDialogOpen(false);
    setPendingExitAction(null);
  };

  const renderCard = (st: SubTopic) => {
    const IconComponent = getIcon(st.icon);
    return (
      <ExpandableInfoCard
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
          <EditModeToggle onAttemptExit={handleAttemptExit} />
          <Button
            onClick={handleBack}
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
          <Stack direction="row" spacing={2} alignItems="center" sx={{ flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
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
            <ReorderToolbar isDirty={isDirty} saving={saving} onSave={save} onCancel={cancel} />
          </Stack>
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
        ) : editMode ? (
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext
              items={orderedSubTopics.map((s) => s.Id)}
              strategy={verticalListSortingStrategy}
            >
              <Stack spacing={2} sx={{ width: "100%", maxWidth: "1040px" }}>
                {orderedSubTopics.map((st) => (
                  <SortableSubTopicRow key={st.Id} id={st.Id}>
                    {renderCard(st)}
                  </SortableSubTopicRow>
                ))}
              </Stack>
            </SortableContext>
          </DndContext>
        ) : (
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "1040px" }}>
            {orderedSubTopics.map((st) => (
              <Box key={st.Id}>{renderCard(st)}</Box>
            ))}
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
      <UnsavedChangesDialog
        open={unsavedDialogOpen}
        onCancel={handleCancelExitDirty}
        onConfirm={handleConfirmExitDirty}
      />
    </LandingLayout>
  );
};

export default TopicView;
