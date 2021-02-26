import React from 'react'; 
import { useDispatch } from 'react-redux'; 

const Skill = (props) => {
  const { skill } = props; 
  const dispatch = useDispatch();
  return (
    <div className='skill-card'>
      <h4 className='skill-card-header'>{skill.skill_name}</h4>
      <p>{skill.skill_tag}</p>
      <button className='skill-btn' onClick={()=> {
        dispatch({type: 'DELETE_SKILL', payload: {id: skill.skill_id}})
        console.log('deleting', skill.skill_id)}
      }> Remove</button>
      <button className='skill-btn'>Complete</button>
    </div>
  );
}

export default Skill;