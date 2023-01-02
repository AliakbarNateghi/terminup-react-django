import { createContext, useState, useEffect, useContext } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory, Redirect } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    const [loading, setLoading] = useState(true)

    const navigate = useHistory()

    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                                'username': e.target.username.value,
                                'password': e.target.password.value
                                })
        })
        const data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate.push('/')
            window.location.reload()
            // console.log(jwt_decode(localStorage.getItem('authTokens')).user_id)
        } else {
            // console.log('STH went wrong!!!')
        }
    }

    const registerUser = async (e) => {
        e.preventDefault();
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'username': e.target.username.value,
            'password': e.target.password.value,
            'password2': e.target.password2.value,
        })
        });
        if (response.status === 201) {
            navigate.push("/login");
            window.location.reload();
        } else {
            // console.log("Something went wrong!");
            // console.log('response :', response);
        }
    };


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate.push('/login')
        window.location.reload();
    }


    let updateToken = async ()=> {

        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })

        let data = await response.json()
        
        if (response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            // console.log('logged out !!!')
            // logoutUser()
        }

        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user:user,
        registerUser,
        setUser,
        setAuthTokens,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


    useEffect(()=> {

        if(loading){
            updateToken()
        }

        let fourMinutes = 1000 * 60 * 4

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, fourMinutes)
        return ()=> clearInterval(interval)

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}