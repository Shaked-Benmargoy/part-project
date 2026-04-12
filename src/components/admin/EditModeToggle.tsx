import { Button } from "@mui/material";
import EditOutlined from "@mui/icons-material/EditOutlined";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import { useAdminContext } from "../../contexts/AdminContext";

const EditModeToggle = () => {
  const { isAdmin, editMode, toggleEditMode } = useAdminContext();

  if (!isAdmin) return null;

  return (
    <Button
      onClick={toggleEditMode}
      startIcon={editMode ? <CloseOutlined /> : <EditOutlined />}
      sx={{
        color: editMode ? "#ff6b6b" : "#6EA3FF",
        fontSize: { xs: "0.95rem", md: "1.1rem" },
        fontWeight: 700,
        border: "1px solid",
        borderColor: editMode ? "rgba(255,107,107,0.5)" : "rgba(110,163,255,0.5)",
        borderRadius: "12px",
        px: 2,
        py: 0.5,
      }}
    >
      {editMode ? "יציאה ממצב עריכה" : "מצב עריכה"}
    </Button>
  );
};

export default EditModeToggle;
