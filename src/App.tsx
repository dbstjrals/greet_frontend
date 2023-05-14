// Modules import
import React from 'react';
import { Routes, Route } from "react-router-dom";

// Style import
import './styles/font.css';

// Components import
import Login from './pages/Login';
import EmailLogin from './pages/EmailLogin';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <div style={{fontFamily: 'Pretendard'}}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/email-login" element={<EmailLogin />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/onboarding" element={<Onboarding />}></Route>
      </Routes>
    </div>
  );
}

export default App;
