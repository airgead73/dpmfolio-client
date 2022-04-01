import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import AuthBtn from './AuthBtn';

const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">DPMFOLIO</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/external">external</NavLink>
          </li>
          <li className="nav-item">
            <AuthBtn/>
          </li>          
        </ul>
      </div>
    </div>
  </nav> 
  );
}

export default NavBar;
