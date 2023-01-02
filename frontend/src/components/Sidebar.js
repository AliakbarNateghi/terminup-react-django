import React, { useContext } from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../Sidebar.css';
import { Link, Route, BrowserRouter, useHistory, Redirect } from "react-router-dom";
import AutContext from '../context/AuthContext';


export default props => {

  const navigate = useHistory();

  let { logoutUser } = useContext(AutContext)

  const HomeRedirect = () => {
    navigate.push('/');
    window.location.reload();
  }

  const donateRedirect = () => {
    navigate.push('/donate');
    window.location.reload();
  }

  const aboutRedirect = () => {
    navigate.push('/about');
    window.location.reload();
  }

  const customStyle = {
    cursor: 'pointer',
  }

  return (
    
    <Menu>
      
      <p onClick={HomeRedirect} style={customStyle}>
        صفحه اصلی
      </p>
  
      <p onClick={ donateRedirect } style={customStyle}>
        برام قهوه بخر
      </p>

      <p onClick={ aboutRedirect } style={customStyle}>
        درباره من
      </p>

      <p onClick={ logoutUser } style={customStyle}>
        خروج
      </p>
    </Menu>
  );
};
