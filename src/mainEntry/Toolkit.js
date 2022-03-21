import React from "react";
import SkillSectionList from "./SkillSectionList";

import "./Toolkit.css";

function Toolkit() {
  return (
    <div className="toolkit__wrapper">
      <h1>My Toolkit</h1>
      <h2 className="toolkit__subheader">This is a self assessment of my skills with a rating of 1 to 10 with 10 being awesome and 1 being noob</h2>
      <SkillSectionList />
    </div>
  );
}

export default Toolkit;
