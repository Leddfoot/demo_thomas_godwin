import React from "react";
// import StartupModal from "./UI/Modals/StartupModal";
import Toolkit from "./Toolkit";
import PortfolioSection from "./PortfolioSection";
import IntroSection from "./IntroSection";


import "./MainEntry.css";

function MainEntry({ modalIsVisible }) {
  return (
    <>
      <div className="main-entry__wrapper">
        <IntroSection />
        <PortfolioSection />
        <Toolkit />
      </div>
    </>
  );
}

export default MainEntry;
