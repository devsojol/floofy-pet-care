import React from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import WinterCareTips from "../components/WinterCareTips";
import ExpertVets from "../components/ExpertVets";
import FeedBack from "../components/FeedBack";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <ServicesSection></ServicesSection>
      </section>
      <section>
        <WinterCareTips></WinterCareTips>
      </section>
      <section>
        <ExpertVets></ExpertVets>
      </section>
      <section>
        <FeedBack></FeedBack>
      </section>
    </div>
  );
};

export default Home;
