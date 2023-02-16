import React from "react";
import { Route, Routes } from "react-router-dom";
import OnboardingPage from "../pages/OnboardingPage";
import Guesspage from "../pages/Guesspage";
import Resultpage from "../pages/Resultpage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/guess" element={<Guesspage />} />
      <Route path="/result" element={<Resultpage />} />
    </Routes>
  );
};

export default AppRoutes;
