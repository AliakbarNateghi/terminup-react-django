import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  let {registerUser} = useContext(AuthContext)

  return (
      <form onSubmit={registerUser}>
        <input type='text' name='username' placeholder='Enter Username' />
        <input type='password' name='password' placeholder='enter Password' />
        <input type='password' name='password2' placeholder='enter Password confirmation' />
        <input type='submit' />
      </form>
  );
}

export default Register;