import { Stack } from "@mui/material";
import LandingLayout from "./LandingLayout";
import HeroSection from "./HeroSection";
import CategoriesGrid from "./CategoriesGrid";
import FooterSection from "./FooterSection";

type HomeViewProps = {
  onOpenKeva: () => void;
};

const HomeView = ({ onOpenKeva }: HomeViewProps) => {
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
        <CategoriesGrid onOpenKeva={onOpenKeva} />
        <FooterSection />
      </Stack>
    </LandingLayout>
  );
};

export default HomeView;