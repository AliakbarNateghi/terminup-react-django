import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import image from './media/peakpx.jpg';
import '../../src/LoginPage.css';

const LoginPage = () => {

    const customStyle = {
        textAlign: 'right',
        // radius: '0.1px solid black',
        borderRadius: '3px',
        height: '50%',
        width: '60%',
        fontSize: '100%'
    }

    let {loginUser} = useContext(AuthContext)
    return (
        <div 
        // className='container' style={{backgrondImage: `url(${image})`, backgrondSize: 'cover', backgroundRepeat: 'no-repeat'}}
        >
            <form onSubmit={loginUser}>
                <br /><br /><br />
                <input type="text" name="username" placeholder="نام کاربری" style={customStyle} />
                <br />
                <input type="password" name="password" placeholder="رمز عبور" style={customStyle} />
                <br />
                <input type="submit" value="ورود" className='btn btn-primary'/>
                <br /><br /><br />
                <Link style={{float : 'right'}} to='/register' >حساب کاربری نداری ؟</Link>
            </form>
        </div>
    )
}

export default LoginPage