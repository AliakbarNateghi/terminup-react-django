import { Route, Navigate, Routes } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const PrivateRoute = ({children, ...rest}) => {
    let {user} = useContext(AuthContext)
    return(
        <Routes>
            <Route {...rest}>{!user ? <Navigate to="/login" /> :   children}</Route>
        </Routes>
    )
}

export default PrivateRoute;