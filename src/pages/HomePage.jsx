import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Serverices from "./Serverices";
import PricingPage from "../features/PricingPage";
import CustomerPage from "./CustomerPage";
import SupportPage from "./SupportPage";

import SEO from "../layout/SEO";

const HomePage = () => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SAPEAGLE ERP",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "url": "https://sapeagleerp.com/",
    "description": "All-in-one ERP software: CRM, HRMS, Payroll, Accounting, Inventory & Sales Management for SMEs & Enterprises in India.",
    "image": "https://sapeagleerp.com/logo.jpeg",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "INR",
      "url": "https://sapeagleerp.com/book-demo-section"
    }
  };

  return (
    <>
      <SEO
        title="Home Page - SAPEAGLE ERP | ERP, CRM, HRMS & Accounting Software"
        description="Welcome to SAPEAGLE ERP — All-in-one ERP software for SMEs & Enterprises. Manage CRM, HRMS, Payroll, Accounting, Inventory & Sales efficiently."
        canonical="https://sapeagleerp.com/"
        keywords="ERP software India, CRM software India, HRMS software, Payroll software, Accounting software, Inventory management software, SAPEAGLE ERP"
        ogImage="https://sapeagleerp.com/logo.jpeg"
        jsonLD={jsonLD}
      />

      {/* Page Sections */}
      <HeroSection />
      <About />
      <Serverices />
      <CustomerPage />
      <SupportPage />
      <PricingPage />
    </>
  );
};

export default HomePage;
