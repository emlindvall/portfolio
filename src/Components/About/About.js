import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import pngEm from '../../assets/png-em.png';
import textEm from '../../assets/text-em.png';
import logoAt from '../../assets/logo-at.png';
import './About.css';

const About = () => {

  return (
    <div className="about-container" id="about">
      <img className="png-em" src={pngEm}></img>
      <div className="about-right-subcontainer">
        <p className="about-header">I'm <img className="text-em" src={textEm}></img>. It's great to meet you.</p>
        <p className="about-left">I’m a museum professional with ten years of experience in cultural education, historical anthropology, and archaeology. I’m also an ACCET-certified frontend software engineer.</p>
        <p className="about-right">My happy place has always been in the sweet spot between culture and tech— from digitizing archaeological archives in undergrad, to teaching 3D printing classes, to building out booking solutions for museums, I’ve always sought out roles that have allowed me to problem-solve in ways that are equal-parts creative and logical.</p>
        <p className="about-left">When I’m not working, I’m an <NavLink to="acquired-taste" style={{textDecoration: 'none'}}><span style={{fontWeight: '200', color: "#F14B16"}}>amateur music supervisor </span></NavLink><img className="about-logo-at" src={logoAt}></img>, a dive-bar connoisseur, and a big fan of wandering aimlessly around my neighborhood. At any given moment, there’s an 85% chance that I’m spending way too much money on vinyl records your dad threw away in the 70s. </p>
      </div>
    </div>
  )
}

export default About;