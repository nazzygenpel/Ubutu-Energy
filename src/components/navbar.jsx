/* eslint-disable react/prop-types */
import { useState } from "react";

// import { Link, NavLink } from "react-router-dom";
import { Hamburger, svgLogo } from "../assets";
import MobileNavBar from "./mobileNavbar";

const Navbar = ({ isHero }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="nav-container">
      {/* Navbar section */}
      <nav
        className="navbar"
        style={{
          backgroundColor: isHero ? "transparent" : "#5C9F27",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <div className="logo">
          <img src={svgLogo} alt="Ubuntu Energy Logo" />
        </div>
        <div
          className="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <img src={Hamburger} alt="hamburger-options" />
        </div>
        <div className="menu-nav-link">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="menu-nav-link">
          <ul className="nav-links">
            <li>
              <a href="#sign-in">Sign In</a>
            </li>
            <li>
              <a href="#download" className="btn">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <MobileNavBar isOpen={isOpen} toggle={toggleMenu} />
    </section>
  );
};

export default Navbar;
