import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LandingLayout from "../LandingLayout";
import KevaCategoriesGrid from "./KevaCategoriesGrid";

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
            onClick={onBack}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
              color: "#6EA3FF",
              cursor: "pointer",
              mb: 5,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 700,
                color: "#6EA3FF",
              }}
            >
              חזרה לדף הראשי
            </Typography>

            <ArrowForwardIcon sx={{ fontSize: 34, color: "#6EA3FF" }} />
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