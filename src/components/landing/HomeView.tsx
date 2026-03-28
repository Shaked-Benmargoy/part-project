import { Stack } from "@mui/material";
import LandingLayout from "./LandingLayout";
import HeroSection from "./HeroSection";
import CategoriesGrid from "./CategoriesGrid";
import FooterSection from "./FooterSection";

type HomeViewProps = {
  onOpenKeva: () => void;
  onOpenMiluim: () => void;
  onOpenSadir: () => void;
  onOpenMedical: () => void;
};

const HomeView = ({
  onOpenKeva,
  onOpenMiluim,
  onOpenSadir,
  onOpenMedical,
}: HomeViewProps) => {
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
          onOpenSadir={onOpenSadir}
          onOpenMedical={onOpenMedical}
        />
        <FooterSection />
      </Stack>
    </LandingLayout>
  );
};

export default HomeView;