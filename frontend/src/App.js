import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Notfound from './pages/NotFound'
import Register from './pages/RegisterPage';

function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute component={HomePage} path="/" exact />
            <Route component={Register} path="/register" />
            <Route component={LoginPage} path="/login" />
            <Route component={Notfound} path="*" />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );

}

export default App;


