import { Box, Stack, Typography,Button } from "@mui/material";
import LandingLayout from "../LandingLayout";
import KevaCategoriesGrid from "./KevaCategoriesGrid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type KevaViewProps = {
  onBack: () => void;
};

const KevaView = ({ onBack }: KevaViewProps) => {
  return (
    <LandingLayout>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          px: { xs: 2, md: 4 },
          py: { xs: 3, md: 4 },
          boxSizing: "border-box",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            alignItems: "stretch",
          }}
        >
          <Box
          sx={{
            width: "100%",
            maxWidth: "1040px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
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
              textAlign: "center",
              fontSize: { xs: "2.4rem", md: "3.4rem" },
              fontWeight: 800,
              mb: 4,
            }}
          >
            אוכלוסיית הקבע
          </Typography>

          <KevaCategoriesGrid />
        </Stack>
      </Box>
    </LandingLayout>
  );
};

export default KevaView;