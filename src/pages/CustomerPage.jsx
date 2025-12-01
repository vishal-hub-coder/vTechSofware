import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DashboardImage from "../assets/image.png";
import SEO from "../layout/SEO";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

const CustomerPage = () => {
  const text = "Transforming Customer Connections, One Click at a Time.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, 100);

    if (index === text.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <div className="w-full overflow-hidden">
          <SEO
        title="Home Page - SAPEAGLE ERP"
        
        description="Welcome to SAPEAGLE ERP — India's #1 ERP, CRM, HRMS, Accounting & Inventory Management Software."
        canonical="https://sapeagleerp.com/"
      />
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-4 sm:px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-snug">
            {displayText}
            <span className="border-r-2 border-white ml-1 animate-pulse" />
          </h1>
          <p className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto">
            Irresistible Features Tailored for Excellence
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { number: "5,000+", label: "Happy Customers" },
            { number: "1,200+", label: "Websites Delivered" },
            { number: "800+", label: "Projects Completed" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-2">
                {stat.number}
              </h2>
              <p className="text-gray-700 font-semibold text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Trusted By Leading Companies
        </h2>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-10 object-contain mb-2"
              />
              <p className="text-gray-700 font-semibold text-xs sm:text-sm text-center">
                {company.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Features of Our Projects
          </h2>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16"
          >
            <div className="flex justify-center">
              <img
                src={DashboardImage}
                alt="Company Dashboard"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 w-full max-w-sm sm:max-w-md"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                ERP (Enterprise Resource Planning)
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                A business management software that automates and integrates
                core business processes. Think of it as a central hub connecting
                various departments and functions within a company.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                title: "LMS Dashboard",
                desc: "Manage learning content, progress, and analytics with ease.",
              },
              {
                title: "Service Dashboard",
                desc: "Track and deliver services with real-time insights.",
              },
              {
                title: "Inventory Dashboard",
                desc: "Monitor stock, suppliers, and distribution efficiently.",
              },
              {
                title: "Orders Dashboard",
                desc: "Handle customer orders, billing, and tracking seamlessly.",
              },
              {
                title: "Project Dashboard",
                desc: "Collaborate on projects, timelines, and deliverables.",
              },
              {
                title: "Production Dashboard",
                desc: "Control production lines and output performance.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerPage;
