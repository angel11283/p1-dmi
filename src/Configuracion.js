import React from "react";

function Configuracion(){
    return (
      <div className="container">
        <div className='header'>
          <h1>Configuración</h1>
        </div>
        <div className="input-container">
          <label>Cambiar ombre de usuario:</label>
          <input
          />
        </div>
        <div className="input-container">
          <label>Cambiar contraseña:</label>
          <input
          />
        </div>
        <button>Editar cambios</button>
      </div>
    ); 
}
export default Configuracion;