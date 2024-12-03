import { useState } from "react";

import {
  ImageFour,
  ImageOne,
  ImageThree,
  ImageTwo,
  Lighting,
  Plug,
} from "../assets";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("Consumers");

  return (
    <section className="how-it-works">
      <h2 className="feature-header">How It Works</h2>

      <div className="toggle-container">
        <div className="toggle-buttons">
          {/* Consumers Button */}

          <button
            className={`how-it-works-active ${
              activeTab === "Consumers" ? "buttonactive" : ""
            }`}
            onClick={() => setActiveTab("Consumers")}
          >
            <img src={Plug} alt="Plug Icon" />
            <p>Consumers</p>
          </button>

          {/* Anchors Button */}
          <button
            className={`anchorbutton ${
              activeTab === "Anchors" ? "buttonactive" : ""
            }`}
            onClick={() => setActiveTab("Anchors")}
          >
            <img src={Lighting} alt="Lighting Icon" />
            Anchors
          </button>
        </div>
      </div>

      <div className="steps">
        {/* Consumers Steps */}
        <div className="firstcontainer">
          {activeTab === "Consumers" && <div className="firstcontainer"></div>}
          <div className="circle-div">
            <div className="circle">
              <p> 1 </p>

              <img src={ImageOne} alt="Step 1" />
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
              <img src={ImageThree} alt="Step 2" />
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
              <img src={ImageTwo} alt="Step 3" />
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
              <img src={ImageFour} alt="Step 4" />
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
