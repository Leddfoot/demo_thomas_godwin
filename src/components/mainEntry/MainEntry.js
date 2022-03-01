import React from "react";
// import StartupModal from "./UI/Modals/StartupModal";
import TempNav from "./TempNav";
import PortfolioSection from "./PortfolioSection";

import "./MainEntry.css";

function MainEntry({ modalIsVisible }) {
  return (
    <>
      <div className="main-entry__wrapper">
        <div className="intro-section"></div>
        <TempNav />

        <div className="temp-fake-section2"></div>
        <div className="temp-fake-section"></div>
        <PortfolioSection />
      </div>
    </>
  );
}

export default MainEntry;
