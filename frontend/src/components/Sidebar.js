import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../Sidebar.css';
import About from '../pages/about';
import { Outlet, Link, Route, Routes, Router, BrowserRouter } from "react-router-dom";

export default props => {
  return (
    <Menu>
      <Link to='/'>
        صفحه اصلی
      </Link>
      <Link to='/save'>
        ذخیره برنامه
      </Link>
      <Link to='/donate'>
        ساپورت مالی
      </Link>
      <Link to="/about">
        درباره من
      </Link>
      {/* <a className="menu-item" href="/logout">
        خروج
      </a> */}

      <Outlet />
    </Menu>
  );
};
