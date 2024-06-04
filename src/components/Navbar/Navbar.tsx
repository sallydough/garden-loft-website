// import React, { useState } from "react";
// import "./Navbar.css"; // Import your CSS file for styling
// import { Link } from "react-router-dom";
// import GLLogo from "../../assets/gloft-logo.svg";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//         <div className="logo">
//           <img src={GLLogo} alt="Logo" />
//           <h1>garden loft</h1>
//         </div>
//       </Link>
//       <div className={`menu-web ${isMenuOpen ? "open" : ""}`} id="menu-web">
//         <p>
//           <a href="#support-features">Safety Features</a>
//         </p>
//         <p>
//           <a href="#garden-loft-advantage">Garden Loft Advantage</a>
//         </p>
//         <p>
//           <a href="#two-units">Our Units</a>
//         </p>
//         <p>
//           <a href="#compare-costs">Compare Our Costs</a>
//         </p>
//         <p>
//           <a href="#four-step-process">4-Step Process</a>
//         </p>
//         <p>
//           <a href="#rules-and-grants">Rules + Grants</a>
//         </p>
//         <p>
//           <a href="#garden-lofters">Meet Our Garden Lofters</a>
//         </p>
//         <Link to="/faq" style={{ textDecoration: "none" }}>
//           <p>FAQ</p>
//         </Link>
//         <Link to="/tour" style={{ textDecoration: "none" }}>
//         <div className="button1">
//           <a href="#our-units">Book a Tour</a>
//         </div>
//         </Link>
//       </div>
//       <div className="hamburger-menu" id="hamburger-menu" onClick={toggleMenu}>
//         <span className="hamburger"></span>
//         <span className="hamburger"></span>
//         <span className="hamburger"></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import GLLogo from "../../assets/gloft-logo.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  let lastScrollY = window.scrollY;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setIsScrolled(currentScrollY > 0);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isNavbarVisible ? "visible" : "hidden"
      }`}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="logo">
          <img src={GLLogo} alt="Logo" />
          <h1>garden loft</h1>
        </div>
      </Link>
      <div className={`menu-web ${isMenuOpen ? "open" : ""}`} id="menu-web">
      <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>About</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>Backyard Suites</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>Villages</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>Atrium House</p>
        </Link>
        <Link to="/faq" style={{ textDecoration: "none" }}>
          <p>FAQ</p>
        </Link>
        <Link to="/tour" style={{ textDecoration: "none" }}>
          <div className="button1">
            <a href="#our-units">Book a Tour</a>
          </div>
        </Link>
        <Link to="/tour" style={{ textDecoration: "none" }}>
          <div className="button1">
            <a href="#our-units">Contact</a>
          </div>
        </Link>
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
