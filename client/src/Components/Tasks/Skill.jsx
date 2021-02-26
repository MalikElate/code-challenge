import React from 'react'; 

const Skill = (props) => {
  return (
    <div className='skill-card'>
      <h4 className='skill-card-header'>{props.skill.skill_name}</h4>
      <p>{props.skill.skill_tag}</p>
      <button className='skill-btn'>Remove</button>
      <button className='skill-btn'>Complete</button>
    </div>
  );
}

export default Skill;