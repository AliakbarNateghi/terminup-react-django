import { Link, useHistory, Redirect, Route } from 'react-router-dom';
import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/AuthContext';
import image from './media/peakpx.jpg';
import '../../src/LoginPage.css';

const LoginPage = () => {

    const navigate = useHistory();

    const RedirectFunc = () => {
        navigate.push('/register')
        window.location.reload();
    }


    const customStyle = {
        textAlign: 'right',
        borderRadius: '3px',
        height: '50%',
        width: '60%',
        fontSize: '100%'
    }

    let {loginUser} = useContext(AuthContext)
    return (
        <div 
            className='container' style={{
            // backgrondImage: `url(${image})`, backgrondSize: 'cover', backgroundRepeat: 'no-repeat'
        }}
        >
            <form onSubmit={loginUser}>
                <br /><br /><br />
                <input type="text" name="username" placeholder="نام کاربری" style={customStyle} />
                <br />
                <input type="password" name="password" placeholder="رمز عبور" style={customStyle} />
                <br />
                <input type="submit" value="ورود" className='btn btn-primary'/>
                <br /><br /><br />
                <p style={{float : 'right', cursor: 'pointer', color: 'blue'}} onClick={RedirectFunc}>حساب کاربری نداری ؟</p>
            </form>
        </div>
    )
}

export default LoginPage