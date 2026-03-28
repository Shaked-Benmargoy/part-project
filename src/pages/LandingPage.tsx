import { useState } from "react";
import HomeView from "../components/landing/HomeView";
import KevaView from "../components/landing/Keva/KevaView";
import MiluimView from "../components/landing/Miluim/MiluimView";
import SadirView from "../components/landing/Sadir/SadirView";
import MedicalView from "../components/landing/Medical/MedicalView";
import DentalView from "../components/landing/Dental/DentalView";
import FoodView from "../components/landing/Food/FoodView";

const LandingPage = () => {
  const [currentView, setCurrentView] = useState<
    "home" | "keva" | "miluim" | "sadir" | "medical" | "dental" | "food"
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

  return (
    <HomeView
      onOpenKeva={() => setCurrentView("keva")}
      onOpenMiluim={() => setCurrentView("miluim")}
      onOpenSadir={() => setCurrentView("sadir")}
      onOpenMedical={() => setCurrentView("medical")}
      onOpenDental={() => setCurrentView("dental")}
      onOpenFood={() => setCurrentView("food")}
    />
  );
};

export default LandingPage;