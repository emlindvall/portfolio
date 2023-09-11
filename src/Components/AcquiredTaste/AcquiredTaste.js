import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import atButtonBack from '../../assets/button-back.png';
import './AcquiredTaste.css';

const AcquiredTaste = () => {

  return (
    <div className="acquiredtaste-container">
      <p>Pardon the dust! This page is still in progress.</p>
      <NavLink to="/">
        <img className="at-button-back" src={atButtonBack}></img>
      </NavLink>
    </div>
  )
}

export default AcquiredTaste;