import { useRef, useEffect, useState } from "react";
import AboutUs from "../../components/aboutUs";
import Features from "../../components/features";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import HowItWorks from "../../components/howItWorks";
import Navbar from "../../components/navbar";

const Home = () => {
  const [isHero, setIsHero] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { bottom } = heroRef.current.getBoundingClientRect();
        setIsHero(bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Navbar isHero={isHero} />
      <Hero ref={heroRef} />
      <Features />
      <AboutUs />
      <HowItWorks />
      <Footer />
    </section>
  );
};

export default Home;
