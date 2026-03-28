import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Stack } from "@mui/material";
import CategoryCard from "./CategoryCard";

type CategoriesGridProps = {
  onOpenKeva: () => void;
  onOpenMiluim: () => void;
  onOpenSadir: () => void;
  onOpenMedical: () => void;
  onOpenDental: () => void;
  onOpenFood: () => void;
  onOpenLogistics: () => void;
  onOpenPsychology: () => void;
  onOpenPersonal: () => void;
};

const categories = [
  {
    title: "משרתי קבע",
    icon: <ShieldOutlinedIcon />,
  },
  {
    title: "משרתי מילואים",
    icon: <GroupsOutlinedIcon />,
  },
  {
    title: "משרתים בסדיר",
    icon: <MilitaryTechOutlinedIcon />,
  },
  {
    title: "שירותי רפואה",
    icon: <MedicalServicesOutlinedIcon />,
  },
  {
    title: "רפואת שיניים",
    icon: <LocalHospitalOutlinedIcon />,
  },
  {
    title: "ארוחות",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    title: "לוגיסטיקה (היסעים, אפסנאות, נשקייה)",
    icon: <LocalShippingOutlinedIcon />,
  },
  {
    title: "פסיכולוגיה",
    icon: <PsychologyOutlinedIcon />,
  },
  {
    title: "שירותי הפרט",
    icon: <PersonOutlineOutlinedIcon />,
  },
];

const CategoriesGrid = ({
  onOpenKeva,
  onOpenMiluim,
  onOpenSadir,
  onOpenMedical,
  onOpenDental,
  onOpenFood,
  onOpenLogistics,
  onOpenPsychology,
  onOpenPersonal,
}: CategoriesGridProps) => {
  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "900px" }}>
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          icon={category.icon}
          onClick={
  category.title === "משרתי קבע"
    ? onOpenKeva
    : category.title === "משרתי מילואים"
    ? onOpenMiluim
    : category.title === "משרתים בסדיר"
    ? onOpenSadir
    : category.title === "שירותי רפואה"
    ? onOpenMedical
    : category.title === "רפואת שיניים"
    ? onOpenDental
    : category.title === "ארוחות"
    ? onOpenFood
    : category.title === "לוגיסטיקה (היסעים, אפסנאות, נשקייה)"
    ? onOpenLogistics
    : category.title === "פסיכולוגיה"
    ? onOpenPsychology
    : category.title === "שירותי הפרט"
    ? onOpenPersonal
    : undefined
}
        />
      ))}
    </Stack>
  );
};

export default CategoriesGrid;