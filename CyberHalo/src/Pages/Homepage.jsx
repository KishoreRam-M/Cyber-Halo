import React from 'react';
import Features from '../Component/Feature';
import HeroSection from '../Component/HeroSection'; 
import AboutSection from '../Component/About';
import TrustedBy from '../Component/Customers';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <Features />
      <TrustedBy/>
    </>
  );
};

export default Homepage;
