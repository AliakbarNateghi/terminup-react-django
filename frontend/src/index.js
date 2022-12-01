import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import About from './pages/about'
import Donate from './pages/donate'
import './pages/soltan-adan/soltanAdan.ttf'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

function GeneralApp () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <GeneralApp />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();