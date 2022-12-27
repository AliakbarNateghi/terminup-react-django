import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../Sidebar.css';
import About from '../pages/about';
import { Link, Route, BrowserRouter, useHistory, Redirect } from "react-router-dom";
import { AuthProvider } from '../context/AuthContext';

// let Logout = AuthProvider.

const HomeRedirect = () => {
  let navigate = useHistory()
  navigate.push('/donate');
  window.location.reload();
  // return (<Redirect to='/donate' />)
  // window.location.reload()
}

export default props => {
  return (
    
    <Menu>
      {/* <div>
        <p onClick={HomeRedirect} >Home</p>
      </div> */}
      <Link to='/'>
        صفحه اصلی
      </Link>
      <Link to='/save'>
        ذخیره برنامه
      </Link>
      <p onClick={HomeRedirect}>
        ساپورت مالی
      </p>
      <Link to="/about">
        درباره من
      </Link>
      <p>
        خروج
      </p>
    </Menu>
  );
};
