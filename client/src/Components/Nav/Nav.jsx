import './nav.css'
import React from 'react'; 
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='nav-bar'>
      <h3 className='nav-h3'><Link className='nav-link-header' to='/'>Swish-List</Link></h3>
      <div className='link-div'>
        {/* <Link style={{ textAlign: 'right'}} className='nav-link' to='/'>Home</Link> */}
        <Link className='nav-link' to='/register'>Login/Register</Link>
      </div>
      {/* <Link to='/'>Home</Link> */}
    </header>
  );
}

export default Nav;