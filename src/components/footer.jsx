import { AppStore, FooterLogo, GooglePlay } from "../assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={FooterLogo} alt="Logo" />
      </div>
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Locations</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>For Consumers</li>
              <li>For Anchors</li>
              <li>For Installers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>+234 812 345 6789</li>
              <li>contact@ue.energy</li>
              <li>85 Great Portland Street, London, England, W1W 7LT</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Download Mobile App</h3>
            <div className="app-buttons">
              <img src={GooglePlay} alt="Google Play" />
              <img src={AppStore} alt="App Store" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Ubuntu Energy 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
