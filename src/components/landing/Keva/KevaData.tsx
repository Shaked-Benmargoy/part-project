import { Box, Link, Stack, Typography } from "@mui/material";
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
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { ReactNode } from "react";

export type KevaItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type KevaSection = {
  title: string;
  items: KevaItem[];
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right" as const,
};

const listItemSx = {
  ...textSx,
  display: "block",
};

const financialAidContent = (
  <Stack spacing={1}>
    <Typography sx={textSx}>
      <Box component="span" sx={{ fontWeight: 700 }}>
        סיוע כלכלי
      </Box>{" "}
      לאנשי הקבע בדיגיטל
    </Typography>

    <Typography sx={textSx}>איך מגישים את הבקשה?</Typography>

    <Stack>
      <Typography sx={listItemSx}>• נכנסים לאתר 369</Typography>
      <Typography sx={listItemSx}>• לוחצים למטה על החיפוש</Typography>
      <Typography sx={listItemSx}>• לוחצים על ת״ש קבע</Typography>
      <Typography sx={listItemSx}>• ולמטה מופיע ליווי כלכלי</Typography>
    </Stack>

    <Typography sx={textSx}>דגשים חשובים:</Typography>

    <Stack>
      <Typography sx={listItemSx}>
        • יש לוודא שכלל הקבצים עדכניים על מנת למנוע דרישות אישורים
      </Typography>
      <Typography sx={listItemSx}>
        • יש לוודא כי הקבצים מתחת ל-3 מ״ב, אחרת הקובץ לא יעלה
      </Typography>
      <Typography sx={listItemSx}>
        • מתקבל מייל חוזר להצלחת הגשת הבקשה
      </Typography>
    </Stack>

    <Typography sx={textSx}>מסמכים נדרשים:</Typography>

    <Stack>
      <Typography sx={listItemSx}>• 3 חודשים עו״ש</Typography>
      <Typography sx={listItemSx}>• 3 חודשים פירוט אשראי</Typography>
      <Typography sx={listItemSx}>• הלוואות</Typography>
      <Typography sx={listItemSx}>• חסכונות / פקדונות</Typography>
      <Typography sx={listItemSx}>• קרן השתלמות</Typography>
      <Typography sx={listItemSx}>• ריכוז יתרות</Typography>
    </Stack>

    <Link
      href="https://mofet-frontend.wiz.digital.idf.il/m/NYZ43QF6QH"
      underline="none"
      sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
    >
      למילוי הבקשה באתר
      <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
    </Link>
  </Stack>
);

