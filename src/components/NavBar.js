import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-space-travelers-inc.png';
import '../styles/navBarStyle.css';

const NavBar = () => {
  const links = [
    {
      name: 'Rockets',
      path: '/',
    },
    {
      name: 'Missions',
      path: 'Missions',
    },
    {
      name: 'My Profile',
      path: 'Profile',
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className="logo-img" alt="space traveler's hub logo" />
        <h1 className="head">Space Traveller&apos;s Hub</h1>
      </div>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.name} className="list">
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : 'unactive')}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

// className = {isActive ? active : undefined}
