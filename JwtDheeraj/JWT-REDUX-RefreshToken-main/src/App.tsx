import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/register.page";
import LoginPage from "./pages/login.page";
import HomePage from "./pages/home.page";
import PassResetPage from "./pages/passreset.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resetpassword" element={<PassResetPage />} />
        <Route path="verifyemail">
          <Route path=":verificationCode" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
