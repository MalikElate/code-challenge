import React, { useState } from 'react'; 

const SearchMode = () => {
  const [skill, setSkill] = useState(); 
  const [tag, setTag] = useState(); 
  return (
    <div className='skill-input-div'>
    <input 
      className='skill-input'
      onChange={(e) => {
        setSkill(e.target.value);
      }}
    />
    <button className='skill-btn'>Add Skill</button>
      <select
        className='skill-tag-select'
        onChange={(e) => {
          setTag(e.target.value);
        }}
      >
        {['Shooting', 'Ball Handling', 'Conditioning', 'Dunking'].map((tag) => (
          <option value={tag}>{tag}</option>
        ))}
      </select>
  </div>
  );
}

export default SearchMode;