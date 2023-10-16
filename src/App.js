import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Login";
import Inicio from "./Inicio";

function App(){
  return(
  <div>
  <Router>
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/Inicio" element={<Inicio/>}/>
    </Routes>
  </Router>
</div>
  );
}
export default App;