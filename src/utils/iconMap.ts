import { SvgIconComponent } from "@mui/icons-material";
import ShieldOutlined from "@mui/icons-material/ShieldOutlined";
import GroupsOutlined from "@mui/icons-material/GroupsOutlined";
import MilitaryTechOutlined from "@mui/icons-material/MilitaryTechOutlined";
import MedicalServicesOutlined from "@mui/icons-material/MedicalServicesOutlined";
import LocalHospitalOutlined from "@mui/icons-material/LocalHospitalOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import LocalShippingOutlined from "@mui/icons-material/LocalShippingOutlined";
import PsychologyOutlined from "@mui/icons-material/PsychologyOutlined";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import HandshakeOutlined from "@mui/icons-material/HandshakeOutlined";
import VolunteerActivismOutlined from "@mui/icons-material/VolunteerActivismOutlined";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import CardGiftcardOutlined from "@mui/icons-material/CardGiftcardOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import FlightOutlined from "@mui/icons-material/FlightOutlined";
import HealthAndSafetyOutlined from "@mui/icons-material/HealthAndSafetyOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import EmojiEmotionsOutlined from "@mui/icons-material/EmojiEmotionsOutlined";
import MenuBookOutlined from "@mui/icons-material/MenuBookOutlined";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import InsertDriveFileOutlined from "@mui/icons-material/InsertDriveFileOutlined";
import AutorenewOutlined from "@mui/icons-material/AutorenewOutlined";
import GroupAddOutlined from "@mui/icons-material/GroupAddOutlined";
import BalanceOutlined from "@mui/icons-material/BalanceOutlined";
import EmojiPeopleOutlined from "@mui/icons-material/EmojiPeopleOutlined";
import FlightTakeoffOutlined from "@mui/icons-material/FlightTakeoffOutlined";
import PhoneOutlined from "@mui/icons-material/PhoneOutlined";
import CardGiftcard from "@mui/icons-material/CardGiftcard";
import Payments from "@mui/icons-material/Payments";
import FlightTakeoff from "@mui/icons-material/FlightTakeoff";
import Policy from "@mui/icons-material/Policy";
import VolunteerActivism from "@mui/icons-material/VolunteerActivism";
import BeachAccess from "@mui/icons-material/BeachAccess";
import HomeWork from "@mui/icons-material/HomeWork";
import Public from "@mui/icons-material/Public";
import Description from "@mui/icons-material/Description";
import Phone from "@mui/icons-material/Phone";
import LocalHospital from "@mui/icons-material/LocalHospital";
import MedicalServices from "@mui/icons-material/MedicalServices";
import Restaurant from "@mui/icons-material/Restaurant";
import MilitaryTech from "@mui/icons-material/MilitaryTech";
import Inventory2 from "@mui/icons-material/Inventory2";
import AirportShuttle from "@mui/icons-material/AirportShuttle";
import Psychology from "@mui/icons-material/Psychology";
import Store from "@mui/icons-material/Store";
import FitnessCenter from "@mui/icons-material/FitnessCenter";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined";

const iconMap: Record<string, SvgIconComponent> = {
  ShieldOutlined,
  GroupsOutlined,
  MilitaryTechOutlined,
  MedicalServicesOutlined,
  LocalHospitalOutlined,
  FavoriteBorderOutlined,
  LocalShippingOutlined,
  PsychologyOutlined,
  PersonOutlineOutlined,
  HandshakeOutlined,
  VolunteerActivismOutlined,
  HomeOutlined,
  CardGiftcardOutlined,
  CalendarMonthOutlined,
  FlightOutlined,
  HealthAndSafetyOutlined,
  DescriptionOutlined,
  EmojiEmotionsOutlined,
  MenuBookOutlined,
  SchoolOutlined,
  InsertDriveFileOutlined,
  AutorenewOutlined,
  GroupAddOutlined,
  BalanceOutlined,
  EmojiPeopleOutlined,
  FlightTakeoffOutlined,
  PhoneOutlined,
  CardGiftcard,
  Payments,
  FlightTakeoff,
  Policy,
  VolunteerActivism,
  BeachAccess,
  HomeWork,
  Public,
  Description,
  Phone,
  LocalHospital,
  MedicalServices,
  Restaurant,
  MilitaryTech,
  Inventory2,
  AirportShuttle,
  Psychology,
  Store,
  FitnessCenter,
  OpenInNewOutlined,
};

export function getIcon(name: string): SvgIconComponent {
  return iconMap[name] || InfoOutlined;
}
