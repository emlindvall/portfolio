import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoAt from '../../assets/logo-at.png';
import './Header.css';

const Header = () => {

  var date = new Date();
  var time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return (
    <div className="header-container">
      <div className="header-subcontainer" id="mobile-hide">
        <p className="header-id">Name</p>
        <NavLink to="/" style={{textDecoration: 'none', color: "#F8F8F8"}}>
          <p className="header-text" id="link">Em Lindvall</p>
        </NavLink>
        <p className="header-text">CST/GMT -5 ({time}, USA)</p>
      </div>
      <div className="header-subcontainer" id="mobile-hide">
        <p className="header-id">Status</p>
        <p className="header-text">Technical Producer @ <br></br><Link to="https://www.artic.edu/" style={{textDecoration: 'none', color: "#F8F8F8"}}>THE ART INSTITUTE OF CHICAGO</Link></p>
      </div>
      <div className="header-subcontainer">
        <div className="header-at-container">
          <NavLink to="/acquired-taste" id="link" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
          <p className="header-id">Acquired Taste</p>
        </NavLink>
          <img className="header-logo-at"src={logoAt}></img>
        </div>
        <NavLink to="/acquired-taste" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
          <p className="header-text" id="link">01. I'M DESPERATELY TRYING TO IMPRESS YOU</p>
        </NavLink>
      </div>
      <div className="header-subcontainer">
        <p className="header-id">Navigation</p>
        <div className="nav-container">
          <div className="nav-subcontainer">
            <Link to="#about" smooth={true} style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text" id="link">ABOUT EM</p>
            </Link>
            <NavLink to="#experience" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text" id="link">EXPERIENCE</p>
            </NavLink>
          </div>
          <div className="nav-subcontainer" id="right">
            <NavLink to="#portfolio" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text" id="link">PORTFOLIO</p>
            </NavLink>
            <NavLink to="#contact" style={{ textDecoration: 'none', color: "#F8F8F8"}}>
              <p className="header-text" id="link">CONTACT</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;