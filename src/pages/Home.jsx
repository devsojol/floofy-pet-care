import React from 'react';
import Banner from '../components/Banner';
import ServicesSection from '../components/ServicesSection';
import WinterCareTips from '../components/WinterCareTips';
import ExpertVets from '../components/ExpertVets';

const Home = () => {
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
    </div>
  );
};

export default Home;