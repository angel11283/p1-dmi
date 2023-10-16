import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Login";
import Menu from "./Menu";
import Perfil from "./Perfil";
import Configuracion from "./Configuracion";
import Servicios from "./Servicios";

function App(){
  return(
  <div>
  <Router>
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Perfil" element={<Perfil/>}/>
      <Route path="/Configuracion" element={<Configuracion/>}/>
      <Route path="/Servicios" element={<Servicios/>}/>
    </Routes>
  </Router>
</div>
  );
}
export default App;