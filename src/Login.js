import React, {useState} from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (username === 'Angel' && password === '11283') {
      navigate("/Inicio");
    } else {
      alert('Credenciales inválidas');
    }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

    const navigate = useNavigate();
    return (
      <div className="container">
        <div className="header">
          <h1>LogIn</h1>
        </div>
        <div className="input-container">
          <label>Nombre de usuario:</label>
          <input
            type="text" value={username} onChange={handleUsernameChange}
          />
        </div>
        <div className="input-container">
          <label>Contraseña:</label>
          <input
            type="password" value={password} onChange={handlePasswordChange}
          />
        </div>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    ); 
}
export default LogIn;