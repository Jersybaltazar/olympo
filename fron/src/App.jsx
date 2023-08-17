import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import AccessoryList from "./pages/AccesorieList";
import CreateAccessory from "./pages/createAccesory";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accessory" element={<AccessoryList/>}/>
        <Route path="/create-accesory" element={<CreateAccessory/>}/>
      </Routes>
    </Router>
  );
}

export default App;
