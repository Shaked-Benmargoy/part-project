import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import { ReactNode } from "react";
import { Stack, Typography, Link } from "@mui/material";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

export type MiluimItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
};

export type MiluimSection = {
  title?: string;
  items: MiluimItem[];
};

export const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right",
};

export const listItemSx = {
  ...textSx,
  display: "block",
};
export const miluimSections: MiluimSection[] = [
  {
    title: "",
    items: [
     {
  title: "ייעוץ משפטי בדיני עבודה",
  icon: <BalanceOutlinedIcon />,
  content: (
    <Stack spacing={1}>
      <Typography sx={textSx}>
        למשרתי מילואים ובני ובנות זוגם עומדות זכויות עקב השירות, ניתן ליצור קשר במייל:
      </Typography>

      <Typography
        component="a"
        href="mailto:Legal-aid@digital.idf.il"
        sx={{
          ...textSx,
          color: "#6EA3FF",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Legal-aid@digital.idf.il
      </Typography>
    </Stack>
  ),
},
      {
        title: "קרן הסיוע",
        icon: <VolunteerActivismOutlinedIcon />,
        content: (
        <Stack>
         <Typography sx={textSx}>קרן הסיוע ממשיכה להעניק מענים למשרתי ומשרתות המילואים ולבני משפחותיהם, ומסייעת במקרים של קושי אישי, כלכלי או משפחתי הנובע משירות המילואים.</Typography>
                 <Link
        href="https://www.miluim.idf.il/articles-list/קרן-הסיוע-למשרתי-המילואים"
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
לפרטים נוספים והגשת בקשות לקרן הסיוע    
    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
     </Stack>
        ),
      },
      {
        title: "בייביסיטר למשפחות משרתי המילואים",
        icon: <EmojiPeopleOutlinedIcon />,
        content:(
         <Stack spacing={2}>
          <Typography sx={textSx}>במהלך תקופת הלחימה נוספה הרחבה ייעודית למקרים בהם בן או בת הזוג מועסקים במשק חיוני.</Typography>
          <Typography sx={textSx}>במדרגים א' וא'+: החזר של עד 100 ₪ עבור כל יום שמ"פ. התקרה לתוספת תהיה בסך של עד 1,500 ₪ לתקופת הלחימה. יתאפשר החזר גם עבור שעות הבוקר.</Typography>
          <Typography sx={textSx}>במדרגים ב'-ה': החזר של עד 80 ₪ עבור כל יום שמ"פ. התקרה לתוספת תהיה בסך של עד 1,000 ₪ לתקופת הלחימה. יתאפשר החזר גם עבור שעות הבוקר.</Typography>
          <Typography sx={textSx}>הרחבה זו נועדה רק למצבים בהם בן או בת הזוג ידרשו להמשיך בעבודה החיונית בתקופת החירום, ולא יכול היה לשהות בבית עם הילדים.</Typography>
          <Typography sx={textSx}>אופן הגשת הבקשה-
הבקשה תוגש באמצעות טופס מקוון באתר המילואים החל מיום שני ה-9.3.26 בצירוף:</Typography>
          <Stack>
          <Typography sx={listItemSx}>• אסמכתאות תשלום (באפליקציות העברות תשלום או משיכת מזומן).</Typography>
          <Typography sx={listItemSx}>• הצהרה כי משרת המילואים אינו משרת בכוננות.</Typography>
          <Typography sx={listItemSx}>• הצהרה כי בן/ת הזוג של משרת המילואים מוגדר כעובד משק חיוני בהתאם להנחיות רח"ל מיום 27/01/2026.</Typography>
</Stack>
<Link
        href="https://https://www.miluim.idf.il/articles-list/קרן-הסיוע-למשרתי-המילואים-frontend.wiz.digital.idf.il/m/PYZ55QW4F9?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_r0aYdei0GbKTOFi2mAliaiinwwVFfPU039s4F9GHTba8XRxtqARAhbmaII_aem_S-SVWVCFfKGVWbZIcE0m4w"
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
      > להגשת בקשה בקרן הסיוע
      <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
         </Stack>
        ),},
      {
        title: "סיוע כלכלי בגין פגיעה ברכוש",
        icon: <HomeOutlinedIcon />,
        content: (
        <Stack>
         <Typography sx={textSx}>משרתי מילואים שביתם או רכושם נפגעו בעקבות מבצע "שאגת הארי" זכאים להגיש בקשה לסיוע כלכלי באמצעות קרן הסיוע.</Typography>
         <Typography sx={textSx}>בנוסף, משרת שנמצא בשמ"פ וביתו נפגע זכאי לעד 5 ימי התארגנות.</Typography>
         <Typography sx={textSx}>בקשות יועברו דרך שלישי היחידות אל משרד מילואים פלמחים / מוצב מנהלה.</Typography>
        <Link
        href="https://mushlam-frontend.wiz.digital.idf.il/m/PYZ55QW4F9?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_r0aYdei0GbKTOFi2mAliaiinwwVFfPU039s4F9GHTba8XRxtqARAhbmaII_aem_S-SVWVCFfKGVWbZIcE0m4w"
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
לפרטים מלאים ולהגשת הבקשה    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
     </Stack>
        ),},
      {
        title: "החזר טיסה למשרת מילואים ששוהה בחו״ל",
        icon: <FlightTakeoffOutlinedIcon />,
        content:(
        <Stack spacing={1}>
            <Typography sx={textSx}>משרת מילואים אשר שהה בחו"ל בזמן פרוץ המבצע ונקרא בפקודת הגיוס לצו 8, אשר שילם על טיסה חזרה לארץ מכספו, יהיה זכאי להחזר טיסה.</Typography>
            <Typography sx={textSx}>הזכאות תינתן לכלל המדרגים.</Typography>
            <Typography sx={textSx}>הפיצוי המקסימלי יעמוד על 5,000 ₪ (אם ידרש פיצוי גבוה מכך ידון בוועדת חריגים)</Typography>
            <Typography sx={textSx}>הנ"ל בכפוף לביטוח וכפוף לאי קבלת החזרים מחברת תעופה/חברת הנופשים.</Typography>
<Link
        href="https://mushlam-https://mushlam-frontend.wiz.digital.idf.il/m/PYZ55QW4F9.wiz.digital.idf.il/m/PYZ55QW4F9?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_r0aYdei0GbKTOFi2mAliaiinwwVFfPU039s4F9GHTba8XRxtqARAhbmaII_aem_S-SVWVCFfKGVWbZIcE0m4w"
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
להגשת בקשה - טופס מקוון
 <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
        </Stack>
        ),},
      {
        title: "סטודנטים",
        icon: <SchoolOutlinedIcon />,
        content: (
        <Stack spacing={1}>
            <Typography sx={textSx}>על רקע מבצע "שאגת הארי" אנו עומדים לצדכם ופועלים מול המל"ג והמוסדות האקדמיים כדי להבטיח מענה וסיוע מיטביים.</Typography>
            <Typography sx={textSx}>לשאלות בנוגע לזכויות אקדמיות או במקרה של קושי מול המוסד, ניתן לפנות אל צוות סטודנטים במפקדת קצין המילואים הראשי.</Typography>
<Link
        href="https://mushlam-https://https://mushlam-frontend.wiz.digital.idf.il/m/YC32XJFK57-frontend.wiz.digital.idf.il/m/PYZ55QW4F9.wiz.digital.idf.il/m/PYZ55QW4F9?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_r0aYdei0GbKTOFi2mAliaiinwwVFfPU039s4F9GHTba8XRxtqARAhbmaII_aem_S-SVWVCFfKGVWbZIcE0m4w"
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
לפנייה לצוות סטודנטים <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
        </Stack>
        ),},
      {
        title: "מוקדי סיוע",
        icon: <PhoneOutlinedIcon />,
        content: (
        <Stack spacing={1}>
            <Typography sx={textSx}>מערך בריאות הנפש בצה"ל 24/7 – קו החירום של בריאות הנפש, המאויש על ידי קב"נים, זמין עבורכם בטלפון *6690 שלוחה 4.</Typography>
            <Typography sx={textSx}>מוקד חיל הרפואה – זמין עבורכם 24/7 למתן מידע, הכוונה וסיוע בתיאום טיפול רפואי דרך מספר הוואטסאפ של מוקד מקול הלב – 050-3489698.</Typography>
            <Typography sx={textSx}>עמותת ער"ן (עזרה ראשונה נפשית) – קו סיוע ייעודי לחיילי מילואים, הפועל 24/7 עם מתנדבים ואנשי מקצוע מנוסים. 1201 שלוחה 6, ניתן לפנות גם בצ'אט באתר או דרך האפליקציה.</Typography>
            <Typography sx={textSx}>עמותת סה"ר – תמיכה רגשית דיסקרטית ונגישה דרך צ'אט אנונימי, עם מתנדבים ואנשי מקצוע.</Typography>
            <Typography sx={textSx}>מוקד "נפש אחת" אגף השיקום – מוקד תמיכה רגשית 24/7 ללוחמים ומשפחותיהם, בטלפון 8944.</Typography>
            <Typography sx={textSx}>מוקד המילואים – 1111 שלוחה 4, פעילות במענה חירום.</Typography>
            <Typography sx={textSx}>מוקד מרכז בודדים – הנחות והטבות במשרדי הממשלה, פתרונות דיור, חיבור לעמותות ועוד. 1111 שלוחה 2 ואז שלוחה 7.</Typography>
<Link
        href="https://sahar.org.il/help/"
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
לאתר עמותת סה״ר <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
        </Stack>
        ),},
      {
        title: "חיילים בודדים",
        icon: <GroupsOutlinedIcon />,
        content:(
         <Stack spacing={0.5}>
            <Typography sx={textSx}>שירות המילואים כרוך באתגרים רבים, ובמיוחד עבור מי שמשרתים ללא עורף משפחתי תומך. צה"ל ומשרד הביטחון הרחיבו את מעטפת הסיוע לחיילים בודדים במטרה להקל, לתמוך וללוות לאורך כל הדרך.</Typography>
            <Typography sx={textSx}>מי נחשבים חיילים בודדים במילואים?</Typography>
            <Typography sx={textSx}>משרתי מילואים שהוגדרו כחיילים בודדים במהלך שירות החובה, שצברו לפחות 60 ימי מילואים מצטברים החל מתאריך 07/10/2023.</Typography>
            <Typography sx={textSx}>• ההגדרה בתוקף לעשר שנים מיום השחרור משירות חובה.</Typography>
            <Typography sx={textSx}>מענקים והטבות דרך קרן הסיוע</Typography>
            <Typography sx={textSx}>החזר הוצאות אישיות - החזר חד פעמי של עד 1,000 ש"ח במקרים חריגים שאושרו בוועדת חריגים.</Typography>
            <Typography sx={textSx}>החזר הוצאות כלכלת הבית - החזר חד פעמי של עד 1,000 ש"ח בהוצאות הקשורות לתחזוקת הבית.</Typography>
            <Typography sx={textSx}>השתתפות במימון טיסות - משרתי מילואים שאינם תושבי ישראל ונקראו בצו 8 לפעילות מבצעית זכאים להחזר של עד 5,000 ש"ח עבור טיסות הלוך ושוב.</Typography>
            <Typography sx={textSx}>להגשת בקשה בטופס הייעודי לקרן הסיוע</Typography>
            <Typography sx={textSx}>מענקים והטבות ברמת היחידה</Typography>
            <Typography sx={textSx}>סיוע כלכלי ועדת פרט - מענק או תווי זהב הניתנים לחיילים עם קשיים כלכליים על פי החלטת מפקד היחידה.</Typography>
            <Typography sx={textSx}>ימי סידורים - חייל מילואים בודד זכאי לשני ימי סידורים במהלך שמ"פ פתוח. זכאות לימי ההתארגנות - כמו שאר המשרתים.</Typography>
            <Typography sx={textSx}>חג בצוותא - בתקופת הלחימה יתקיימו אירועי חג משותפים למשפחות אנשי המילואים ולחיילים בודדים. ניתן להירשם לאירועים דרך גורמי השלישות ביחידה.</Typography>
            <Typography sx={textSx}>היום שאחרי השירות</Typography>
            <Typography sx={textSx}>סדנאות הכנה לשחרור ושילוב בתעסוקה</Typography>
            <Typography sx={textSx}>עיבוד חוויות לחימה, הכנה לשחרור, חיזוק מיומנויות בינאישיות, כלים רגשיים ומקצועיים והכוונה לתוכניות השמה ותעסוקה ייחודיות.</Typography>
            <Typography sx={textSx}>קבוצות תמיכה וליווי</Typography>
            <Typography sx={textSx}>מתווה חדש לקבוצות מקוונות לחיילי מילואים בודדים, צפוי לעלות במהלך 2026.</Typography>
            <Typography sx={textSx}>גורמים לקבלת סיוע נפשי</Typography>
            <Typography sx={textSx}>היחידה לתגובות קרב לאזרחים הסובלים ממצוקה בעקבות השתתפות בלחימה או פעילות מבצעית בעת שירותם הצבאי.</Typography>
            <Typography sx={textSx}>אגף השיקום לאזרחים בעלי נכות בעקבות השתתפותם בלחימה בעת שירות המילואים.</Typography>
<Link
        href="https://www.miluim.idf.il/articles-list/חיילים-בודדים-במילואים-אתם-לא-לבד/"
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
למידע המלא    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
         </Stack>
        ),},
      {
        title: "מענקים והטבות",
        icon: <MilitaryTechOutlinedIcon />,
        content: (
        <Stack>
         <Typography sx={textSx}>מגוייסים למילואים</Typography>
         <Typography sx={textSx}>תוכנית המענקים וההטבות למשרתי ומשרתות המילואין ובני המשםחה.</Typography>
                 <Link
        href="https://www.miluim.idf.il/articles-list/מגוייסים-למילואים"
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
למידע המלא ורשימת כל ההטבות     
    <OpenInNewOutlinedIcon sx={{ fontSize: 22 }} />
     </Link>
     </Stack>
        )
      },
    ],
  },
];