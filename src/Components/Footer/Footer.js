import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoAt from '../../assets/logo-at.png';
import './Footer.css';

const Footer = () => {

  var date = new Date();
  var time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })


  return (
    <div className="footer-container">
      <div className="header-subcontainer" id="mobile-hide">
        <p className="header-id">Name</p>
        <NavLink to="/" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
          <p className="header-text">Em Lindvall</p>
        </NavLink>
        <p className="header-text">CST / GMT -5 ({time})</p>
      </div>
      <div className="header-subcontainer" id="mobile-hide">
        <p className="header-id">Status</p>
        <p className="header-text">Technical Producer @ <br></br><Link to="https://www.artic.edu/" style={{textDecoration: 'none', color: "#F8F8F8"}}>THE ART INSTITUTE OF CHICAGO</Link></p>
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
          <div className="nav-subcontainer" id="right">
            <NavLink to="#portfolio" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text">PORTFOLIO</p>
            </NavLink>
            <NavLink to="/#top" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text">BACK / TOP</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;