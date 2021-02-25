import './landing.css';
import React from 'react';

const Landing = () => {
  return (
    <div className='landing-div'> 
      <h1 className='landing-header'>Welcome to Swish-List</h1>
      <p className='landing-header'>Learn basketball skills faster with our task management web app</p>
      <button className='start-btn'><b>Get started for free!</b></button>
    </div>  
  );
}

export default Landing;