import { useState, useEffect } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Stack,
} from "@mui/material";
import IconSelect from "./IconSelect";
import { Topic } from "../../services/sharepointApi";

type TopicDialogProps = {
  open: boolean;
  onClose: () => void;
  onSave: (data: { Title: string; w2is: string }) => Promise<void>;
  topic?: Topic | null;
};

const TopicDialog = ({ open, onClose, onSave, topic }: TopicDialogProps) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle(topic?.Title ?? "");
      setIcon(topic?.w2is ?? "");
    }
  }, [open, topic]);

  const handleSave = async () => {
    if (!title.trim()) return;
    setSaving(true);
    try {
      await onSave({ Title: title.trim(), w2is: icon });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const isEdit = !!topic;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"
      PaperProps={{ sx: { direction: "rtl" } }}>
      <DialogTitle>{isEdit ? "עריכת נושא" : "הוספת נושא חדש"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="כותרת"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            autoFocus
          />
          <IconSelect value={icon} onChange={setIcon} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={saving}>ביטול</Button>
        <Button onClick={handleSave} variant="contained" disabled={saving || !title.trim()}>
          {saving ? "שומר..." : "שמירה"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TopicDialog;
