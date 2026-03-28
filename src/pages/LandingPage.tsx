import { useState } from "react";
import HomeView from "../components/landing/HomeView";
import KevaView from "../components/landing/Keva/KevaView";
import MiluimView from "../components/landing/Miluim/MiluimView";
import SadirView from "../components/landing/Sadir/SadirView";
import MedicalView from "../components/landing/Medical/MedicalView";
import DentalView from "../components/landing/Dental/DentalView";
import FoodView from "../components/landing/Food/FoodView";
import LogisticsView from "../components/landing/Logistics/LogisticsView";
import PsychologyView from "../components/landing/Psychology/PsychologyView";
import PersonalView from "../components/landing/Personal/PersonalView";

const LandingPage = () => {
  const [currentView, setCurrentView] = useState<
    "home" | "keva" | "miluim" | "sadir" | "medical" | "dental" | "food" | "logistics" | "psychology" | "personal"
  >("home");

  if (currentView === "keva") {
    return <KevaView onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "miluim") {
    return <MiluimView onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "sadir") {
    return <SadirView onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "medical") {
    return <MedicalView onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "dental") {
  return <DentalView onBack={() => setCurrentView("home")} />;
}

if (currentView === "food") {
  return <FoodView onBack={() => setCurrentView("home")} />;
}
if (currentView === "logistics") {
  return <LogisticsView onBack={() => setCurrentView("home")} />;
}
if (currentView === "psychology") {
  return <PsychologyView onBack={() => setCurrentView("home")} />;
}
if (currentView === "personal") {
  return <PersonalView onBack={() => setCurrentView("home")} />;
}

  return (
    <HomeView
      onOpenKeva={() => setCurrentView("keva")}
      onOpenMiluim={() => setCurrentView("miluim")}
      onOpenSadir={() => setCurrentView("sadir")}
      onOpenMedical={() => setCurrentView("medical")}
      onOpenDental={() => setCurrentView("dental")}
      onOpenFood={() => setCurrentView("food")}
      onOpenLogistics={() => setCurrentView("logistics")}
      onOpenPsychology={() => setCurrentView("psychology")}
      onOpenPersonal={() => setCurrentView("personal")}
    />
  );
};

export default LandingPage;