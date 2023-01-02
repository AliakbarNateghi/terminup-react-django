import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import './index.css'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Notfound from './pages/NotFound'
import Register from './pages/RegisterPage';
import Donate from './pages/donate';
import About from './pages/about';

function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute component={HomePage} path="/" exact />
            <PrivateRoute component={Donate} path='/donate' />
            <PrivateRoute component={About} path='/about' />
            <Route component={Register} path="/register" />
            <Route component={LoginPage} path="/login" />
            <Route component={Notfound} path="*" />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );

}

// function App() {
//   return (
//     <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
//       <p className="text-3xl text-gray-700 font-bold mb-5">
//         Welcome!
//       </p>
//       <p className="text-gray-500 text-lg">
//         React and Tailwind CSS in action
//       </p>
//     </div>
//   );
// }

export default App;


