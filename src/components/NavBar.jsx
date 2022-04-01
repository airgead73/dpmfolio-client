import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">home</NavLink>
      <NavLink to="/profile" className="nav-link">profile</NavLink>
    </nav>
  );
}

export default NavBar;
