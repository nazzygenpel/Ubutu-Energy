import AboutUs from "../../components/aboutUs";
import Features from "../../components/features";
import Footer from "../../components/footer";
import HowItWorks from "../../components/howItWorks";

import Navbar from "../../components/navbar";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Features />
      <AboutUs />
      <HowItWorks />
      <Footer />
    </section>
  );
};

export default Home;
