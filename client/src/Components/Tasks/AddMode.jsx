import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';

const SearchMode = () => {
  const dispatch = useDispatch(); 
  const [skill, setSkill] = useState(); 
  const [tag, setTag] = useState('Shooting'); 
  return (
    <div className='skill-input-div'>
    <input 
      className='skill-input'
      value={skill}
      onChange={(e) => {
        setSkill(e.target.value);
      }}
    />
    <select
      className='skill-tag-select'
      value={tag}
      onChange={(e) => {
        setTag(e.target.value);
      }}
    >
      {['Shooting', 'Ball Handling', 'Conditioning', 'Dunking'].map((tag) => (
        <option value={tag}>{tag}</option>
        ))}
    </select>
    <button 
      className='skill-btn' 
      onClick={()=>{
        console.log(skill, tag); 
        setTag('Shooting'); 
        setSkill('');
        dispatch({type: 'ADD_SKILL', payload: {skill: skill, tag: tag}}); 
      }}> Add Skill
    </button>
  </div>
  );
}

export default SearchMode;