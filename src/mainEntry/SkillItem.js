import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import SkillDescription from './SkillDescription';


function SkillItem({skill}) {
  return (
    <div className='skill-section'>
    <h1>{skill.title}</h1>
    <div className="skill-image__wrapper">{skill.icon}</div>
    <div className="skill-rating__wrapper">{skill.rating}</div>
    <div className="skill-explanation__wrapper">

    {
        skill.description.map((description)=> (
                <SkillDescription key={uuidv4()}
                description={description}
                />
            ))}

    </div>
    </div>
  )
}

export default SkillItem