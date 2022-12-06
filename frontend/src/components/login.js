import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function formData() {
        const form_data = new FormData();

        form_data.append("username", username);
        form_data.append("password", password);
        form_data.append("grant_type", "your_client_id");
        form_data.append("client_secret", "your_clinet_Secret");

        return form_data;
    };

    function handlesave (e) {
        e.preventDefault();

        const LOGIN_URL = 'http://localhost:8000/o/token'

        axios({
            baseURL: LOGIN_URL,
            method: 'POST',
            data: formData(),
        }).then((res) => {
            console.log('res.status :', res.status);
            if (res.status === 200 || res.status === 201) {
                console.log(res.data);
                console.log('res.status :', res.status);
                localStorage.setItem("user-token", res.data.access_token);
                alert("You entered successfully !");
                window.location.href = "/";
            }
        }).catch((error) => {
            console.log("ERROR", error);
            alert(error.response.data);
        });
    }

    return (
        <div>
            <form onSubmit={handlesave}>

                <input 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    type="username"
                    name="username"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    type="password"
                    name="password"
                />
                <br />
                <input className="btn" value="submit" type="submit" />
                <br />
                <Link to="/register" className="back-link">
                    <FiLogIn size={16} color="b366ff" />
                    Don't have an account???
                </Link>
            </form>
        </div>
    )
}

export default Login;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function formData() {
//     const form_data = new FormData();

//     form_data.append("username", email);
//     form_data.append("password", password);
//     form_data.append("grant_type", "password");
//     form_data.append("client_id", "your_client_id");
//     form_data.append("client_secret", "your_client_Secret");

//     return form_data;
//   }

//   function handleSave(e) {
//     e.preventDefault();

//     const LOGIN_URL = "http://localhost:8000/o/token/";

//     // const token = localStorage.getItem('token');
//     // e.preventDefault();
//     // axios.post('http://localhost:8000/token/',login,{withCredentials:true},{headers: {'Content-Type': 'application/json', 'X-CSRFToken': cookie,'Access-Control-Allow-Origin':'*','Authorization': `Bearer ${token}`}})
//     // .then(res => {
//     //     console.log(res.data);
//     // }

//     // )
//     // .catch(err => console.log(err))

//     axios({
//       baseURL: LOGIN_URL,
//       method: "POST",
//       data: formData(),
//     }).then((res) => {
//         console.log('status :', res.status);
//         if (res.status === 200) {
//           console.log(res.data);
//           localStorage.setItem("user-token", res.data.access_token);
//           alert("Login realizado com sucesso.");
//           window.location.href = "/";
//         }
//       }).catch((error) => {
//         console.log("ERROR", error);
//         alert("Email ou senha inválidos.");
//       });
//   }

//   return (
//     <div className="login_content">
//       <section className="form">
//         <form onSubmit={handleSave}>
//           <h1>Login</h1>

//           <input
//             value={email}
//             name="email"
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             type="email"
//           />
//           <br />
//           <input
//             value={password}
//             name="password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Senha"
//           />
//           <br />
//           <button className="button" type="submit">
//             Entrar
//           </button>
//           <br />
//           <Link to="/register" className="back-link">
//             <FiLogIn size={16} color="b366ff" />
//             Não tenho cadastro
//           </Link>
//         </form>
//         <ToastContainer />
//       </section>
//     </div>
//   );
// };

// export default Login;