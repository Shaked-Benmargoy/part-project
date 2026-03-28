import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LandingLayout from "../LandingLayout";
import DentalCategoriesGrid from "./DentalCategoriesGrid";

type DentalViewProps = {
  onBack: () => void;
};

const DentalView = ({ onBack }: DentalViewProps) => {
  return (
    <LandingLayout>
      <Stack
        spacing={3}
        sx={{
          minHeight: "100vh",
          px: 3,
          py: 4,
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "1040px", display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={onBack}
            startIcon={<ArrowBackIcon sx={{ transform: "rotate(180deg)" }} />}
            sx={{
              color: "#6EA3FF",
              fontWeight: 800,
            }}
          >
חזרה לדף הראשי          </Button>
        </Box>

        <Typography
          sx={{
            color: "#fff",
            fontSize: "2.5rem",
            fontWeight: 800,
          }}
        >
          רפואת שיניים
        </Typography>

        <DentalCategoriesGrid />
      </Stack>
    </LandingLayout>
  );
};

export default DentalView;