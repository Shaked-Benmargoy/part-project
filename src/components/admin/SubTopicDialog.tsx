import { useState, useEffect } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, TextField, Stack,
} from "@mui/material";
import IconSelect from "./IconSelect";
import { SubTopic } from "../../services/sharepointApi";

type SubTopicDialogProps = {
  open: boolean;
  onClose: () => void;
  onSave: (data: { Title: string; data: string; icon: string; link: string }) => Promise<void>;
  subTopic?: SubTopic | null;
};

const SubTopicDialog = ({ open, onClose, onSave, subTopic }: SubTopicDialogProps) => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [icon, setIcon] = useState("");
  const [link, setLink] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle(subTopic?.Title ?? "");
      setData(subTopic?.data ?? "");
      setIcon(subTopic?.icon ?? "");
      setLink(subTopic?.link ?? "");
    }
  }, [open, subTopic]);

  const handleSave = async () => {
    if (!title.trim()) return;
    setSaving(true);
    try {
      await onSave({ Title: title.trim(), data, icon, link });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const isEdit = !!subTopic;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm"
      PaperProps={{ sx: { direction: "rtl" } }}>
      <DialogTitle>{isEdit ? "עריכת תת-נושא" : "הוספת תת-נושא חדש"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="כותרת"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            autoFocus
          />
          <TextField
            label="תוכן"
            value={data}
            onChange={(e) => setData(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
          <IconSelect value={icon} onChange={setIcon} />
          <TextField
            label="קישור (אופציונלי)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            fullWidth
            placeholder="https://..."
          />
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

export default SubTopicDialog;
