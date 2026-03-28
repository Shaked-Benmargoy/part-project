import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

export type DentalItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type DentalSection = {
  title?: string;
  items: DentalItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const dentalSections: DentalSection[] = [
  {
    title: "",
    items: [
      {
        title: "רפואת שיניים",
        icon: <MedicalServicesIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>
              קבלת טיפולי עזרה ראשונה בתיאום מראש
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              <strong>טלפון / וואטסאפ:</strong>{" "}
              <a
                href="tel:0733637081"
                style={{ color: "#6EA3FF" }}
              >
                073-3637081
              </a>
            </Typography>
          </Box>
        ),
      },
    ],
  },
];