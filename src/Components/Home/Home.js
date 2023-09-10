import React, { useState, useEffect } from 'react';
import About from '../About/About';
import Story1 from '../Story1/Story1';
import Story2 from '../Story2/Story2';
import Story3 from '../Story3/Story3';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import textEmLindvall from '../../assets/text-em-lindvall.png';
import './Home.css';

const Home = () => {

  return (
    <div className="home-container">
      <div className="home-top-container">
        <div className="home-header-container">
          <p className="home-header">My name is <img className="text-em-lindvall" src={textEmLindvall}></img>.<br></br> I'm a <span style={{ fontWeight: '300', color: "#000000"}}>frontend dev & museum professional</span><br></br> based in Chicago, Illinois.</p>
        </div>
        <div className="home-description-container">
          <p className="home-description">I’m a tech-focused museum professional with  ten years of experience working for cultural institutions. I’ve always been especially passionate about leveraging technology to help make cultural education relevant, approachable, and enjoyable for learners of all backgrounds.</p>
        </div>
      </div>
      <About/>
      <Story1/>
      <Story2/>
      <Story3/>
      <Contact/>
    </div>
  )
}

export default Home;