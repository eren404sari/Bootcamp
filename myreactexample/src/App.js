import React from "react";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import Home from "./components/home.js";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = "http://localhost:8077/api";
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      ///config.headers.Authorization = `Bearer ${}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign up" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;