import React from "react";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import Home from "./components/home.js";
import Profile from "./components/profile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



//for now the default path is to login immediately
//future implementation to keep user signed in
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;