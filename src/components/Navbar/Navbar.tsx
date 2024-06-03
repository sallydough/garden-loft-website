import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import GLLogo from "../../assets/gloft-logo.svg"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={GLLogo} alt="Logo" />
        <h1>garden loft</h1>
      </div>
      <div className={`menu-web ${isMenuOpen ? 'open' : ''}`} id="menu-web">
        <a href="#about">Safety Features</a>
        <a href="#photos">Garden Loft Advantage</a>
        <a href="#our-units">Our Units</a>
        <a href="#our-units">4-Step Process</a>
        <a href="#our-units">Rules + Grants</a>
        <div className="button1"><a href="#our-units">Book a Tour</a></div>
      </div>
      <div className="hamburger-menu" id="hamburger-menu" onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
    </nav>
  );
};

export default Navbar;


