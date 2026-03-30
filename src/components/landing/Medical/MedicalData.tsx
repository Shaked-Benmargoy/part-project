import { ReactNode } from "react";
import { Box, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

export type MedicalItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type MedicalSection = {
  title?: string;
  items: MedicalItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const medicalSections: MedicalSection[] = [
  {
    title: "",
    items: [
      {
        title: "דרך התקשרות",
        icon: <PhoneIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>
              <strong>טלפון המרפאה:</strong> 073-3636930
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              <strong>וואטסאפ המרפאה:</strong> 052-941-5913
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              <strong>מקרה חירום:</strong> הקפצה דרך המושלם
            </Typography>
          </Box>
        ),
      },
      {
        title: "רפואת נשים ",
        icon: <LocalHospitalIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>
              <strong>מוקד בריאות האישה זמין עבורכן בין השעות 8:00-20:00</strong> 
            </Typography>

            <Typography sx={{ ...textSx, mt: 1 }}>
              <strong>וואטסאפ המרפאה:</strong> 050-3489698
            </Typography>
            <Button
            href="https://tikshuv.sharepoint.com/:i:/r/sites/baha8-minhala/Shared%20Documents/women-health.jpg?csf=1&web=1&e=Pg899z"
            target="_blank"
            sx={{ mt: 1 }}
            >
  לפרטים נוספים במודעה
          </Button>
          </Box>
        ),
      },
      {
        title: "שירותי רפואה",
        icon: <LocalHospitalIcon />,
        content: (
          <Box>
            {[
              "שעות פעילות 8:00-17:00",
              "לאחר שעות הפעילות - המרפאה פועלת על בסיס חובש תורן",
              "חדר תרופות 8:00-12:00, 13:00-17:00. את כלל התרופות ניתן למשוך בסופרפארם בהצגת חוגר.",
              "שירותי מעבדה - לאחר קבלת הפנייה מתאימה, בסניפי מכבי בפריסה ארצית, בהצגת חוגר.",
              "הזמנת תור לרופא דרך האפליקציה, הזמנת תור לאחות לפי דרישה",
              "שירותי רפואה אונליין: החזר הפניות, בקשה לתרופות קבועות, בקשה לימי מחלה (רק אנשי קבע).",
              "קביעת תור לבדיקות שמיעה - דרך האפליקציה",
              'רפואה תעסוקתית - במייל, ד"ר עומר אנגל / אחות המרפאה',
              'ועדות רפואיות - תור לד"ר עומר אנגל / ד"ר רבקה בינס',
              "החתמת תיקי טיול - מול יפעת מילר / יעל כהן",
              "שירותי פיזיותרפיה במתחם 669 - תיאום תור במייל, יואב שולשן.",
              "הדברות ומזיקים - דוד אלטמן",
            ].map((text, i) => (
              <Typography key={i} sx={{ ...textSx, mt: 1 }}>
                • {text}
              </Typography>
            ))}
          </Box>
        ),
      },
    ],
  },
];