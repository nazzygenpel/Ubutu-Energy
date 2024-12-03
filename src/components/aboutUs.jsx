const AboutUs = () => {
  return (
    <div id="about-us-id">
      <h2 className="feature-header">About Us</h2>

      <section className="about-us">
        <div className="about-content">
          <div className="vision">
            <div>
              <h3>Vision</h3>
            </div>
            <p className="about-paragraph">
              Transforming wasted energy into community power
            </p>
          </div>

          <div className="mission">
            <div>
              <h3>Mission</h3>
            </div>

            <p className="about-paragraph">
              We democratize power generation, empowering you to drive community
              development through more productive energy generation and sharing
              for improved lives.
            </p>
          </div>
        </div>

        <div className="location-container">
          <div>
            <h3 className="location-header">Supported Locations</h3>
          </div>

          <div className="location-content">
            <div className="actual-locations">
              <p>Enugu</p>
              <p>Ogun</p>
              <p>Lagos</p>
              <p>Abuja</p>
            </div>
            <div className="actual-locations">
              <p>Rivers</p>
              <p>Kaduna</p>
              <p>Abia</p>
              <p>Ebonyi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
