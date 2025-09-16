import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Serverices from "./Serverices";
import PricingPage from "../features/PricingPage";
import CustomerPage from "./CustomerPage";
import SupportPage from "./SupportPage";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Serverices />
      <CustomerPage/>
      <SupportPage/>
      <PricingPage/>
    </>
  );
};

export default HomePage;
