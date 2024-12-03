import { forwardRef } from "react";
import {
  Analysisboard,
  BlurImage,
  ArrowDesk,
  Trollyguy,
  HouseImage,
  Scroll,
} from "../assets";

const Hero = forwardRef((props, ref) => {
  return (
    <div>
      <header ref={ref} className="hero-header">
        <div className="hero-content">
          <h1 className="hero-text">
            Transforming wasted energy
            <br />
            into community power
          </h1>

          {/* Div for the whole center images */}
          <div className="center-icons">
            {/* Div for the blur background Image */}
            <div className="blurImage">
              <img src={BlurImage} alt="Blur Background" />
            </div>

            {/* Div for the center white background images that form the semi-circle */}
            <img src={ArrowDesk} id="actual-deskarrow" alt="Arrow Desk" />
            <div className="center-img">
              <div className="image-bg">
                <img src={Trollyguy} alt="Trolly Guy" />
              </div>
              <div className="image-bg">
                <img src={Analysisboard} alt="Analysis Board" />
              </div>
            </div>
            <img src={ArrowDesk} id="opp-deskarrow" alt="Opposite Arrow Desk" />
            <div className="greenImage">
              <img src={HouseImage} alt="House" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <div>
              <img src={Scroll} alt="Scroll Indicator" />
            </div>
            <div>
              <p>Scroll down</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
});

Hero.displayName = "ForwardedCustomDisplayName";

export default Hero;
