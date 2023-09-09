import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import atButtonBack from '../../assets/button-back.png';
import './AcquiredTaste.css';

const AcquiredTaste = () => {

  return (
    <div className="acquiredtaste-container">
      <NavLink to="/">
        <img className="at-button-back" src={atButtonBack}></img>
      </NavLink>
    </div>
  )
}

export default AcquiredTaste;