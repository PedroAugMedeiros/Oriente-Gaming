import * as C from './App.styles'
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Rules from './pages/Rules';


export default function App() {
  return (
    <C.MainContainer>
      <Routes>
        <Route exact path="/" element={<Rules />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </C.MainContainer>
  );
}
