import { LastImage, MidImage, PoleImage } from "../assets";

const Features = () => {
  return (
    <section className="feature-container">
      <h1 className="feature-header">System Features</h1>

      <div className="feature">
        <div className="main-feature">
          <div>
            <img src={PoleImage} />
          </div>
          <p>
            <h4>Smart Power Distribution</h4>
            Our smart grid power distribution technology shares power from the
            solar owners (anchors) to consumers. It allows a solar PV owner with
            excess capacity to distribute power to their neighbours (consumers)
            at a minimal cost. The system is safe and provides additional
            protection for the owner. It is the cheapest and most reliable
            solution for the hard-to-electrify communities. One anchor can give
            electricity access to up to 20 consumers!
          </p>
        </div>

        <div className="diff-main-feature">
          <p>
            <h4> Energy Trading & Smart Metering Platform </h4>
            The solar owner and the consumer will have an energy platform for
            trading and metering. Solar owners earn money, and consumers save on
            costs compared to using expensive diesel fuels. The solar owner has
            an overview of their PV system, showing information like system
            status (when the system is on/off) and current power consumption.
            Data are displayed in easy-to-understand terms (to make the
            application your ultimate energy buddy).
          </p>
          <div>
            <img src={MidImage} />
          </div>
        </div>

        <div className="main-feature">
          <div>
            <img src={LastImage} />
          </div>
          <p>
            <h4>
              Machine Learning for Load Prediction & Generation Forecasting
            </h4>
            By using our system, the user will get forecasting of energy
            generation and advice on what devices to use due to the power
            availability levels. This forecasting allows the user to plan their
            days. The user can shift non-essential jobs to days with excess
            energy generation. (changes in narration - switches between you and
            the user, but confusing)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
