import './tasks.css'; 
import React from 'react'; 

const TasksPage = () => {
  return (
    <div className='task-page-div'>
      <h4 className='task-page-header'>Skills in training</h4>
      <input className='skill-input'/>
      <button className='add-skill-btn'>Add Skill</button>
    </div>
  );
}

export default TasksPage;