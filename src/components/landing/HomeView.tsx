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
  onOpenDental: () => void;
  onOpenFood: () => void;
  onOpenLogistics: () => void;
  onOpenPsychology: () => void;
  onOpenPersonal: () => void;
};

const HomeView = ({
  onOpenKeva,
  onOpenMiluim,
  onOpenSadir,
  onOpenMedical,
  onOpenDental,
  onOpenFood,
  onOpenLogistics,
  onOpenPsychology,
  onOpenPersonal
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
          onOpenDental={onOpenDental}
          onOpenFood={onOpenFood}
          onOpenLogistics={onOpenLogistics}
          onOpenPsychology={onOpenPsychology}
          onOpenPersonal={onOpenPersonal}
        />
        <FooterSection />
      </Stack>
    </LandingLayout>
  );
};

export default HomeView;