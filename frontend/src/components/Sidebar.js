import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        صفحه اصلی
      </a>
      <a className="menu-item" href="/save">
        ذخیره برنامه
      </a>
      <a className="menu-item" href="/donate">
        ساپورت مالی
      </a>
      <a className="menu-item" href="/contactus">
        تماس با من
      </a>
      <a className="menu-item" href="/logout">
        خروج
      </a>
    </Menu>
  );
};