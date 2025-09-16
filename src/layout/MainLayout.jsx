import React from "react";
import { Outlet } from "react-router-dom";
import NavigationSection from "../components/NavigationSection";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <NavigationSection />
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
