import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import About from './pages/about';
import Donate from './pages/donate';
import './pages/soltan-adan/soltanAdan.ttf';
import Register from './components/register';
import Login from './components/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// function GeneralApp () {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<App />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/donate' element={<Donate />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         {/* <Route exact path={"/home"} element={<Home />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/profile" element={<Profile />} />
//         <Route path="/user" element={<BoardUser />} />
//         <Route path="/mod" element={<BoardModerator />} /> */}
//         {/* <Route path="/admin" element={<BoardAdmin />} /> */}
//         {/* <Route path='/register' element={<UserRegistration />} />
//         <Route path='/login' element={<UserLogin />} /> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* <BrowserRouter> */}
//       <GeneralApp />
//     {/* </BrowserRouter> */}
//   </React.StrictMode>
// );

reportWebVitals();