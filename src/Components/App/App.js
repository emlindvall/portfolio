import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToHashElement from "../ScrollToHashElement/ScrollToHashElement";
import Header from '../Header/Header';
import Home from '../Home/Home';
import AcquiredTaste from '../AcquiredTaste/AcquiredTaste';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="display-container">
        <ScrollToHashElement/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/acquired-taste" element={<AcquiredTaste/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;