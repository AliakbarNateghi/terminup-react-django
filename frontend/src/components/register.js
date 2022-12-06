import React from "react";
import { useState, useEffect} from "react";
import PropTypes, { func, number } from 'prop-types';
import {FaTimes} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const data = {
            username,
            password,
            email
        };

        let USER_URL = "http://localhost:8000/api/user-create/";
        axios({
            baseURL: USER_URL,
            method: "POST",
            data: data,
        }).then((res) => {
            console.log('status :', res.status);
            if (res.status === 201 || res.status === 200) {
            alert(`you registered successfully !`);
            navigate("/login/")
            }
            setTimeout(() => {
                console.log('Timeout :');
            navigate("/login/");
            }, 5000);
        }).catch((error) => {
            console.log(error);
            let error_msg = "";
            Object.keys(error.response.data).forEach(function (e) {
            error_msg += e + ": " + error.response.data[e][0] + " - ";
            });
            alert(error);
        });
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input  placeholder="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <input  placeholder="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                <br />
                <input  placeholder="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <input className="btn" value="submit" type="submit" />
            </form>
            <Link to="/login" className="back-link">
                <FiArrowLeft size={16} color="b366ff" />
                Already have an account ???
            </Link>
            <ToastContainer />
        </div>
    )
}

export default Register