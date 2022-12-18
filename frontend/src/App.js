import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { Fragment } from 'react';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute />} >
                <Route exact path='/' element={<HomePage />} />
              </Route>
              <Route element={<LoginPage />} path="/login" />
            </Routes>
          </AuthProvider>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;


