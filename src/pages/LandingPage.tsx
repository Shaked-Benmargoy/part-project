import { useState } from "react";
import HomeView from "../components/landing/HomeView";
import KevaView from "../components/landing/Keva/KevaView";
const LandingPage = () => {
  const [currentView, setCurrentView] = useState<"home" | "keva">("home");

  if (currentView === "keva") {
    return <KevaView onBack={() => setCurrentView("home")} />;
  }

  return <HomeView onOpenKeva={() => setCurrentView("keva")} />;
};

export default LandingPage;