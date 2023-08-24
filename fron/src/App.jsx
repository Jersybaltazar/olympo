import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import AccessoryList from "./pages/AccesorieList";
import UserList from "./pages/UserList"
import CreateAccessory from "./pages/createAccesory";
import SignIn from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import CreateUser from './pages/createUser';
import DetailsAccessory from './pages/detailsAccesory'
function App() {
  const isLoggedIn  = true;

  return (
    <Router>
      <Routes>

      <Route path="/" element={<SignIn/>}/>
      <Route path="/registrar" element={<LogIn/>}/>

      {isLoggedIn ?(
        <>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accessory" element={<AccessoryList/>}/>
        <Route path="/user" element={<UserList/>}/>
        <Route path="/create-accesory" element={<CreateAccessory/>}/>
        <Route path="/create-user" element={<CreateUser/>}/>
        <Route path="/details" element={<DetailsAccessory/>}/>
        </>
      ):(
        <Navigate to="/login" /> 
      )}

   
      </Routes>
    </Router>
    );
  };


export default App;
