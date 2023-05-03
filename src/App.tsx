import React from 'react';
import { Routes, Route } from "react-router-dom";

import './styles/font.css';

import Login from './pages/Login';
import EmailLogin from './pages/EmailLogin';

function App() {
  return (
    <div style={{fontFamily: 'Pretendard'}}>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/email-login" element={<EmailLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
