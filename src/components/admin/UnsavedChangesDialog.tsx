import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Typography,
} from "@mui/material";

type UnsavedChangesDialogProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const UnsavedChangesDialog = ({ open, onCancel, onConfirm }: UnsavedChangesDialogProps) => {
  return (
    <Dialog open={open} onClose={onCancel} fullWidth maxWidth="xs"
      PaperProps={{ sx: { direction: "rtl" } }}>
      <DialogTitle>שינויים לא שמורים</DialogTitle>
      <DialogContent>
        <Typography>יש שינויים בסדר שלא נשמרו. לצאת בלי לשמור?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>השאר</Button>
        <Button onClick={onConfirm} color="error" variant="contained">צא בלי לשמור</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UnsavedChangesDialog;
