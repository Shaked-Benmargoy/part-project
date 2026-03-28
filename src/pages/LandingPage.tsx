import { useState } from "react";
import HomeView from "../components/landing/HomeView";
import KevaView from "../components/landing/Keva/KevaView";
import MiluimView from "../components/landing/Miluim/MiluimView";
import SadirView from "../components/landing/Sadir/SadirView";
import MedicalView from "../components/landing/Medical/MedicalView";

const LandingPage = () => {
  const [currentView, setCurrentView] = useState<
    "home" | "keva" | "miluim" | "sadir" | "medical"
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

  return (
    <HomeView
      onOpenKeva={() => setCurrentView("keva")}
      onOpenMiluim={() => setCurrentView("miluim")}
      onOpenSadir={() => setCurrentView("sadir")}
      onOpenMedical={() => setCurrentView("medical")}
    />
  );
};

export default LandingPage;