export const kevaSections: KevaSection[] = [
  {
    title: "",
    items: [
      {
        title: "סיוע כלכלי",
        icon: <HandshakeOutlinedIcon />,
        content: financialAidContent,
      },
      {
        title: "מענה כלכלי למשרתים במצוקה",
        icon: <VolunteerActivismOutlinedIcon />,
        content: (
     <Stack spacing={1}>
        <Typography sx={textSx}>
      יתקיימו ועדות סיוע למשרתים שנקלעו למצוקה כלכלית חריגה בעקבות המצב, בדגש על משרתים שביתם נפגע.
        </Typography>
        <Typography sx={textSx}>
      יש להגיש לוועדה את כלל האישורים הכלכליים והרפואיים התומכים לבקשה ומכתב הסבר מפורט.
      האישורים שיש לצרף: פירוט עו"ש, ריכוז יתרות, ריכוז הלוואות וקרן השתלמות.
        </Typography>
        <Typography sx={textSx}>
      המענה אפשרי דרך הוועדה:
        </Typography>
        <Stack>
        <Typography sx={listItemSx}>• מענקים</Typography>
        <Typography sx={listItemSx}>• הלוואות</Typography>
        <Typography sx={listItemSx}>• תווי מזון</Typography>
        <Typography sx={listItemSx}>• ליווי כלכלי</Typography>
        <Typography sx={listItemSx}>• מוצרי חשמל</Typography>
        </Stack>
        <Typography sx={textSx}>
      בקשות יועברו דרך שלישי היחידות אל משרד שכר ורווחה/מצב מנהלה.
        </Typography>
   </Stack>
     ), },
      {
        title: 'שי הרמטכ"ל לפסח',
        icon: <MilitaryTechOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      משרתות ומשרתי קבע יקרים,
    </Typography>

    <Typography sx={textSx}>
      הרמטכ״ל: כעמוד האש שהלך לפני מחנה ישראל ביציאתם ממצרים, כך גם אתם עומדים בחזית – חומת המגן של ישראל.
    </Typography>

    <Typography sx={textSx}>
      מצורפת איגרת לרגל חג הפסח מטעם ראש המטה הכללי, רב-אלוף אייל זמיר:
    </Typography>

    <Link
      href="https://go.idf.il/e4n1v6v8i6"
      target="_blank"
      rel="noreferrer"
      underline="none"
     sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
    >
      לצפייה באיגרת הרמטכ״ל
    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
    </Link>

    <Typography sx={textSx}>
      הטענת השי תתבצע החל מתאריך 26 במרץ 2026 (ח׳ בניסן התשפ״ו) באתר ״חבר״.
    </Typography>

    <Typography sx={textSx}>
      לפרטים נוספים על השי לחג:
    </Typography>

    <Stack spacing={1}>
      <Link
        href="https://go.idf.il/InstaBaitShelKeva"
        target="_blank"
        rel="noreferrer"
        underline="none"
        sx={{
          color: "#6EA3FF",
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontWeight: 600,
        }}
      >
        בית של קבע באינסטגרם
      </Link>

      <Link
        href="https://go.idf.il/l5r2h2z8l9"
        target="_blank"
        rel="noreferrer"
        underline="none"
        sx={{
          color: "#6EA3FF",
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontWeight: 600,
        }}
      >
        אתר בית של קבע
      </Link>
    </Stack>
  </Stack>
),      },
      {
        title: 'שי הרמטכ"ל לפורים',
        icon: <MilitaryTechOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      לכבוד חג הפורים תשפ״ו מוענק שי בסך 500 ש״ח למשרתי הקבע הזכאים.
    </Typography>
    <Typography sx={textSx}>
      זכאות: משרתי קבע בעלי ותק של שנה לפחות בשירות קבע / חובה בתנאי קבע.
      הזכאות נקבעת בהתאם לסטטוס השירות בתאריך 02/03/2026.
    </Typography>
    <Typography sx={textSx}>
      איך מקבלים? הזכאים יקבלו SMS אישי עם ברכת הרמטכ״ל וקישור להטענת הכרטיס.
      ההטענה תתבצע דרך כרטיסי "חבר" של קבע או "חבר טעמים" באתר חבר.
    </Typography>
    <Typography sx={textSx}>
      הטענת השי תתאפשר החל מתאריך 27/02/2026.
    </Typography>

         <Link
        href="https://go.idf.il/l5r2h2z8l9"
        target="_blank"
        rel="noreferrer"
        underline="none"
        sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
      >
למדיניות באתר בית של קבע 
 <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
</Link>
  </Stack>
),      },
  {title:"סיוע כלכלי פעימה ד׳",
   icon: <HandshakeOutlinedIcon />,
   content:(
<Stack spacing={1}>
  <Typography sx={textSx}>
    סיוע כלכלי – פעימה ד׳
  </Typography>

  <Typography sx={textSx}>
    פתיחת פעימה ד׳ בקרן הקבע.
  </Typography>

  <Typography sx={textSx}>
    מספר עדכונים:
  </Typography>

  <Stack spacing={0.5}>
    <Typography sx={listItemSx}>
      1. שונה השם – מהיום "קרן הקבע".
    </Typography>
    <Typography sx={listItemSx}>
      2. פעימה זו מהווה הזדמנות אחרונה להגשת בקשות רטרואקטיבית עבור אובדן הכנסה מאוקטובר 2023 ועד סוף שנת 2025.
    </Typography>
    <Typography sx={listItemSx}>
      3. מוקד WhatsApp ישיר לצוות קרן הקבע (אובדן הכנסה בלבד) זמין בימים א'-ה' בין השעות 9:00–15:00 במספר 052-4260449.
    </Typography>
  </Stack>

  <Typography sx={textSx}>
    הגשת בקשות תתאפשר בין התאריכים 19/03/2026 עד 18/04/2026.
  </Typography>

  <Link
    href="https://go.idf.il/KerenKeva"
    target="_blank"
    rel="noreferrer"
    underline="none"
    sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
  >
    לפרטים נוספים ולהגשת בקשה
 <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
  </Link>
</Stack> ),},
      {
        title: "משרתים שביתם נפגע ופונו",
        icon: <HomeOutlinedIcon />,
         content: (
  <Stack spacing={1}>
    <Typography sx={textSx}>
      משרתי קבע שפונו מביתם לאור כך שנפגע במהלך מבצע "שאגת הארי" יהיו זכאים ל:
    </Typography>

    <Stack>
      <Typography sx={listItemSx}>• תווי קנייה ע״ס 2,000 ₪</Typography>
      <Typography sx={listItemSx}>• 700 נקודות ספרורשיות</Typography>
    </Stack>

    <Typography sx={textSx}>
      הזנת הזכאות תתבצע לאחר דיווח והעברת פרטי המשרת לחמ״ל פרט דרך שלישי היחידות מול מצוב מנהלה.
    </Typography>

    <Typography sx={textSx}>
      ניתן לממש את התווים ברשתות: כרת | שופרסל | יינות ביתן | שפע ברכת השם | קרפור
    </Typography>
  </Stack>
),      },
      {
        title: "החזרי הוצאות נסיעה",
        icon: <CardGiftcardOutlinedIcon />,
content: (
  <Stack>
    <Typography sx={textSx}>
משרתי קבע שהגיעו לבסיס בשבת או במהלך המבצע כאשר לא פעלה תחבורה ציבורית - יוכלו להגיש בקשה להחזר הוצאות נסיעה (הוצאות נסיעה ימי ו׳).    
    </Typography>
    <Typography sx={textSx}> ההזנה תתבצע ע״י שלישות היחידה לאחר הגשת הטפסים הנדרשים</Typography>
    </Stack> ),},
      {
        title: 'חופשה מיוחדת למשרתים בחו"ל',
        icon: <CalendarMonthOutlinedIcon />,
        content:(
            <Stack spacing={1}>
              <Typography sx={textSx}>משרתי קבע השוהים בחו״ל:</Typography>
              <Stack>
              <Typography sx={listItemSx}>• ינצלו תחילה ימי חופשה שנתית.</Typography>
              <Typography sx={listItemSx}>• משרת שסיים את מכסת ימי החופשה / חרג ב-5 ימים ממועד החזרה המקורי- יוכל להגיש בקשה לימי חופשה מיוחדת עד חזרתו לארץ (מקסימום 14 ימים).</Typography>
              </Stack>
              <Typography sx={textSx}>בקשות יועברו דרך שלישי היחידות אל משרד שכר ורווחה/מוצב מנהלה.</Typography>
            </Stack>

    ),     },
      {
        title: "פיצוי בגין ביטול טיסה",
        icon: <FlightOutlinedIcon />,
        content:(
        <Stack>
            <Typography sx={textSx}>משרתי קבע שנדרשו ע"י מפקדם לבטל את טיסתם עקב דרישה מבצעית ולא קיבלו החזר מלא מהחברות דרכם הוזמנה החופשה, יכולים להגיש בקשה לפיצוי עד לסכום של 10 אש"ח.</Typography>
          <Stack>
            <Typography sx={textSx}>משרת נשוי יכול להגיש בקשה גם עבור משפחתו הגרעינית.</Typography>
          </Stack>
            <Typography sx={textSx}>אישורים נדרשים:</Typography>
            <Typography sx={listItemSx}>• טופס בקשה לפיצוי עם כלל הפרטים הנדרשים.</Typography>
            <Typography sx={listItemSx}>• מכתב אישי המפרט ככל הנותן את השתלשלות האירועים ואת סכום הפיצוי המבוקש – חתום ע"י תא"ל.</Typography>
            <Typography sx={listItemSx}>• טופס אישור יציאה לחו"ל. משרתים שטיסתם הייתה עתידה להתקיים עד לתאריך 8/3/26 – חתום ע"י תא"ל, משרתים שטיסתם הייתה עתידה להתקיים לאחר 9/3/26 – חתום ע"י אלוף.</Typography>
            <Typography sx={listItemSx}>• כרטיסי טיסה, כולל מחיר הטיסה.</Typography>
            <Typography sx={listItemSx}>• אישור הזמנה + קבלות עבור כלל השירותים שהוזמנו ומבוקש עליהם פיצוי.</Typography>
            <Typography sx={listItemSx}>• פירוט עו"ש/אשראי עם החיובים והזיכויים שבוצעו.</Typography>
            <Typography sx={listItemSx}>• הוכחת ניסיון פנייה לחברות לבקשת פיצוי בגין הביטול.</Typography>
            <Typography sx={listItemSx}>• במידה וקיים ביטוח, נדרש לצרף תיעוד פנייה לביטוח לקבלת החזר.</Typography>
        </Stack>
        ),},
      {
        title: "ביטוח חיים",
        icon: <HealthAndSafetyOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      קיים הסדר ביטוח חיים קבוצתי של "חבר" משרתי הקבע והגמלאים באמצעות "איילון חברה לביטוח".
    </Typography>

    <Typography sx={textSx}>
      ביטוח החיים הוא כלי פיננסי חשוב (בוודאי בתקופת מלחמה) שמטרתו להבטיח פיצוי כספי במקרי מוות, אובדן כושר עבודה או נכות.
    </Typography>

    <Typography sx={textSx}>
      בנוסף להסדר הקיים, ניתן לקבל 50% מסכום הביטוח במקרה של נכות תעסוקתית מוחלטת וזמנית.
    </Typography>

    <Typography sx={textSx}>
      באפשרותך להסדיר את הביטוח מול "איילון חברה לביטוח" באתר (קישור מטה)
      או בטלפון 1-700-700-682 (שלוחה 6).
    </Typography>

    <Typography sx={textSx}>
      פרטים מלאים ותנאי הפוליסה בלשונית ביטוחים באתר "חבר".
    </Typography>

    <Link
      href="https://www.ayalon-ins.co.il" // אם יש קישור אחר - תחליפי
      target="_blank"
      rel="noreferrer"
      underline="none"
      sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.1rem" },
        fontWeight: 600,
        width: "fit-content",
      }}
    >
      לאתר איילון חברה לביטוח
    </Link>
  </Stack>
),      },
      {
        title: "משרתים שביתם נפגע",
        icon: <HomeOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      מדיניות פרט עבור משרתים שביתם נפגע במבצע "שאגת הארי".
    </Typography>

    <Typography sx={textSx}>
      מענה עבור אוכלוסיית החובה:
    </Typography>

    <Typography sx={textSx}>
      1) חופשה מיוחדת – חייל חובה אשר ביתו נפגע, יוכל לממש חופשה מיוחדת ללא תנאי במימוש החופשות (צבורה ושנתית) באישור סא"ל. עד 30 יום זיון תחת חופשה מיוחדת אישית.
    </Typography>

    <Typography sx={textSx}>
      2) מענה כלכלי:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • כוכבים לחיילי חובה – חיילי חובה שפונו מביתם יקבלו תוספת של 500 כוכבים.
      </Typography>

      <Typography sx={listItemSx}>
        • מענק לחייל חובה שביתו נפגע ופונה כתוצאה מכך – עבור חיילים אלו יינתן מענק בסך 2,000 ₪ באופן יזום על ידי מדור ת"ש חובה במופת.
      </Typography>

      <Typography sx={listItemSx}>
        • סיוע כלכלי – חייל חובה אשר ביתו נפגע ונדרש בסיוע כלכלי בסמכות קצינת ת"ש חובה לבחון מענה כלכלי ללא אישורים עדכניים ועל בסיס היכרות עם מקרה החייל.
      </Typography>

      <Typography sx={listItemSx}>
        • ועדת אלכ"א חריג – ועדות בראשות רע"ן ת"ש, ידונו בחיילי חובה אשר נקלעו למצוקה כלכלית חריגה בזמן מבצע "שאגת הארי", בדגש על חיילים אשר נפגע ביתם. הוועדות יתקיימו פעמיים בשבוע.
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      מענה עבור אוכלוסיית הקבע:
    </Typography>

    <Typography sx={textSx}>
      מפורט במסמך המצורף.
    </Typography>

    <Typography sx={textSx}>
      דרכים ליצירת קשר:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • מצב פרט חיל האוויר
      </Typography>

      <Typography sx={listItemSx}>
        • חמ"ל משפחות: 052-9003785, 052-9004180
      </Typography>

      <Typography sx={listItemSx}>
        • אדום: 502-3711
      </Typography>

      <Typography sx={listItemSx}>
        • מרכז תע"צ – חמ"ל תע"ש: h9508ah9508taaz1@army.idf.il
      </Typography>

      <Typography sx={listItemSx}>
        • מרכז מצבים טלפון ושליחת SMS: 3185*
      </Typography>
    </Stack>
  </Stack>
),      },
      {
        title: "מדיניות מספר 10",
        icon: <DescriptionOutlinedIcon />,
        content:(
<Stack spacing={2}>
  <Typography sx={textSx}>
    מצ״ב מדיניות מספר 10 "שאגת הארי".
    יש לקרוא בעיון את עיקרי הדברים.
  </Typography>

  <Link
    href="/files/policy10.pdf"
    target="_blank"
    rel="noreferrer"
    underline="none"
    sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
  >
    לצפייה במסמך המדיניות
  <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
  </Link>
</Stack>
        ),      },
      {
        title: "פיצוי בגין חופשה שבוטלה",
        icon: <FlightOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      משרתי קבע שנדרשו על ידי מפקדם לבטל את חופשתם עקב דרישה מבצעית ולא קיבלו החזר מלא מהחברות דרך הזמנת החופשה,
      יכולים להגיש בקשה לפיצוי עד לסכום של 10,000 ₪.
    </Typography>

    <Typography sx={textSx}>
      משרת נושא יכול להגיש בקשה גם עבור משפחתו הגרעינית.
    </Typography>

    <Typography sx={textSx}>
      אישורים נדרשים:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • טופס בקשה לפיצוי עם כלל הפרטים הנדרשים
      </Typography>

      <Typography sx={listItemSx}>
        • מכתב אישי המפרט את השתלשלות האירועים ואת סכום הפיצוי המבוקש – חתום ע"י תא"ל
      </Typography>

      <Typography sx={listItemSx}>
        • טופס אישור יציאה לחו"ל (חתום בהתאם למועד הטיסה)
      </Typography>

      <Typography sx={listItemSx}>
        • כרטיסי טיסה, כולל מחיר הטיסה
      </Typography>

      <Typography sx={listItemSx}>
        • אישור הזמנה + קבלות עבור כלל השירותים שהוזמנו
      </Typography>

      <Typography sx={listItemSx}>
        • פירוט עו"ש / אשראי עם החיובים והזיכויים שבוצעו
      </Typography>

      <Typography sx={listItemSx}>
        • הוכחת ניסיון פנייה לחברות לבקשת פיצוי בגין הביטול
      </Typography>

      <Typography sx={listItemSx}>
        • במידה וקיים ביטוח, נדרש לצרף תיעוד פנייה לביטוח לקבלת החזר
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      בקשות יועברו דרך שלישי היחידות אל משרד שכר ורווחה/מצ"ב מנהלה.
    </Typography>
  </Stack>
),      },
      {
        title: "משפחות משרתי הקבע",
        icon: <FavoriteBorderOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      ימי הפוגה למשפחות משרתי הקבע:
    </Typography>

    <Typography sx={textSx}>
      משפחות משרתי הקבע הן העוגן התומך והרוח הגבית במיוחד בתקופה זו, היא שמאפשרת את המשך המאמץ המלחמתי.
    </Typography>

    <Typography sx={textSx}>
      בתאריך ה- 15/03 החלו מופעים של ימי הפוגה בכפרי הנופש אולגה ואשקלון:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • מחזור א' – ימים ראשון עד שלישי (15-17/03/2026)
      </Typography>

      <Typography sx={listItemSx}>
        • מחזור ב' – ימים רביעי עד שישי (18-20/03/2026)
      </Typography>

      <Typography sx={listItemSx}>
        • מחזורים ג' ו-ד' יתקיימו במהלך השבוע העוקב
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      אוכלוסייה זכאית: משפחות לוחמות, הורים יחידנים, שני בני זוג משרתים בקבע/מילואים פעילים/מעצ"צ, משרתי קבע אשר נשואים לבני צה"ל יכולים להירשם עצמאית למול מוקד בדרך קבע.
    </Typography>

    <Typography sx={textSx}>
      במסגרת ימי ההפוגה, יתקיימו פעילויות חווייתיות לילדים, מרחבי דשא ירוקים פתוחים, 3 ארוחות עשירות ביום, אפשרות ללינה במקום או הגעה יומית ללא לינה.
    </Typography>

    <Typography sx={textSx}>
      דגשים:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • השתתפות לילדים בליווי מבוגר בלבד
      </Typography>

      <Typography sx={listItemSx}>
        • SMS נשלח באופן אישי למשרתים אשר נמנים עם האוכלוסיות הזכאיות
      </Typography>

      <Typography sx={listItemSx}>
        • דיווח נוכחות בימים אלו – חופשה שנתית
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      לכל שאלה יש לפנות למוקד "בדרך הקבע" שמספרו 052-9038053.
    </Typography>
  </Stack>
),      },
      {
        title: "מכון הקבע",
        icon: <MilitaryTechOutlinedIcon />,
        content: (
            <Stack>
                <Typography sx={textSx}>מכון הקבע - עזרה נפשית ראשונית, ייעוץ טלפוני או בזום, הדרכת הורים או זוגית וטיפול ממוקד.</Typography>
            </Stack>
        )
    },
      {
        title: "בית של קבע",
        icon: <HomeOutlinedIcon />,
       content: (
            <Stack>
                <Typography sx={textSx}>מכון הקבע - עזרה נפשית ראשונית, ייעוץ טלפוני או בזום, הדרכת הורים או זוגית וטיפול ממוקד.</Typography>
                 <Link
        href="https://go.idf.il/l5r2h2z8l9"
        target="_blank"
        rel="noreferrer"
        underline="none"
        sx={{
          color: "#6EA3FF",
          fontSize: { xs: "1rem", md: "1.1rem" },
          fontWeight: 600,
        }}
      >
        אתר בית של קבע
      </Link>
            </Stack>
        )
      },
    ],
  },
  {
    title: "קרן הסיוע",
    items: [
      {
        title: "טיפול רגשי",
        icon: <FavoriteBorderOutlinedIcon />,
        content: (
  <Stack>
    <Typography sx={textSx}>
      ההחזר יינתן עבור הוצאות שבוצעו בין התאריכים 28/02/26 ועד לחודש לאחר סיום המבצע.
    </Typography>

    <Typography sx={textSx}>
      ההחזר יינתן עבור ילד מגיל 3 עד גיל 18.
    </Typography>

    <Typography sx={textSx}>
      *ההחזר יינתן באמצעות הצגת קבלה המפרטת את סוג הטיפול, מועד הטיפול ופרטי הילד.
    </Typography>

    <Typography sx={textSx}>
      אוכלוסייה | תקרת החזר
    </Typography>
      <Typography sx={textSx}>
        משרתים ברמת פעילות ב' ומעלה | עד 2,500 ₪
      </Typography>

      <Typography sx={textSx}>
        משרתים ברמת פעילות ג' | עד 1,500 ₪
      </Typography>

      <Typography sx={textSx}>
        משרתים ללא תלות ברמת פעילות | עד 2,500 ₪
      </Typography>

      <Typography sx={textSx}>
        שני בני זוג משרתים (כאשר אחד ברמת פעילות ג' ומעלה) | עד 1,500 ₪
      </Typography>

      <Typography sx={textSx}>
        הורה יחידני / הורה לילד עם מוגבלות (ברמת פעילות ג'-ד') | עד 1,500 ₪
      </Typography>
    <Stack>
    <Link 
      href="https://mofet-frontend.wiz.digital.idf.il/authform/index/8c21fe15-429c-4f33-ac5e-74b6484a38da" 
      target="_blank"
      rel="noreferrer"
      underline="none"
      sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
    >
      להגשת בקשה
    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
    </Link>
    </Stack>
  </Stack>
),      },
      {
        title: "בייביסיטר",
        icon: <EmojiEmotionsOutlinedIcon />,
content: (
  <Stack>
    <Typography sx={textSx}>
      ההחזר יינתן עבור הוצאות שבוצעו בין התאריכים 28/02/26 ועד לחודש לאחר סיום המבצע.
    </Typography>
    <Typography sx={textSx}>
      אוכלוסייה | תקרת החזר
    </Typography>
      <Typography sx={textSx}>
        משרתים ברמת פעילות ב' ומעלה | עד 1,500 ₪
      </Typography>

      <Typography sx={textSx}>
        משרתים ברמת פעילות ג' | עד 1,500 ₪
      </Typography>

      <Typography sx={textSx}>
משרתים בחילות האוויר, המודיעין ופיקוד העורף (ללא תלות ברמת פעילות) | עד 1,500 ₪
      </Typography>

      <Typography sx={textSx}>
        שני בני זוג משרתים (כאשר אחד ברמת פעילות ג' ומעלה) | עד 1,000 ₪
      </Typography>

      <Typography sx={textSx}>
        הורה יחידני / הורה לילד עם מוגבלות (ברמת פעילות ג'-ד') | עד 1,000 ₪
      </Typography>
    <Stack>
    <Link 
      href="https://mofet-frontend.wiz.digital.idf.il/authform/index/8c21fe15-429c-4f33-ac5e-74b6484a38da" 
      target="_blank"
      rel="noreferrer"
      underline="none"
      sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
    >
      להגשת בקשה
    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
    </Link>
    </Stack>
  </Stack>
), },
    ],
  },
  {
    title: "לימודים",
    items: [
      {
        title: "דחיית פתיחת הסמסטר",
        icon: <CalendarMonthOutlinedIcon />,
        content:(
            <Stack>
                <Typography sx={textSx}>סמסטר ב' לא ייפתח במועדו עבור כלל הלומדים (לומדי תוכ"ש, לימודים מלאים וכיתות צבאיות).</Typography>
                <Typography sx={textSx}>בשלב זה, לא יתקיימו בחינות ולא יידרשו הגשות.</Typography>
            </Stack>
        ), },
      {
        title: "נוכחות בלימודים",
        icon: <MenuBookOutlinedIcon />,
        content:(
            <Stack>
                <Typography sx={textSx}>הובהר למוסדות האקדמיים כי משרתי הקבע לא יוכלו לקחת חלק בלימודים (גם מקוונים) עד לאחר חג הפסח, וכל עוד המערכה נמשכת.</Typography>
                <Typography sx={textSx}>ההנחיה תקפה לכלל המשרתים, ללא הבחנה בין ייעוד קדמי לאחרים.</Typography>
            </Stack>
        ),},
      {
        title: "מתווה הקלות",
        icon: <InsertDriveFileOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      מתווה הקלות אשר גובש ע״י חטמ״ה בתאום עם המוסדות האקדמיים והמל״ג:
    </Typography>

    <Typography sx={textSx}>
      1. סמסטר א׳:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • בחינות – תוספת זמן של 50% בכל מועדי הבחינות בסמסטר
      </Typography>

      <Typography sx={listItemSx}>
        • ציונים – אפשרות להמרת ציון מספרי לציון "עובר" (עד 3 קורסים בתואר ראשון ועד 2 בתואר שני)
      </Typography>

      <Typography sx={listItemSx}>
        • נקודות זכות – פטור מ-1.8 נ״ז בתואר ראשון או 4 נ״ז בתואר שני
      </Typography>

      <Typography sx={listItemSx}>
        • גמישות אקדמית – הארכת תקופת הלימודים בשני סמסטרים ללא עלות, הקלטת שיעורים וזכאות למועדי בחינה מיוחדים
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      2. סמסטר ב׳:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • הלימודים יתקיימו במתכונת מקוונת (ZOOM)
      </Typography>

      <Typography sx={listItemSx}>
        • משרתי הקבע והמילואים פטורים מחובת נוכחות בעת הזו
      </Typography>

      <Typography sx={listItemSx}>
        • בהמשך יפורסם מתווה הקלות אשר יתגבש בהתאם להתפתחויות המצב
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      לשאלות נוספות, מוקד ההשכלה המטכ״לי (מרכז גמ״ה) זמין עבורכם בוואטסאפ:
      050-9741793
    </Typography>
  </Stack>
   ),},
      {
        title: 'קורסי גמוש מקוונים',
        icon: <SchoolOutlinedIcon />,
content: (
  <Stack spacing={2}>
    <Typography sx={textSx}>
      שמחה לעדכן שאושר תקציב לשנת 2026 לקורסי גמ״ש מקוונים.
    </Typography>

    <Typography sx={textSx}>
      הקורסים מיועדים עבור אנשי הקבע של בח״א 8.
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • מטרתם לקדם השכלה באמצעות השלמת שעות גמ״ש (40 שעות לקורס)
      </Typography>
      <Typography sx={listItemSx}>
        • הקורסים מבוססי למידה מתוקשבת ובסופם מבחן סיום תוך שבועיים
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      תנאי ואופן ההרשמה:
    </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • כל איש/אשת קבע רשאי/ת להירשם תחילה עד שני קורסים
      </Typography>
      <Typography sx={listItemSx}>
        • עלות ההרשמה עד 500 ש״ח לקורס (במימון הבסיס)
      </Typography>
      <Typography sx={listItemSx}>
        • תנאי סף: לימודי תואר ראשון / טכנאי / הנדסאי (לומדים או בוגרים)
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      מי שלא יבצע את המבחן - יחידתו תחויב בעלות הקורס.
    </Typography>

    <Typography sx={textSx}>
      רשימת של הבסיסים: ליהי מוקד, כל בקשה תבחן פרטנית, מספר המקומות מוגבל.
    </Typography>

    <Link
      href="https://courses.bsmch.idf.il"
      target="_blank"
      rel="noreferrer"
      underline="none"
      sx={{
        color: "#6EA3FF",
        fontSize: { xs: "1rem", md: "1.15rem" },
        fontWeight: 700,
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        gap: 1,
        mt: 1,
        width: "fit-content",
      }}
    >
      להרשמה – courses.bsmch.idf.il
    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
    </Link>
  </Stack>
), },
      {
        title: "עדכון למוסדות הלימוד",
        icon: <MenuBookOutlinedIcon />,
        content: (
        <Stack>
        <Typography sx={textSx}>
      עדכון מפורט למוסדות הלימוד לקראת פתיחת סמסטר ב' בנוגע לסטודנטים משרתי הקבע (10 במרץ 2026):
        </Typography>

       <Typography sx={textSx}>
      1. עם פרוץ מערכת "שאגת הארי", עודכנו משרתי הקבע כי מועד תחילת סמסטר ב' תשפ"ו נדחה ביחס לתכנון המקורי, כמו גם מועדי בחינות של סמסטר א'.
       </Typography>
      <Typography sx={textSx}>
      2. משרתי הקבע הונחו כי עד לאחר חג הפסח תשפ"ו, וכלל שהמערכה תימשך, הם לא יוכלו לקחת חלק פעיל בלימודים. יובהר, כי מדובר בכלל ההסדרים לרכישת השכלה:
      </Typography>

    <Stack spacing={0.5}>
      <Typography sx={listItemSx}>
        • סטודנטים בשירות קבע בלימודים מלאים (על-חשבון צה"ל)
      </Typography>
      <Typography sx={listItemSx}>
        • סטודנטים המשולבים בכיתות במימון צה"ל
      </Typography>
      <Typography sx={listItemSx}>
        • סטודנטים עצמאיים
      </Typography>
    </Stack>

    <Typography sx={textSx}>
      3. ככל שיושלמו 30 ימים למערכה, יישלחו לכלל מוסדות הקבצים עדכניים הכוללים סיווג מחודש של משרתי הקבע לייעוד קדמי. לא קיימת הבחנה בין יחידות בייעוד קדמי לבין יחידות אחרות.
    </Typography>

    <Typography sx={textSx}>
      4. בהינתן שהמערכה תימשך מעבר ל-30 ימים, תתקיים הערכת מצב השכלה בראשות ראש חטיבת הסגל, לבחינת חזרה דיפרנציאלית של משרתי קבע במערכים ובתפקידים מסוימים, מיד לאחר חג הפסח.
    </Typography>

    <Typography sx={textSx}>
      5. אנו מזמינים כל מוסד שיבקש לקבל מידע על אודות היקפים של משרתי הקבע הרשומים לסמסטר ב' במוסד ולא יוכלו כרגע לקחת חלק פעיל בלימודים, להעביר אלינו קבצי תי"ד מעודכנים לכתובת המייל: idf.il@324541564
    </Typography>

    <Typography sx={textSx}>
      6. בהזדמנות זו, נבקש להודות לכלל מוסדות הלימוד על ההבנה העמוקה ביחס למאפייני שירות הקבע.
    </Typography>

    <Typography sx={textSx}>
      רב-סרן, קרן לובינסקי זיו
      <br />
      מפקד מרכז ההשכלה והאקדמיה
      <br />
      חטיבת הסגל, אגף כוח-האדם, צה"ל
    </Typography>
  </Stack>
),},
      {
        title: "אגרת ללומדים",
        icon: <DescriptionOutlinedIcon />,
        content: (
         <Stack>
            <Typography sx={textSx}>אגרת עדכון ללומדים בנושא זכויות, הקלות והתאמות אקדמיות בתקופת מבצע ״שאגת הארי״ת כולל מידע מעודכן על לוחות זמנים, בחינות והנחיות לימודיות.</Typography>
         </Stack>
        ),},
    ],
  },
  {
    title: "תהליכים סגליים",
    items: [
      {
        title: "סבבים ועיתויים",
        icon: <AutorenewOutlinedIcon />,
       content:(
         <Stack>
            <Typography sx={textSx}>כלל הסבבים מוקפאים עד להודעה חדשה</Typography>
         </Stack>
        ),},
      {
        title: "קורסים",
        icon: <SchoolOutlinedIcon />,
        content:(
         <Stack>
            <Typography sx={textSx}>כלל הקורסים פוזרו. בנוסף, בוטלו הקורסים אשר היו אמורים להתחיל עד חג הפסח.</Typography>
         </Stack>
        ),},
      {
        title: "גיוס לקבע",
        icon: <GroupAddOutlinedIcon />,
        content:(
         <Stack>
            <Typography sx={textSx}>על פי הנוהל הרגיל.</Typography>
         </Stack>
        ),},
    ],
  },
];