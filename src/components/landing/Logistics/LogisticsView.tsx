import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LandingLayout from "../LandingLayout";
import LogisticsCategoriesGrid from "./LogisticsCategoriesGrid";

type LogisticsViewProps = {
  onBack: () => void;
};

const LogisticsView = ({ onBack }: LogisticsViewProps) => {
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
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          לוגיסטיקה
        </Typography>

        <LogisticsCategoriesGrid />
      </Stack>
    </LandingLayout>
  );
};

export default LogisticsView;