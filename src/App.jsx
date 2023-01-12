import React from 'react'
import Home from './components/Home';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App
