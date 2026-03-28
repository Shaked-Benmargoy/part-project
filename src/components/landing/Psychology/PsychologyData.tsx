import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";

export type PsychologyItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type PsychologySection = {
  title?: string;
  items: PsychologyItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const psychologySections: PsychologySection[] = [
  {
    title: "",
    items: [
      {
        title: "שירות פסיכולוגי",
        icon: <PsychologyIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1, fontWeight: 700 }}>
              חיילי חובה:
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              השירות בבסיס בשעות 09:00-17:00
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              קביעת תור בוואצפ 052-2345379
            </Typography>

            <Typography sx={{ ...textSx, mt: 2, fontWeight: 700 }}>
              משרתי קבע:
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              מכון הקבע בטלפון / וואצפ 052-9271493
            </Typography>
          </Box>
        ),
      },
    ],
  },
];