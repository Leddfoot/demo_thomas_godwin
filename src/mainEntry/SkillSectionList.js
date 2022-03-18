import React from "react";
import skillExplanations from "./skillExplanations";
import SkillItem from "./SkillItem";
import './SkillSectionList.css'

function SkillSectionList() {

  
  return (
    <div className="skill-section__wrapper">
      <div className="skill-list" id="skills">
              {
                skillExplanations.map((skill)=> (
                        <SkillItem key={skill.id}
                        skill={skill}
                        />
                    ))}

      </div> 
    </div>
  );
}

export default SkillSectionList;
