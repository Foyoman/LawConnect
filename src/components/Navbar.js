import React, { useState } from 'react';
import "../styles.css";
import logo from "../images/lc-logo.svg";
 
export default function Navbar() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [menuClicked, setMenuClicked] = useState(false);

  const updateMenu = (e) => {
    e.preventDefault();
    
    if (!menuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setMenuClicked(!menuClicked);
  }
  
	return (
		<div id="navbar">
      <div className='container'>
        <div id="logo-container">
          <img id="logo" src={logo} alt="lawconnect logo" />
        </div>
        <a className='mobile-only burger-menu' href="#" id="burger-menu" onClick={ updateMenu }>
          <span className={ burgerClass }></span>
          <span className={ burgerClass }></span>
          <span className={ burgerClass }></span>
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
      <div className={` ${ menuClass } mobile-only `}>
        <ul>
          <li><a href="#">For People</a></li>
          <li><a href="#">For Businesses</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
	)
}
