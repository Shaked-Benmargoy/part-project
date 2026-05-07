import { useEffect, useRef, useState } from "react";
import { Box, IconButton, SxProps, Theme } from "@mui/material";
import EditOutlined from "@mui/icons-material/EditOutlined";
import { useAdminContext } from "../../contexts/AdminContext";
import { uploadLogo } from "../../services/sharepointApi";
import LogoConfirmDialog from "./LogoConfirmDialog";

type EditableLogoProps = {
  src: string;
  alt: string;
  filename: string;
  sx?: SxProps<Theme>;
};

const EditableLogo = ({ src, alt, filename, sx }: EditableLogoProps) => {
  const { editMode, logoVersion, bumpLogoVersion } = useAdminContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!pendingFile) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(pendingFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [pendingFile]);

  const handlePencilClick = () => inputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPendingFile(file);
    e.target.value = "";
  };

  const handleConfirmUpload = async () => {
    if (!pendingFile) return;
    await uploadLogo(filename, pendingFile);
    bumpLogoVersion();
  };

  const handleDialogClose = () => setPendingFile(null);

  const versionedSrc = `${src}${src.includes("?") ? "&" : "?"}v=${logoVersion}`;

  return (
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <Box component="img" src={versionedSrc} alt={alt} sx={sx} />
      {editMode && (
        <>
          <IconButton
            size="small"
            onClick={handlePencilClick}
            sx={{
              position: "absolute",
              top: -6,
              right: -6,
              color: "#6EA3FF",
              bgcolor: "rgba(0,0,0,0.55)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.75)" },
            }}
          >
            <EditOutlined fontSize="small" />
          </IconButton>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </>
      )}
      <LogoConfirmDialog
        open={pendingFile !== null}
        previewUrl={previewUrl}
        onClose={handleDialogClose}
        onConfirm={handleConfirmUpload}
      />
    </Box>
  );
};

export default EditableLogo;
