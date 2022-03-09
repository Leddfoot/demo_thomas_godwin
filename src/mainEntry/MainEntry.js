import React from "react";
// import StartupModal from "./UI/Modals/StartupModal";
import TempNav from "./TempNav";
import Toolkit from "./Toolkit";
import PortfolioSection from "./PortfolioSection";

import "./MainEntry.css";

function MainEntry({ modalIsVisible }) {
  return (
    <>
      <div className="main-entry__wrapper">
        <div className="intro-section">Frontend
        Developer.
        I like to craft solid and scalable frontend products with great user experiences.
        
        Highly skilled at progressive enhancement, design systems & UI Engineering.
        Over a decade of experience building products for clients across several countries.
        Highly skilled at progressive enhancement, design systems & UI Engineering.
        Over a decade of experience building products for clients across several countries.
        </div>

        
        <TempNav />

        <div className="temp-fake-section2"></div>
        <div className="temp-fake-section"></div>
        <PortfolioSection />
        <Toolkit />
      </div>
    </>
  );
}

export default MainEntry;
