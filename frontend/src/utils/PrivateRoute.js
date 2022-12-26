import { Route, Link, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';


const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext)
    return(
        <Route {...rest}>
            {!user ? <Redirect to="/login" /> : children}
        </Route>
    )
};

export default PrivateRoute;