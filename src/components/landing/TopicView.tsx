import { useState } from "react";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LandingLayout from "./LandingLayout";
import ExpandableInfoCard from "./ExpandableInfoCard";
import SubTopicContent from "./SubTopicContent";
import { useSubTopics } from "../../hooks/useSubTopics";
import { getIcon } from "../../utils/iconMap";

type TopicViewProps = {
  topicId: number;
  topicTitle: string;
  onBack: () => void;
};

const TopicView = ({ topicId, topicTitle, onBack }: TopicViewProps) => {
  const { subTopics, loading, error } = useSubTopics(topicId);
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
          {topicTitle}
        </Typography>

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
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "1040px" }}>
            {subTopics.map((st) => {
              const IconComponent = getIcon(st.icon);
              return (
                <ExpandableInfoCard
                  key={st.Id}
                  title={st.Title}
                  icon={<IconComponent />}
                  content={<SubTopicContent data={st.data} link={st.link} />}
                  expanded={expandedId === st.Id}
                  onChange={() =>
                    setExpandedId(expandedId === st.Id ? null : st.Id)
                  }
                />
              );
            })}
          </Stack>
        )}
      </Stack>
    </LandingLayout>
  );
};

export default TopicView;
