import React, { useState } from 'react';
import "../styles.css";
import logo from "../images/lawconnect-logo.png";
 
export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false);

  const toggleButton = () => {
    setShowMenu(!showMenu);
  };

	return (
		<div id="navbar">
      <div id="logo-container">
        <img id="logo" src={logo} alt="lawconnect logo" />
      </div>
      <a href="#" id="toggle-button" onClick={toggleButton}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div id="navbar-links" class={showMenu ? "active" : ""}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
	)
}
