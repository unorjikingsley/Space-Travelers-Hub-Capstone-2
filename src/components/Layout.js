import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './footer';

const Layout = () => (
  <div>
    <NavBar />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
