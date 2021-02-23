import './nav.css'
import React from 'react'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='nav-bar'>
      <Link className='nav-link' to='/'>Home</Link>
      <Link className='nav-link' to='/register'>Login/Register</Link>
      {/* <Link to='/'>Home</Link> */}
    </header>
  );
}

export default Nav;