import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export type FoodItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type FoodSection = {
  title?: string;
  items: FoodItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const foodSections: FoodSection[] = [
  {
    title: "",
    items: [
      {
        title: "תזונה",
        icon: <RestaurantIcon />,
        content: (
          <Box>
            <Typography sx={{ ...textSx, mt: 1 }}>• חדר האוכל סגור לשיבה</Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>• טייסות מבצעיות ונקודות שהוגדרו- בדחיפה</Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              • יתר היחידות- ע״ב משיכות מגף תזונה בחדר נגדים:
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              • בהתאם לנהלי התברואה- יש להגיע עם ציוד מתאים חם/קר.
            </Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>• יש למנות נציג 1 למשיכות.</Typography>
            <Typography sx={{ ...textSx, mt: 1 }}>
              • שעות משיכה (בוקר 08:30-09:00), (צהריים 12:00-13:00), (ערב 17:30-18:30), (לילה 20:00-20:30).
            </Typography>
          </Box>
        ),
      },
    ],
  },
];