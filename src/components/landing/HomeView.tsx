import { Stack } from "@mui/material";
import CategoriesGrid from "./CategoriesGrid";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import LandingLayout from "./LandingLayout";

type HomeViewProps = {
  onOpenKeva: () => void;
  onOpenMiluim: () => void;
};

const HomeView = ({ onOpenKeva, onOpenMiluim }: HomeViewProps) => {
  return (
    <LandingLayout>
      <Stack
        spacing={4}
        sx={{
          minHeight: "100vh",
          px: 3,
          py: 5,
          alignItems: "center",
        }}
      >
        <HeroSection />
        <CategoriesGrid
          onOpenKeva={onOpenKeva}
          onOpenMiluim={onOpenMiluim}
        />
        <FooterSection />
      </Stack>
    </LandingLayout>
  );
};

export default HomeView;