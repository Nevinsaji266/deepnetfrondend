import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Header from './component/Header';
import Footer from './component/Footer';
import Homee from './pages/Homee';
import Headerr from './component/Headerr';



function App() {
 

  return (
  <>
<Header/>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
