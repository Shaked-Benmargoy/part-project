import { ReactNode } from "react";
import { Box, Typography, Link } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export type PersonalItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type PersonalSection = {
  title?: string;
  items: PersonalItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const personalSections: PersonalSection[] = [
  {
    title: "",
    items: [
      {
        title: 'שק"ם',
        icon: <StoreIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1, fontWeight: 700 }}>
              שק"ם חיילים
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              א׳-ה׳ 08:30-17:00
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              ו׳ 09:00-14:00
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              שבת סגור
            </Typography>

            <Typography sx={{ ...textSx, mt: 2, fontWeight: 700 }}>
              שק"ם משפחות
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              א׳-ד 07:30-16:00
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              יום ה׳ 07:30-15:30
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              יום ו׳ 07:30-12:30
            </Typography>
          </Box>
        ),
      },
      {
        title: "אימון גופני",
        icon: <FitnessCenterIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>
              ניתן לקבוע אימונים בטייסות / יחידות
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              לפרטים בקישור
            </Typography>

            <Link
              href="#"
              underline="hover"
              sx={{
                display: "inline-block",
                mt: 1,
                color: "#6EA3FF",
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 700,
              }}
            >
              קישור לפלייר
            </Link>
          </Box>
        ),
      },
    ],
  },
];