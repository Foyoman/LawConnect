import React, { useState } from 'react';
import "../styles.css";
import logo from "../images/lc-logo.png";
 
export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

  const toggleButton = () => {
    setShowMenu(!showMenu);
  };

	return (
		<div id="navbar">
      <div className='container'>
        <div id="logo-container">
          <img id="logo" src={logo} alt="lawconnect logo" />
        </div>
        <a className='mobile-only' href="#" id="toggle-button" onClick={toggleButton}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className='desktop-only' id='navbar-links'>
          <ul>
            <li><a href="#">For People</a></li>
            <li><a href="#">For Businesses</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='desktop-only' id='navbar-accounts'>
          <a href="#">Login</a>
          <button>Create Free Account</button>
        </div>
      </div>
    </div>
	)
}
