import { useState } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Box, Typography,
} from "@mui/material";

type LogoConfirmDialogProps = {
  open: boolean;
  previewUrl: string | null;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

const LogoConfirmDialog = ({ open, previewUrl, onClose, onConfirm }: LogoConfirmDialogProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConfirm = async () => {
    setUploading(true);
    setError(null);
    try {
      await onConfirm();
      onClose();
    } catch (e: any) {
      setError("שגיאה בהעלאת הלוגו");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onClose={uploading ? undefined : onClose} fullWidth maxWidth="xs"
      PaperProps={{ sx: { direction: "rtl" } }}>
      <DialogTitle>החלפת לוגו</DialogTitle>
      <DialogContent>
        <Typography sx={{ mb: 2 }}>האם להחליף את הלוגו בתמונה הבאה?</Typography>
        {previewUrl && (
          <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
            <Box
              component="img"
              src={previewUrl}
              alt="preview"
              sx={{
                maxWidth: "100%",
                maxHeight: 200,
                objectFit: "contain",
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 1,
              }}
            />
          </Box>
        )}
        {error && (
          <Typography sx={{ color: "error.main", mt: 1 }}>{error}</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={uploading}>ביטול</Button>
        <Button onClick={handleConfirm} variant="contained" disabled={uploading || !previewUrl}>
          {uploading ? "מעלה..." : "החלף לוגו"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoConfirmDialog;
