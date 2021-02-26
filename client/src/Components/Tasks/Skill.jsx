import React from 'react'; 
import { useDispatch } from 'react-redux'; 

const Skill = (props) => {
  const { skill } = props; 
  const dispatch = useDispatch();
  let btnmsg; 
  skill.skill_status === 'complete'? btnmsg = 'incomplete' : btnmsg = 'complete';
  let cardColor; 
  skill.skill_status === 'complete'? cardColor = '#8ecae6' : cardColor = '#EEE';
  console.log('skill.skill_status', skill.skill_status, 'btnmsg', btnmsg)
  return (
    <div className='skill-card' style={{backgroundColor: cardColor}}>
      <h4 className={skill.skill_status}>{skill.skill_name}</h4>
      <p>{skill.skill_tag}</p>
      <button className='skill-btn' onClick={()=> {
        dispatch({type: 'DELETE_SKILL', payload: {id: skill.skill_id}})
      }}> Remove</button>
      <button className='skill-btn' onClick={()=> {
          dispatch({type: 'UPDATE_SKILL', payload: {id: skill.skill_id, status: btnmsg}})
        }}> {btnmsg} </button>
    </div>
  );
}

export default Skill;