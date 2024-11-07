import React from "react";
import { AuthContext } from "../Context/AuthContext";

const register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    return(
        <form onSubmit={handleLogin}> 
        <div>

            <h2>Usuario</h2>
            <input
                type="text"
                placeholder="USUARIO"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h2>Password</h2>
            <input
                type="password"
                placeholder="CONTRASENIA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={() => login(username, password)}>Crear Usuario</button>
        </div>
        </form> 
    )

}

export default register;