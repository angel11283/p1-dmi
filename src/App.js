import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Login";
import Menu from "./Menu";

function App(){
  return(
  <div>
  <Router>
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/Menu" element={<Menu/>}/>
    </Routes>
  </Router>
</div>
  );
}
export default App;