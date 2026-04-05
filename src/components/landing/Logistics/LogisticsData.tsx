import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

export type LogisticsItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type LogisticsSection = {
  title?: string;
  items: LogisticsItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const logisticsSections: LogisticsSection[] = [
  {
    title: "",
    items: [
      {
        title: "נשקייה",
        icon: <MilitaryTechIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>
            <Typography>שעות פעילות:</Typography>
            א׳ - ה׳  16:00 - 08:00  
            <Typography> יום ו׳ 12:00 - 08:00</Typography>            </Typography>
          </Box>
        ),
      },
      {
        title: "אפסנאות",
        icon: <Inventory2Icon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>
            <Typography>שעות פעילות:</Typography>
            א׳ - ה׳  16:00 - 08:00  
            <Typography> יום ו׳ 12:00 - 08:00</Typography>
            </Typography>
          </Box>
        ),
      },
      {
        title: "היסעים",
        icon: <AirportShuttleIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>
              ימים א׳-ה׳
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              • מרכבת מזכרת בתיה לבסיס- 08:00, 09:00, 10:00, 11:00, 12:00, 13:00
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              • מהבסיס לרכבת מזכרת בתיה- 14:00, 15:00, 16:00, 17:00, 18:00
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              • מצומת תל נוף לבסיס- 08:00, 09:00, 10:00, 11:00, 12:00, 13:00
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              • מהבסיס לצומת תל נוף- 16:30, 17:30, 18:30, 19:30
            </Typography>
          </Box>
        ),
      },
    ],
  },
];