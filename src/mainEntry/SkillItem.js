import React from "react";
import { v4 as uuidv4 } from "uuid";
import SkillDescription from "./SkillDescription";

function SkillItem({ skill }) {
  return (
    <div className="skill-section">
      <h2>{skill.title}</h2>
      <div className="skill-visual-component-wrapper">
        <div className="skill-image__wrapper">{skill.icon}</div>
        <div className="skill-rating__wrapper" id={skill.rating > 9 ? 'two-digit-rating' : null}>{skill.rating}</div>
      </div>
      <div className="skill-explanation__wrapper">
        {skill.description.map((description) => (
          <SkillDescription key={uuidv4()} description={description} />
        ))}
      </div>
    </div>
  );
}

export default SkillItem;
