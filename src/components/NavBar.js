import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <h1>Space Travellers&apos; Hub</h1>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
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
