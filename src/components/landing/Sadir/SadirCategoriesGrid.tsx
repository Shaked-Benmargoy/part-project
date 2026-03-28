import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import ExpandableInfoCard from "../Keva/ExpandableInfoCard";
import { sadirSections } from "./SadirData";

const SadirCategoriesGrid = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        maxWidth: "1040px",
      }}
    >
      {sadirSections.map((section, index) => (
        <Stack
          key={section.title || `section-${index}`}
          spacing={2}
          sx={{ width: "100%" }}
        >
          {section.title ? (
            <Typography
              sx={{
                color: "#6EA3FF",
                fontSize: { xs: "1.6rem", md: "2.2rem" },
                fontWeight: 800,
                textAlign: "right",
                pr: 1,
                mt: 1,
              }}
            >
              {section.title}
            </Typography>
          ) : null}

          {section.items.map((item) => (
            <ExpandableInfoCard
              key={item.title}
              title={item.title}
              icon={item.icon}
              content={item.content}
              expanded={expandedId === item.title}
              onChange={() =>
                setExpandedId(expandedId === item.title ? null : item.title)
              }
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default SadirCategoriesGrid;