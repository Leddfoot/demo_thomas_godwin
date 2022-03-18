import React from "react";
import SkillSectionList from "./SkillSectionList";
import FuturePlans from "./FuturePlans";
import Footer from "../components/UI/Footer/Footer";

import "./Toolkit.css";

function Toolkit() {
  return (
    <div className="toolkit__wrapper">
      <h1>My Toolkit</h1>
      <SkillSectionList />
      <FuturePlans />
      <Footer />
    </div>
  );
}

export default Toolkit;
