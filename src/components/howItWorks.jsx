import {
  ImageFour,
  ImageOne,
  ImageThree,
  ImageTwo,
  Lighting,
  Plug,
} from "../assets";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="feature-header">How It Works</h2>

      <div className="toggle-container">
        <div className="toggle-buttons">
          <div className="how-it-works-active">
            <img src={Plug} />
            <p>Consumers</p>
          </div>
          <button className="anchorbutton">
            <img src={Lighting} />
            Anchors
          </button>
        </div>
      </div>

      <div className="steps">
        <div className="firstcontainer">
          <div className="circle-div">
            <div className="circle">
              <p> 1 </p>

              <img src={ImageOne} />
            </div>
            <div className="content">
              <p>
                Get connected by a <strong>Registered Installer</strong> near
                you.
              </p>
            </div>
          </div>
          <div className="circle-div">
            <div className="circle">
              <p> 2 </p>
              <img src={ImageThree} />
            </div>
            <div className="content">
              <p>
                Download the <strong> Ubuntu Energy App </strong> from different
                stores; <strong>Google PlayStore</strong> &
                <strong>Apple App Store</strong> and sign up.
              </p>
            </div>
          </div>
        </div>

        <div className="secondcontainer">
          <div className="circle-div">
            <div className="circle">
              <p>3</p>
              <img src={ImageTwo} />
            </div>
            <div className="content">
              <p>
                Start <strong>Buying</strong> and consuming energy.
              </p>
            </div>
          </div>
          <div className="circle-div">
            <div className="circle">
              <p>4</p>
              <img src={ImageFour} />
            </div>
            <div className="content">
              <p>
                <strong>Track & Manage</strong> your Energy Usage and Usage
                Trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
