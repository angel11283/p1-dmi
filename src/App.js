import React from "react";

function App() {
  return (
    <div>
      <div>
        <h1>LogIn</h1>
      </div>
      <div>
        <label>Nombre de usuario:</label>
        <input
          type="text"
        />
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
        />
      </div>

      <button onclick="location.href='./LoggedIn.js'">Iniciar sesión</button>
    </div>
  );
}

export default App;