import React from "react";

function Servicios(){
return (
    <div className="container">
      <div className='header'>
        <h1>Servicios</h1>
      </div>
      <div className="input-container">
        <label>Servicio requerido</label>
        <input/>
      </div>
      <div className="input-container">
        <label>Domicilio</label>
        <input/>
      </div>
      <div className="input-container">
        <label>Fecha y hora</label>
        <input/>
      </div>
      <button>Solicitar servicio</button>
    </div>
  ); 
}
export default Servicios;