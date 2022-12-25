import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export const PrivateRoute = ({ children }) => {
        console.log('children :', children);
        const { user } = useContext(AuthContext);
        console.log('user :', user);
        console.log('AuthContext :', AuthContext);

        if (!user) {
            return <Navigate to="/" />
        }
        return children;
};

// const PrivateRoute = ({children, ...rest}) => {
//     let { user } = useContext(AuthContext)
//     return(
//         <Routes>
//             <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>
//         </Routes>
//     )
// }

// const PrivateRoute = () => {
//     let auth = {'token':false}
//     return (
//         auth.token ? <Outlet /> : <Navigate to='/login' />
//     )
// }

export default PrivateRoute;