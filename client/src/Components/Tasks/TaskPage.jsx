import './tasks.css'; 
import React, { useState, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import Skill from './Skill'; 
import DisplayMode from './DisplayMode'; 
import SearchMode from './SearchMode'; 

const TasksPage = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState(true);
  const skills = useSelector((redux) => redux.skills.skills);

  useEffect(() => {
    dispatch({ type: 'GET_SKILLS'});
  }, []);
  return (
    <div className='task-page-div'>
      <div className='task-page-header-div'>
        <h4 className='task-page-header'>Skills in training</h4>
        <button className='skill-btn' onClick={()=>setMode(!mode)}>{mode? 'Search' : 'Display'} Mode</button>
      </div>
      {
        mode? <SearchMode/> : <DisplayMode/>
      }
      <div className='skill-card-div'>
        { 
          skills.map((skill, i) => ( 
            <Skill key={i} skill={skill}/>
          ))
        }
      </div>
    </div>
  );
}

export default TasksPage;