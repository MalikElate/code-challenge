import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/register'>Login/Register</Link>
      {/* <Link to='/'>Home</Link> */}
    </div>
  );
}

export default Nav;