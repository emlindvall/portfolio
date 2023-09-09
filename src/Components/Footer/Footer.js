import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logoAt from '../../assets/logo-at.png';
import './Footer.css';

const Footer = () => {

  return (
    <div className="footer-container">
      <div className="header-subcontainer">
        <p className="header-id">Name</p>
        <NavLink to="/" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
          <p className="header-text">Em Lindvall</p>
        </NavLink>
        <p className="header-text">CST/GMT -5(6:30pm, USA)</p>
      </div>
      <div className="header-subcontainer">
        <p className="header-id">Status</p>
        <p className="header-text">CURRENTLY AVAILABLE FOR FREELANCE PROJECTS</p>
      </div>
      <div className="header-subcontainer">
        <div className="header-at-container">
          <NavLink to="/acquired-taste" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
          <p className="header-id">Acquired Taste</p>
        </NavLink>
          <img className="header-logo-at"src={logoAt}></img>
        </div>
        <NavLink to="/acquired-taste" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
          <p className="header-text">01. I'M DESPERATELY TRYING TO IMPRESS YOU</p>
        </NavLink>
      </div>
      <div className="header-subcontainer">
        <p className="header-id">Navigation</p>
        <div className="nav-container">
          <div className="nav-subcontainer">
            <NavLink to="#about" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text">ABOUT EM</p>
            </NavLink>
            <NavLink to="#experience" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text">EXPERIENCE</p>
            </NavLink>
          </div>
          <div className="nav-subcontainer">
            <NavLink to="#portfolio" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text">PORTFOLIO</p>
            </NavLink>
            <NavLink to="#contact" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text">CONTACT</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;