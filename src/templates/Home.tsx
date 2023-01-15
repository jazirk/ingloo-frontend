import { AboutUs } from './AboutUs';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';
import { HealthCare } from './HealthCare';
import { Hero } from './Hero';
import { Initiatives } from './Initiatives';
import { Mission } from './Mission';
import { Philiosophy } from './Philosophy';
import { Team } from './Team';
import { WhatWeDo } from './WhatWeDo';

const Home = () => {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <HealthCare />
      <Mission />
      <Philiosophy />
      <Initiatives />
      <AboutUs />
      <Team />
      <ContactUs />
      <Footer />
    </>
  );
};

export { Home };
