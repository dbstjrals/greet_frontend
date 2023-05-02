import React from 'react';
import { Routes, Route } from "react-router-dom";

import './styles/font.css';

import Home from './pages/Home';

function App() {
  return (
    <div style={{fontFamily: 'Pretendard'}}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
