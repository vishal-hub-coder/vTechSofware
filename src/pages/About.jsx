import React, { useState } from "react";
import SupportImage from "../assets/CompanyServices.png"; 
import elevatorImg from "../assets/elevator.jpg";
import esclarator from "../assets/eeeeee.jpg";
import counter from "../assets/counter.jpg";
import textile from "../assets/textile.jpg";
import solar from "../assets/solar.jpg";
import aayurvedic from "../assets/aayurvedic.jpg";
import realSttae from "../assets/realSttae.jpg";
import far from "../assets/far.jpg";
import industory from "../assets/industry.jpg";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../layout/SEO";

const tilesData = [
  {
    title: "Elevators",
    img: elevatorImg,
    content:
      "We specialize in advanced elevator solutions designed for safety, efficiency, and seamless vertical transportation. Whether for commercial, residential, or industrial use, our elevators are built to meet the highest standards of quality and innovation.",
  },
  {
    title: "Escalators",
    img: esclarator,
    content:
      "We provide modern escalator solutions that combine functionality, safety, and aesthetic appeal. Whether upgrading an existing facility or planning a new project, our escalators add value through innovative design, low maintenance costs, and reliable performance.",
  },
  {
    title: "Counter & Design Manufacturing",
    img: counter,
    content:
      "We provide custom counter and design manufacturing services for various industries. Our design-focused manufacturing process ensures that each counter is structurally sound and visually impactful. We work with premium materials including wood, glass, steel, and stone.",
  },
  {
    title: "Textile Manufacturing",
    img: textile,
    content:
      "Our textile manufacturing process integrates advanced machinery with skilled workmanship to produce a wide range of fabrics—woven, knitted, dyed, printed, or finished to exact client specifications. We maintain strict quality control at each stage.",
  },
  {
    title: "Solar Management",
    img: solar,
    content:
      "Our advanced solar management platform continuously monitors energy production and usage, identifying inefficiencies and enabling smart load balancing. With remote diagnostics and detailed analytics, clients gain full control over their energy systems.",
  },
  {
    title: "Ayurvedic Medicine Manufacturing",
    img: aayurvedic,
    content:
      "Rooted in India’s rich Ayurvedic heritage, our process integrates traditional formulations with state-of-the-art technology. Each batch is prepared in controlled environments to preserve the efficacy and therapeutic value of the herbs.",
  },
  {
    title: "Real Estate",
    img: realSttae,
    content:
      "Our commercial real estate offerings include office buildings, retail outlets, and business parks. Designed to support modern business needs, our spaces feature strategic locations, scalable layouts, and robust infrastructure.",
  },
  {
    title: "Pharmacy Management",
    img: far,
    content:
      "We ensure that all pharmacy operations comply with healthcare regulations including prescription verification and controlled substance management. Our systems support audit trails and reporting for inspections and accreditation.",
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTile = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6"
      style={{ backgroundImage: `url(${industory})` }}
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
          <SEO
        title="Home Page - SAPEAGLE ERP"
        
        description="Welcome to SAPEAGLE ERP — India's #1 ERP, CRM, HRMS, Accounting & Inventory Management Software."
        canonical="https://sapeagleerp.com/"
      />
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10">
       
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            Industries
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {tilesData.map((tile, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                layout
                className={`bg-white rounded-xl shadow-md border cursor-pointer transition-all duration-300 ${
                  isActive ? "shadow-lg border-blue-400" : "hover:shadow-lg"
                }`}
                onClick={() => toggleTile(index)}
              >
              
                <div className="flex justify-between items-center px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {tile.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-600" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden px-6 pb-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {tile.content}
                        </p>
                      
                        <img
                          src={tile.img}
                          alt={tile.title}
                          className="rounded-lg shadow-md w-full h-64 md:h-80 object-cover"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-16 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            Company
            <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
          <div className="flex justify-center">
            <img
              src={SupportImage}
              alt="Support"
              className="rounded-2xl shadow-lg max-w-full hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              SAPEAGLE ERP is a comprehensive solution that helps businesses
              streamline operations, improve efficiency, and make smarter
              decisions. It integrates all key business functions into a single,
              unified platform.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <span className="font-semibold">Process Automation:</span> Save
                time and reduce manual work by automating workflows.
              </li>
              <li>
                <span className="font-semibold">Data Insights:</span> Analyze
                customer and business data for better decision-making.
              </li>
              <li>
                <span className="font-semibold">Enhanced Communication:</span>{" "}
                Improve collaboration across departments and with customers.
              </li>
              <li>
                <span className="font-semibold">All-in-One System:</span> Manage
                finance, supply chain, HR, manufacturing, and CRM in one place.
              </li>
            </ul>

            <p className="text-lg leading-relaxed">
              Our mission is to empower businesses with technology that fosters
              growth, collaboration, and success in today’s competitive market.
            </p>

            <button className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-lg text-white shadow hover:scale-105 transition">
              <Link to="/about-company">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
