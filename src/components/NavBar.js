import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-space-travelers-inc.png';

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
    <nav>
      <img src={logo} alt="space traveler's hub logo" />
      <h1>Space Traveller&apos;s Hub</h1>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
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
