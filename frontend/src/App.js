import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { Fragment } from 'react';



function App() {

  return (
    <div className='App'>
        <Routes>
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/' element={
                                    <PrivateRoute>
                                      <HomePage />
                                    </PrivateRoute>
                                  }
          />
        </Routes>
    </div>
  )

  // return (
  //   <div className='App'>
  //     <Router>
  //       <Routes>
  //         <Route element={ <PrivateRoute /> } >
  //           <Route element={ <HomePage /> } path='/' exact />
  //         </Route>
  //         <Route element={ <LoginPage /> } path='/login' />
  //       </Routes>
  //     </Router>
  //   </div>
  // )
  
  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <Fragment>
  //         <AuthProvider>
  //           <Routes>
  //             <Route exact path='/' element={<PrivateRoute />} >
  //               <Route exact path='/' element={<HomePage />} />
  //             </Route>
  //             <Route element={<LoginPage />} path="/login" />
  //           </Routes>
  //         </AuthProvider>
  //       </Fragment>
  //     </BrowserRouter>
  //   </div>
  // );

  // return (
  //   <div className='App'>
  //     <BrowserRouter>
  //       <AuthProvider>
  //         <PrivateRoute component={HomePage} path="/" exact />
  //         <Routes>
  //           <Route component={LoginPage} path="/login" />
  //         </Routes>
  //       </AuthProvider>
  //     </BrowserRouter>
  //   </div>
  // )

  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <AuthProvider>
  //         <PrivateRoute component={HomePage} path="/" exact/>
  //         <Route component={LoginPage} path="/login"/>
  //       </AuthProvider>
  //     </BrowserRouter>
  //   </div>
  // );

}

export default App;


