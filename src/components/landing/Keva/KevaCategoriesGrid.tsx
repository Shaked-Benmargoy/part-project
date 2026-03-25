import {  Stack, Typography } from "@mui/material";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import KevaCategoryCard from "./KevaCategoryCard";

const kevaSections = [
  {
    title: "",
    items: [
      { title: "סיוע כלכלי", icon: <HandshakeOutlinedIcon /> },
      { title: "מענה כלכלי למשרתים במצוקה", icon: <VolunteerActivismOutlinedIcon /> },
      { title: 'שי הרמטכ"ל לפסח', icon: <MilitaryTechOutlinedIcon /> },
      { title: 'שי הרמטכ"ל לפורים', icon: <MilitaryTechOutlinedIcon /> },
      { title: "משרתים שביתם נפגע ופונו", icon: <HomeOutlinedIcon /> },
      { title: "החזרי הוצאות נסיעה", icon: <CardGiftcardOutlinedIcon /> },
      { title: 'חופשה מיוחדת למשרתים בחו"ל', icon: <CalendarMonthOutlinedIcon /> },
      { title: "פיצוי בגין ביטול טיסה", icon: <FlightOutlinedIcon /> },
      { title: "ביטוח חיים", icon: <HealthAndSafetyOutlinedIcon /> },
      { title: "משרתים שביתם נפגע", icon: <HomeOutlinedIcon /> },
      { title: "מדיניות מספר 10", icon: <DescriptionOutlinedIcon /> },
      { title: "פיצוי בגין חופשה שבוטלה", icon: <FlightOutlinedIcon /> },
      { title: "משפחות משרתי הקבע", icon: <FavoriteBorderOutlinedIcon /> },
      { title: "מגן הקבע", icon: <MilitaryTechOutlinedIcon /> },
      { title: "בית של קבע", icon: <HomeOutlinedIcon /> },
    ],
  },
  {
    title: "קרן הסיוע",
    items: [
      { title: "טיפול רגשי", icon: <FavoriteBorderOutlinedIcon /> },
      { title: "בייביסיטר", icon: <EmojiEmotionsOutlinedIcon /> },
    ],
  },
  {
    title: "לימודים",
    items: [
      { title: "דחיית פתיחת הסמסטר", icon: <CalendarMonthOutlinedIcon /> },
      { title: "נוכחות בלימודים", icon: <MenuBookOutlinedIcon /> },
      { title: "מתווה הקלות", icon: <InsertDriveFileOutlinedIcon /> },
      { title: 'קורסי גמוש מקוונים', icon: <SchoolOutlinedIcon /> },
      { title: "עדכון למוסדות הלימוד", icon: <MenuBookOutlinedIcon /> },
      { title: "אגרת ללומדים", icon: <DescriptionOutlinedIcon /> },
    ],
  },
  {
    title: "תהליכים סגליים",
    items: [
      { title: "סבבים ועיתויים", icon: <AutorenewOutlinedIcon /> },
      { title: "קורסים", icon: <SchoolOutlinedIcon /> },
      { title: "גיוס לקבע", icon: <GroupAddOutlinedIcon /> },
    ],
  },
];

const KevaCategoriesGrid = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        width: "100%",
        maxWidth: "1040px",
      }}
    >
      {kevaSections.map((section) => (
        <Stack key={section.title || "main"} spacing={2.5}>
          {section.title ? (
            <Typography
              sx={{
                color: "#6EA3FF",
                fontSize: { xs: "1.5rem", md: "2.4rem" },
                fontWeight: 800,
                textAlign: "right",
                pr: 1,
              }}
            >
              {section.title}
            </Typography>
          ) : null}

          {section.items.map((item) => (
            <KevaCategoryCard
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default KevaCategoriesGrid;