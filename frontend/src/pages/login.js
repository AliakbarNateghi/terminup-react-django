import React, { useState } from 'react';
// import Parse from 'parse';
import '../App.css';
import { Button, Divider, Input } from 'antd';
import { FcGoogle } from 'react-icons/all'
import App from '../App'
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom'

export const UserLogin = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoggedin, setIsLoggedin] = useState(false);

const login = (e) => {
	e.preventDefault();
	console.log(name, email, password);
	const userData = {
	name,
	email,
	password,
	};
	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setName('');
	setEmail('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('token-info');
	setIsLoggedin(false);
};

return (
	<>
	<div style={{ textAlign: 'center' }}>
		<h1>This is React WebApp </h1>
		{!isLoggedin ? (
		<>
			<form action="">
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
				placeholder="Name"
			/>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				placeholder="Email"
			/>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Password"
			/>
			<button type="submit" onClick={login}>
				GO
			</button>
			</form>
		</>
		) : (
		<>
			<h1>User is logged in</h1>
			{/* <BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
				</Routes>
			</BrowserRouter> */}
			<button onClickCapture={logout}>logout user</button>
		</>
		)}
	</div>
	</>
);
}

export default UserLogin;


// export const UserLogin = () => {

//   const doUserLogIn = async function () {
//     // Note that these values come from state variables that we've declared before
//     const usernameValue = username;
//     const passwordValue = password;
//     try {
//         const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
//         // logIn returns the corresponding ParseUser object
//         alert(
//         `Success! User ${loggedInUser.get(
//             'username'
//         )} has successfully signed in!`
//         );
//         // To verify that this is in fact the current user, `current` can be used
//         const currentUser = await Parse.User.current();
//         console.log(loggedInUser === currentUser);
//         // Clear input fields
//         setUsername('');
//         setPassword('');
//         // Update state variable holding current user
//         getCurrentUser();
//         return true;
//     } catch (error) {
//         // Error can be caused by wrong parameters or lack of Internet connection
//         alert(`Error! ${error.message}`);
//         return false;
//     }
//   };


//   // State variables
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [currentUser, setCurrentUser] = useState(null);

//   // Function that will return current user and also update current username
//   const getCurrentUser = async function () {
//     const currentUser = await Parse.User.current();
//     // Update state variable holding current user
//     setCurrentUser(currentUser);
//     return currentUser;
//   };

//   return (
//     <div>
//       <div className="container">
//         <h2 className="heading" style={{textAlign: 'center'}}>{'ورود'}</h2>
//         <Divider />
//         <div className="form_wrapper">
//           <Input
//             style={{textAlign: 'right'}}
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             placeholder="نام کاربری"
//             size="large"
//             className="form_input"
//           />
//           <br></br><br></br>
//           <Input
//             style={{textAlign: 'right'}}
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             placeholder="رمز عبور"
//             size="large"
//             type="password"
//             className="form_input"
//           />
//         </div>
//         <br></br>
//         <div className="form_buttons">
//           <Button
//             onClick={() => doUserLogIn()}
//             type="primary"
//             className="form_button"
//             color={'#208AEC'}
//             size="large"
//             block
//           >
//             ورود
//           </Button>
//         </div>
//         <Divider />
//         <div className="login-social">
//           <div className="login-social-item" style={{textAlign: 'center'}}>
//             <FcGoogle style={{fontSize: '70px'}}/>
//           </div>
//         </div>
//         <br></br>
//         <p className="form__hint" style={{textAlign: 'right'}}>اکانت نداری؟ <a className="form__link" href="/register">ثبت نام</a></p>
//       </div>
//     </div>
//   );
// };


