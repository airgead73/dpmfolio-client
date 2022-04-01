import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthBtn from './AuthBtn';

const NavBar = () => {
  return (
    <nav>
      <p><AuthBtn/></p>
      <ul>
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/profile">profile</NavLink></li>
      </ul>  
    </nav>
  );
}

export default NavBar;
