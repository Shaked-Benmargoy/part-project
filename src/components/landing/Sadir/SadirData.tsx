import { ReactNode } from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PaymentsIcon from "@mui/icons-material/Payments";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import PolicyIcon from "@mui/icons-material/Policy";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PublicIcon from "@mui/icons-material/Public";
import DescriptionIcon from "@mui/icons-material/Description";
import { Typography, Box, Stack} from "@mui/material";
import { listItemSx } from "../Miluim/MiluimData";

export type SadirItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type SadirSection = {
  title?: string;
  items: SadirItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const sadirSections: SadirSection[] = [
  {
    title: "",
    items: [
      {
        title: "מענקים לחיילי חובה המשתייכים לאוכלוסיות ייחודיות",
        icon: <CardGiftcardIcon />,
        content: (
  <>
    <Typography sx={textSx}>
      כחלק מהרצון להטיב עם חיילי החובה בצה"ל המשתייכים לאוכלוסיות ייחודיות ולהרחיב את המענים הניתנים להם,
      הוחלט בעת הזו על מתן מענקים (ורטיקל) באופן הבא:
    </Typography>

    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          pb: 1,
          fontWeight: 600,
        }}
      >
        <Typography sx={{ color: "#fff" }}>סוג אוכלוסייה</Typography>
        <Typography sx={{ color: "#fff" }}>גובה הטבה</Typography>
      </Box>

      {[
        { label: 'תשמ"ש הורים', value: '₪ 1,200' },
        { label: 'בודדים', value: '₪ 900' },
        { label: 'זכאי סיוע', value: '₪ 900' },
        { label: 'הורים לילדים', value: '₪ 900' },
        { label: 'נשוי / ידוע ללא ילדים', value: '₪ 500' },
      ].map((row) => (
        <Box
          key={row.label}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            py: 1.5,
          }}
        >
          <Typography sx={{color: "#fff"}}>{row.label}</Typography>
          <Typography sx={{color: "#fff"}}>{row.value}</Typography>
        </Box>
      ))}
    </Box>

    <Box sx={{ mt: 3 }}>
      {[
        "תאריך גזירת הדו\"ח הינו: 08/03/2026.",
        "על החיילים להיות בסר״ש חובה, במצב שירות תקין בלבד, המשתחררים אחרי ה-15/03/2026.",
        "חיילים בשלב ב/ג לא ייכללו בדו\"ח לקבלת ההטבה, וזאת למול משך שירות חובה קצר.",
        "ימל״מים (שב״ס,מג״ב,שח״ם) - נדרשים לבצע את ההזנות בגופים בהתאם לדו״ח זכאים.",
        "בד בבד, צפויה להתפרסם מדיניות ייעודית להטבה זו, אשר תפרט אודות השיטה, מועדי הגשת רטרו, התייחסות למפרעות ודוח הזכאים.",
        "ההזנות יבוצעו ע\"י מופ\"ת - תא חובה.",
        "ההזנות יבוצעו לא יאוחר מהתאריך ה־12/03/2026.",
      ].map((text, i) => (
        <Typography key={i} sx={{ ...textSx }}>
          • {text}
        </Typography>
      ))}
    </Box>
  </>
),
      },
      {
        title: "תוספות תקציב ומענה לחיילי החובה",
        icon: <PaymentsIcon />,
        content: (
            <Stack>
                <Typography sx={listItemSx}>• בשל מגבלות המצב הביטחוני וסגירת המשק, עולה צורך גובר בסיוע כלכלי לאוכלוסיית חיילי החובה. אי לכך, הוגדל תקציב סל המענקים - מוזמנים להגיש בקשות לתוספת תקציב במידת הצורך מול קצינת ת"ש.</Typography>
                <Typography sx={listItemSx}>• תוספת תקציבית זו נועדה לייצר לבסיסים וליחידות מרחב וגמישות במתן מענים כלכליים לכלל האוכלוסיות ביחידה.</Typography>                
            </Stack>
        ),
      },
      {
        title: 'חופשה מיוחדת עבור משרתים בסד"ש חובה הנמצאים בחו"ל',
        icon: <FlightTakeoffIcon />,
        content: (
        <Stack spacing={1}>
        <Typography sx={listItemSx}>• משרתים השוהים בחופשה בחו"ל יוזן עבורם ימי חופשה שנתית.</Typography>
        <Typography sx={listItemSx}>• למול התמשכות המערכה הוחלט כי בעבור משרת שסיים את מכסת ימי החופשה השנתית בעודו בחו"ל / מימש חמישה ימי חופשה שנתית מעבר למועד חזרתו המקורי, תוזן עבורו המשך שהיה בחו"ל על חשבון ימי מיוחדת עד לחזרתו בטיסה ארצה.</Typography>
        <Typography sx={listItemSx}>• הוחלט כי בקשות עבור חיילי חובה למיוחדת אישית חריגה בחו"ל יבוזרו מתא חובה במופת לקצינות הת"ש ביחידות.</Typography>
        <Typography sx={listItemSx}>• יודגש - הזנה ברמת קצינת ת"ש הנה עבור מיוחדות שאורכן עד 90 ימים.</Typography>
        </Stack>
      ),},
      {
        title: "מדיניות פיצוי טיסות",
        icon: <PolicyIcon />,
        content: (
        <Stack spacing={1}>
        <Typography sx={listItemSx}>• עם ראשית מבצע שאגת הארי נסגרו שמי ישראל לטיסות. בוטלו טיסות יציאה מהארץ ואל הארץ. יודגש, כי פיצוי בגין ביטולים אלו יבוררו בידי הפרט למול חברות התעופה.</Typography>
        <Typography sx={listItemSx}>• משרת, בחובה או בקבע, אשר אחד מההיגדים מטה רלוונטיים עבורו, יוכל להגיש בקשה לפיצוי בסכום שלא יעלה על 10 אש"ח:</Typography>
        <Typography sx={listItemSx}>- שהה בחו"ל בזמן המבצע ונאלץ להקדים חזרתו לטובת סיוע בלחימה.</Typography>
        <Typography sx={listItemSx}>- משרת אשר בקשתו לטיסה לחו"ל אושרה בידי מפקדיו טרם פרוץ מבצע שאגת הארי, קרי, ה-28/02/2026 ומועד טיסתו מאוחר מהתאריך ה-07/03/2026 (מועד פתיחת השמיים).</Typography>
        <Typography sx={listItemSx}>- הפיצוי יינתן בגין עלויות ביטול החופשה, בניכוי החזרים להם יימצא המשרת זכאי מטעם חברות התעופה והספקים הרלוונטיים, בכפוף לתקרת הפיצוי. </Typography>
        </Stack>
      ),},
      {
        title: "תווי תרומה לחיילי חובה שפונו מביתם",
        icon: <VolunteerActivismIcon />,
        content: <Typography sx={textSx}>הופצה מדיניות תווי תרומה לאוכלוסיית חיילי החובה אשר ביתם נפגע ופונו מביתם (מוכרים לסגל הת"ש). לאחר העברת השמות יבחנו בוועדות סיוע בראשון רע"ן ת"ש על סך תווים בגובה 2,000 שקלים.</Typography>,
      },
      {
        title: "נפגעי רכוש",
        icon: <HomeWorkIcon />,
        content: (
        <Stack>
        <Typography sx={textSx}>מענה מאכ"א - בנוסף לזכאויות המפורטות במייל מטה, יוזן עבור חיילים שפונו ע"י הרשויות, מענק ע"ס 2,000 ₪ ו500 נקודות. בנוסף תינתן אפשרל יוזן עבורם ימי חופשה שנתית.</Typography>
        <Typography sx={textSx}>מענה מהמטה - יינתן מענה מטעם המטה (ללא תלות האם פונה ע"י הרשויות/עצמאית) בהתאם למדרג הבא:</Typography>
        <Typography sx={listItemSx}>• נפגע קל - תו הזהב בפייבוקס ע"ס 250 ₪.</Typography>
        <Typography sx={listItemSx}>• נפגע בינוני - תו הזהב בפייבוקס ע"ס 500 ₪.</Typography>
        <Typography sx={listItemSx}>• נפגש חמור - תו הזהב בפייבוקס ע"ס 1,000 ₪.</Typography>
        </Stack>
        ),},
      {
        title: "דו״ח 1",
        icon: <DescriptionIcon />,
        content: (
        <Stack>
            <Typography sx={textSx}>נדרש לסגור כל יום עד השעה 10:00.</Typography>
            <Typography sx={textSx}>ימי שישי - עד השעה 11:00.</Typography>
            <Typography sx={textSx}>ימי שבת - עד שעתיים לאחר יציאת שבת.</Typography>
            <Typography sx={listItemSx}>• במידה ומשרתים אינם זמינים להזנת דיווח פרט/מפקד בדיגיטל - מאושרת הזנה ידנית במערכת 'אנשים' על ידי סגלי משא״ן ביחידה. </Typography>
        </Stack>
        ),
      },
      {
        title: "חופשות",
        icon: <BeachAccessIcon />,
        content:(
            <Stack>
                <Typography sx={listItemSx}>• פדיון ימי חופשה של אנשי קבע- שולחת תמונה בנפרד.</Typography>
                <Typography sx={listItemSx}>• ככלל- אין לבטל חופשות מיוחדות מטכליות (אבל,מחלה,אשפוז,פציעה ושמחות משפחתיות).</Typography>
                <Typography sx={listItemSx}>• חיילים השוהים בחופשה בסמכות מפקד בדרגת אל״מ ומעלה בנסיבות מבצעיות בלבד על ביטול או קיצור החופשה.</Typography>
                <Typography sx={listItemSx}>• מימוש חופשה שנתית- בשיקול מפקד בלבד.</Typography>
                <Typography sx={listItemSx}>• שימו לב- דיווח ״כוננות בית״ אינו תחליף להזנת ״חופשה״!</Typography>
                <Typography sx={listItemSx}>• חופשת שחרור- בסמכות מפקד בדרגת אל״מ ומעלה לבטל או לקצר חופשת שחרור.</Typography>

            </Stack>
        ),
      },
      {
        title: "חו״ל",
        icon: <PublicIcon />,
        content: <Stack>
            <Typography sx={textSx}>ככלל- לא מאושרות טיסות לחול למשרתי צה״ל בחופשה או בתפקיד.</Typography>
            <Typography sx={textSx}>משרתים אשר שוהים בחול יוזנו עבורם ימי חופשה שנתית.</Typography>
            <Typography sx={textSx}>למול התמשכות המערכה הוחלט כי בעבור משרת שסיים את ימי החופשה שלו בעודו בחול או מימש 5 ימי חופשה שנתית מעבר למועד חזרתו, תוזן עבורו המשך שהייה על חשבון ימי חופשה מיוחדת.</Typography>
            <Typography sx={listItemSx}>• חיילי חובה- דרך סגל הת״ש.</Typography>
            <Typography sx={listItemSx}>• אנשי קבע- דרך גף כ״א קבע למול מוצב פרט ח״א.</Typography>
        </Stack>
      },
    ],
  },
];