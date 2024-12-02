import { useState } from "react";

// import { Link, NavLink } from "react-router-dom";
import {
  Analysisboard,
  ArrowDesk,
  BlurImage,
  Hamburger,
  HouseImage,
  Scroll,
  svgLogo,
  Trollyguy,
} from "../assets";
import MobileNavBar from "./mobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const [isHero, setIsHero] = useState(false);
  // const heroref = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (heroref.current) {
  //       const { bottom } = heroref.current.getBoundingClientRect();
  //       setIsHero(bottom <= 0);
  //     }
  //   };

  //   window.addEventListener(scroll, handleScroll);
  //   return () => {
  //     window.removeEventListener(scroll, handleScroll);
  //   };
  // }, []);

  return (
    <section className="nav-container">
      {/* {ishero ? (add the navSturcture) : (transparent navBar)} */}
      <header className="hero-header">
        {/* Navbar section */}
        <nav className="navbar">
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

        {/* Hero Section  */}
        <div className="hero-content">
          <h1 className="hero-text">
            Transforming wasted energy
            <br />
            into community power
          </h1>

          {/* Div for the whole center images */}
          <div className="center-icons">
            {/* Div for the blurbackground Image */}
            <div className="blurImage">
              <img src={BlurImage} />
            </div>
            {/* Div for the center white background images that forms the semi circle */}
            <img src={ArrowDesk} id="actual-deskarrow" />
            <div className="center-img">
              <div className="image-bg">
                <img src={Trollyguy} />
              </div>
              <div className="image-bg">
                <img src={Analysisboard} />
              </div>
            </div>
            <img src={ArrowDesk} id="opp-deskarrow" />
            <div className="greenImage">
              <img src={HouseImage} />
            </div>
          </div>
          <div className="scroll-indicator">
            <div>
              <img src={Scroll} />
            </div>
            <div>
              <p>Scroll down</p>
            </div>
          </div>
        </div>
      </header>
      <MobileNavBar isOpen={isOpen} toggle={toggleMenu} />
    </section>
  );
};

export default Navbar;
