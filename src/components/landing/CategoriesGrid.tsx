import { Stack } from "@mui/material";
import CategoryCard from "./CategoryCard";

// אייקונים
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

type CategoriesGridProps = {
  onOpenKeva: () => void;
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
    icon: <MedicalServicesOutlinedIcon />,
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

const CategoriesGrid = ({ onOpenKeva }: CategoriesGridProps) => {
  return (
    <Stack spacing={2} sx={{ width: "100%", maxWidth: "900px" }}>
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          icon={category.icon}
          onClick={category.title === "משרתי קבע" ? onOpenKeva : undefined}
        />
      ))}
    </Stack>
  );
};

export default CategoriesGrid;