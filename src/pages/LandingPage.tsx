import { useState } from "react";
import HomeView from "../components/landing/HomeView";
import KevaView from "../components/landing/Keva/KevaView";
import MiluimView from "../components/landing/Miluim/MiluimView";

const LandingPage = () => {
  const [currentView, setCurrentView] = useState<"home" | "keva" | "miluim">(
    "home"
  );

  if (currentView === "keva") {
    return <KevaView onBack={() => setCurrentView("home")} />;
  }

  if (currentView === "miluim") {
    return <MiluimView onBack={() => setCurrentView("home")} />;
  }

  return (
    <HomeView
      onOpenKeva={() => setCurrentView("keva")}
      onOpenMiluim={() => setCurrentView("miluim")}
    />
  );
};

export default LandingPage;