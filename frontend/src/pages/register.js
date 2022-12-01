import React, { useState } from 'react';
// import Parse from './parse/dist/parse.min.js';
import Parse from 'parse'
import '../App.css';
import { Button, Divider, Input } from 'antd';

export const UserRegistration = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const doUserRegistration = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
        // Since the signUp method returns a Promise, we need to call it using await
        const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
        alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
        );
        return true;
    } catch (error) {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        alert(`Error! ${error}`);
        return false;
    }
    };

  return (
    <div>
      <div className="container">
        <h2 className="heading" style={{textAlign : 'center'}}>{'ثبت نام'}</h2>
        <Divider />
        <div className="form_wrapper">
          <Input
            style={{textAlign : 'right'}}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="یه نام کاربری انتخاب کن"
            size="large"
            className="form_input"
          />
          <br></br><br></br>
          <Input
            style={{textAlign : 'right'}}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="یه رمز انتخاب کن"
            size="large"
            type="password"
            className="form_input"
          />
        </div>
        <br></br>
        <div className="form_buttons" style={{textAlign: 'center'}}>
          <Button
            onClick={() => doUserRegistration()}
            type="primary"
            className="form_button"
            color={'#208AEC'}
            size="large"
          >
            ثبت نام
          </Button>
          <br></br><br></br>
            <p className="form__hint" style={{textAlign: 'right'}}>اکانت داری؟ <a className="form__link" href="/login">ورود</a></p>
        </div>
      </div>
    </div>
  );
};
