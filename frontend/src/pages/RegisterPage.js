import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link, useHistory, Redirect, Route } from 'react-router-dom';
import Password from "antd/es/input/Password";


function Register() {

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  // const onSubmit = (e) => {
  //   setPassword(e.target.password.value);
  //   setPassword2(e.target.password2.value);
  // }

  const navigate = useHistory();

  const RedirectFunc = () => {
      navigate.push('/login')
      window.location.reload();
  }

  const customStyle = {
    textAlign: 'right',
    borderRadius: '3px',
    height: '50%',
    width: '60%',
    fontSize: '100%'
  }

  let {registerUser} = useContext(AuthContext)

  return (
    <div className="container">
      <form onSubmit={registerUser}>
        <br /><br /><br />
        <input type='text' name='username' placeholder='نام کاربریتو انتخاب کن' style={customStyle}/>
        <br />
        <input type='password' name='password' placeholder='رمز عبورتو وارد کن' style={customStyle} onChange={e => setPassword(e.target.value)}/>
        <br />
        <input type='password' name='password2' placeholder='رمز عبورتو دوباره وارد کن' style={customStyle} onChange={e => setPassword2(e.target.value)}/>
        <br />
        <input type='submit' value='ثبت نام' className="btn btn-primary"/>
        <br />
        <p>{password !== password2 ? 'رمزا با هم برابر نیستن' : ''}</p>
        <br /><br /><br />
        <p style={{float : 'right', cursor: 'pointer', color: 'blue'}} onClick={RedirectFunc}>حساب کاربری داری ؟</p>
        <br /><br />
        <p style={{fontSize: '13px', color: 'red'}}>دقت کن ک رمزت نباید شبیه نام کاربریت باشه / نباید کمتر از ۸ تا کاراکتر باشه و نمیتونی همشو هم عدد انتخاب کنی / راستی از پسوردای معروف هم استفاده نکن </p>
      </form>
    </div>
  );
}

export default Register;