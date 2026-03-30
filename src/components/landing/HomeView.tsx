import { CircularProgress, Stack, Typography } from "@mui/material";
import LandingLayout from "./LandingLayout";
import HeroSection from "./HeroSection";
import CategoriesGrid from "./CategoriesGrid";
import FooterSection from "./FooterSection";
import { Topic } from "../../services/sharepointApi";

type HomeViewProps = {
  topics: Topic[];
  loading: boolean;
  error: string | null;
  onOpenTopic: (topic: Topic) => void;
};

const HomeView = ({ topics, loading, error, onOpenTopic }: HomeViewProps) => {
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
        {loading ? (
          <CircularProgress sx={{ color: "#6EA3FF" }} />
        ) : error ? (
          <Typography
            sx={{
              color: "#ff6b6b",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            שגיאה בטעינת הנתונים. נסו לרענן את הדף.
          </Typography>
        ) : (
          <CategoriesGrid topics={topics} onOpenTopic={onOpenTopic} />
        )}
        <FooterSection />
      </Stack>
    </LandingLayout>
  );
};

export default HomeView;
