// import React, { useState } from 'react';
// // import Parse from './parse/dist/parse.min.js';
// import Parse from 'parse'
// import '../App.css';
// import { Button, Divider, Input } from 'antd';

// export const UserRegistration = () => {
//   // State variables
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const doUserRegistration = async function () {
//     // Note that these values come from state variables that we've declared before
//     const usernameValue = username;
//     const passwordValue = password;
//     try {
//         // Since the signUp method returns a Promise, we need to call it using await
//         const createdUser = await Parse.User.signUp(usernameValue, passwordValue);
//         alert(
//         `Success! User ${createdUser.getUsername()} was successfully created!`
//         );
//         return true;
//     } catch (error) {
//         // signUp can fail if any parameter is blank or failed an uniqueness check on the server
//         alert(`Error! ${error}`);
//         return false;
//     }
//     };

//   return (
//     <div>
//       <div className="container">
//         <h2 className="heading" style={{textAlign : 'center'}}>{'ثبت نام'}</h2>
//         <Divider />
//         <div className="form_wrapper">
//           <Input
//             style={{textAlign : 'right'}}
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             placeholder="یه نام کاربری انتخاب کن"
//             size="large"
//             className="form_input"
//           />
//           <br></br><br></br>
//           <Input
//             style={{textAlign : 'right'}}
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             placeholder="یه رمز انتخاب کن"
//             size="large"
//             type="password"
//             className="form_input"
//           />
//         </div>
//         <br></br>
//         <div className="form_buttons" style={{textAlign: 'center'}}>
//           <Button
//             onClick={() => doUserRegistration()}
//             type="primary"
//             className="form_button"
//             color={'#208AEC'}
//             size="large"
//           >
//             ثبت نام
//           </Button>
//           <br></br><br></br>
//             <p className="form__hint" style={{textAlign: 'right'}}>اکانت داری؟ <a className="form__link" href="/login">ورود</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Button, FormGroup } from "react-bootstrap"
import axios from "axios"
import PasswordStrengthBar from "react-password-strength-bar"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { transition } from '../components/FoodCard';
import Head from "next/head"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { useAlert } from 'react-alert';
const emailReg = /[A-Za-z0-9_\.\-]+[@][a-z]+[\.][a-z]/
const Register = () => {
    const Alert = useAlert()
    const router = useRouter()
    const [passScore, setPassScore] = useState(0)
    const [registered, setRegistered] = useState(false)
    const [isPass, setIsPass] = useState(true)
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        passWord: "",
        passWord2: "",
        // address: ""
    })
    const registerReq = async () => {

        if (registerForm.name 
            && registerForm.email 
            && registerForm.passWord.length 
            // && registerForm.address 
            && registerForm.passWord === registerForm.passWord2 
            && emailReg.test(registerForm.email) 
            && passScore > 1) {
            try {
                const { data } = await axios.post('http://127.0.0.1:8000/register', {
                    name: `${registerForm.name}`,
                    email: `${registerForm.email}`,
                    password: `${registerForm.passWord}`,
                    // address: `${registerForm.address}`
                })
                Alert.success("logged in!")
                router.push('/login')

            } catch  {
                Alert.error("this email is already registered")
            }

        } else {
            if (!registerForm.name 
                || !registerForm.email 
                || !registerForm.passWord.length 
                // || !registerForm.address
              ) { Alert.error("fill all fields") } else {
                if (!emailReg.test(registerForm.email)) {
                    Alert.error("please write a correct email")
                } else {
                    if (passScore <= 1) {
                        Alert.error("weak passWord")
                    } else {

                        if (registerForm.passWord !== registerForm.passWord2) {
                            Alert.error("passWord confirmation in not correct")
                        }
                    }
                }
            }
        }
    }
    const EnterPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            registerReq()
        }
    }

    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transition} className="container my-2 my-md-5">
            <Head>
                <title>sign Up</title>
                <link href="/manifest.json" rel="manifest" />
            </Head>
            <div className=" p-5 border container  text-center col-12 col-sm-8 col-md-6 col-lg-5  col-xl-4  ">
                <Form.Label>Sign Up</Form.Label>
                <br />
                <FormControl className=" shadow-none inputfocus"
                    onChange={e => { setRegisterForm({ ...registerForm, name: e.target.value }) }} type="text" placeholder="Name..." />
                <br />
                <FormControl className=" shadow-none inputfocus" type="email" onChange={e => { setRegisterForm({ ...registerForm, email: e.target.value }) }} placeholder="Email..." />
                <br />
                <FormControl className=" shadow-none inputfocus" onChange={e => { setRegisterForm({ ...registerForm, passWord: e.target.value }) }} type={isPass ? "password" : "text"} placeholder="Password" />
                <Button className=" bg-white m-0 p-0 border-0 shadow-none text-dark" onClick={() => setIsPass(!isPass)}>
                    {isPass ? <AiFillEyeInvisible className="eyesize" /> : <AiFillEye className="eyesize" />}
                </Button>
                <PasswordStrengthBar onChangeScore={s => setPassScore(s)} password={registerForm.passWord} />

                <FormControl className=" shadow-none inputfocus" onChange={e => { setRegisterForm({ ...registerForm, passWord2: e.target.value }) }} type={isPass ? "password" : "text"} placeholder="Password confirmation" />

                <br />
                {/* <FormControl className=" shadow-none inputfocus" onKeyPress={EnterPress}
                    onChange={e => { setRegisterForm({ ...registerForm, address: e.target.value }) }} type="text" placeholder="Address" /> */}
                <br />

                <Button onClick={registerReq} className="col-12  btn-dark  shadow-none">Register</Button>
                <text className=" mt-5 text-muted">already have an account?<Link href="/login">log in!</Link></text>
            </div>
        </motion.div>
    )
}

export default Register