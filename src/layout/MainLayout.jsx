import React from "react";
import { Outlet } from "react-router-dom";
import NavigationSection from "../components/NavigationSection";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <>
     
      <Helmet>
        <title>SAPEAGLE ERP PVT LTD - Best ERP, CRM, HRMS, Accounting & Inventory Software</title>

        <meta
          name="description"
          content="SAPEAGLE ERP provides powerful business software including ERP, CRM, HRMS, Payroll, Accounting, Inventory, Sales, Cloud Solutions & Business Management Tools trusted by 30,000+ companies."
        />
        <meta
          name="keywords"
          content="ERP software, CRM, HRMS, Payroll, Accounting Software, Inventory Management, Business Software, Cloud ERP, SAPEAGLE ERP"
        />
        <meta name="author" content="SAPEAGLE ERP Pvt Ltd" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="India’s Best ERP Software | CRM, HRMS, Accounting & Inventory Suite" />
        <meta
          property="og:description"
          content="Grow your business 3X faster with our AI-powered ERP & CRM suite. Trusted by 30,000+ companies worldwide."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAPEAGLE ERP - #1 Business ERP Software" />
        <meta
          name="twitter:description"
          content="All-in-one ERP, CRM, HRMS, Payroll, Accounting, Inventory & Automation Tools."
        />

        {/* FAVICON (Optional — Add only if URL available) */}
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Helmet>
      <NavigationSection />

      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
