import React, {useState, useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const {login} = useContext(AuthContext)

    const handleLogin = (event) =>{
        event.preventDefault();
        login(username,password)
        navigate(username === "admin"? "/admiin":"/usu")
    }

    

    return(
        <form onSubmit={handleLogin}> 
        <div>
           
            <h2>Login</h2>
            <input
                type="text"
                placeholder="USUARIO"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h2>password</h2>
            <input
                type="password"
                placeholder="CONTRASENIA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={() => login(username, password)}>Iniciar Sesión</button>
        </div>
        </form> 
    )
}

export default Login;