import React, { useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'

function Login() {
    const {setCurrentUser, isLoggedIn, setLoggedIn} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if(isLoggedIn) {
            navigate("/")
        }
    }
    , [isLoggedIn])

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/login", {
                username,
                password
            });
            setUsername("");
            setPassword("");
            setLoggedIn(true);
            setCurrentUser(response.data);
            navigate("/");
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <>
            <Navbar/>
            <div class="container col-xl-10 col-xxl-8 px-4 py-5">
                    <div class="col-md-10 mx-auto col-lg-5">
                    
                        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
                        <div><h1>Login</h1></div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
                        </form>
                    </div>
            </div>
        </>
    )
}

export default Login