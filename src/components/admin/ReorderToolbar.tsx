import { Button, CircularProgress, Stack } from "@mui/material";
import SaveOutlined from "@mui/icons-material/SaveOutlined";
import UndoOutlined from "@mui/icons-material/UndoOutlined";

type ReorderToolbarProps = {
  isDirty: boolean;
  saving: boolean;
  onSave: () => void;
  onCancel: () => void;
};

const ReorderToolbar = ({ isDirty, saving, onSave, onCancel }: ReorderToolbarProps) => {
  if (!isDirty) return null;
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Button
        onClick={onSave}
        disabled={saving}
        variant="contained"
        startIcon={saving ? <CircularProgress size={16} sx={{ color: "#fff" }} /> : <SaveOutlined />}
        sx={{
          color: "#fff",
          bgcolor: "#2449C6",
          fontSize: { xs: "0.95rem", md: "1.1rem" },
          fontWeight: 700,
          borderRadius: "12px",
          px: 3,
          py: 1,
          "&:hover": { bgcolor: "#1a3a9e" },
        }}
      >
        שמירת סדר
      </Button>
      <Button
        onClick={onCancel}
        disabled={saving}
        startIcon={<UndoOutlined />}
        sx={{
          color: "#6EA3FF",
          fontSize: { xs: "0.95rem", md: "1.1rem" },
          fontWeight: 700,
        }}
      >
        ביטול
      </Button>
    </Stack>
  );
};

export default ReorderToolbar;
