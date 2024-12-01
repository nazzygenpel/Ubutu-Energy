import { MobilecancelButton, MobilemenuButton } from "../assets";
import PropTypes from "prop-types";

const MobileNavBar = ({ isOpen, toggle }) => {
  console.log(isOpen, toggle);
  return (
    <div>
      <section
        className={isOpen ? "Mobilecontainer isOpen" : "Mobilecontainer "}
      >
        <div className="header-menu">
          <div>
            <img src={MobilemenuButton} />
          </div>
          <button className="x-button" onClick={toggle}>
            <img src={MobilecancelButton} />
          </button>
        </div>
        <div className="nav-midsection">
          <div className="mobile-nav-link">
            <ul>
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
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4> Want to be an Installer? </h4>
            <p>
              Sign up and start onboarding and managing anchors in your area.
            </p>
            <button className="Mobile-signup">Sign In</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileNavBar;

MobileNavBar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
};
