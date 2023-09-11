import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import textConnect from '../../assets/text-connect.png';
import iconEmail from '../../assets/icon-email.png';
import iconLink from '../../assets/icon-link.png';
import './Contact.css';

const Contact = () => {

  return (
    <div className="contact-container" id="contact">
      <p className="contact-header">Let's <img className="text-connect" src={textConnect}/>.</p>
      <div className="email-container">
          <img className="email-icon" src={iconEmail}/>
          <a href="mailto: edlindvall@gmail.com" className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>edlindvall@gmail.com</a>
      </div>
      <div className="links-container">
        <div clasName="links-subcontainer">
          <img className="link-icon" src={iconLink}/>
          <Link to="https://www.linkedin.com/in/emlindvall/"  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>LinkedIn</Link>
        </div>
        <div clasName="links-subcontainer">
          <img className="link-icon" src={iconLink}/>
          <Link to="https://github.com/emlindvall"  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>GitHub</Link>
        </div>
        <div clasName="links-subcontainer">
          <img className="link-icon" src={iconLink}/>
          <Link to="https://drive.google.com/file/d/1vnuLFBSH7vvPOrc4xU1kO5z0n4XcUZwt/view?usp=sharing"  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>Resume</Link>
        </div>
      </div>
    </div>
  )
}

export default Contact;