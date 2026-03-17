import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaCogs,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaMobileAlt,
  FaArrowRight,
  FaShieldAlt,
  FaHandshake,
  FaRocket,
  FaBrain,
} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import SEO from "../layout/SEO";

const services = [
  {
    icon: <FaUsers />,
    title: "CRM",
    link: "/crm-feature-section",
    description:
      "Transform customer relationships with intelligent insights, automated workflows, and personalized engagement strategies that drive loyalty and growth.",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
  },
  {
    icon: <FaCogs />,
    title: "ERP",
    link: "/erp-feature-section",
    description:
      "Unified business management solution integrating all core functions - finance, HR, supply chain, and operations into a single powerful platform.",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-500",
  },
  {
    icon: <FaChartLine />,
    title: "Sales Management",
    link: "/sales-management",
    description:
      "Accelerate revenue growth with advanced pipeline management, predictive analytics, and automated sales workflows that convert more leads.",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-500",
  },
  {
    icon: <FaDatabase />,
    title: "Payroll Management",
    link: "/payroll-management",
    description:
      "Streamline compensation processing with accurate calculations, tax compliance, and seamless employee payment management.",
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-500",
  },
  {
    icon: <AiFillAppstore />,
    title: "Services Management",
    link: "/services-mnagement",
    description:
      "Deliver exceptional service experiences with ticketing systems, SLA tracking, and comprehensive service delivery management.",
    color: "from-red-500 to-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconBg: "bg-red-500",
  },
  {
    icon: <FaCloud />,
    title: "AMC Management",
    link: "/cloud-solutions",
    description:
      "Ensure optimal asset performance with preventive maintenance scheduling, warranty tracking, and automated service reminders.",
    color: "from-cyan-500 to-cyan-700",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    iconBg: "bg-cyan-500",
  },
  {
    icon: <FaRobot />,
    title: "Inventory Management",
    link: "/inventory-management",
    description:
      "Optimize stock levels with real-time tracking, demand forecasting, and automated reordering to minimize costs and maximize efficiency.",
    color: "from-pink-500 to-pink-700",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    iconBg: "bg-pink-500",
  },
  {
    icon: <FaMobileAlt />,
    title: "Accounting Management",
    link: "/account-management",
    description:
      "Master financial operations with automated bookkeeping, real-time reporting, and comprehensive audit trails for complete visibility.",
    color: "from-indigo-500 to-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    iconBg: "bg-indigo-500",
  },
];

const features = [
  { icon: <FaRocket />, text: "Fast Implementation" },
  { icon: <FaShieldAlt />, text: "Bank-Grade Security" },
  { icon: <FaHandshake />, text: "24/7 Support" },
  { icon: <FaBrain />, text: "AI-Powered Insights" },
];

const Serverices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <SEO
        title="Services - SAPEAGLE ERP"
        description="Explore SAPEAGLE ERP's comprehensive services including CRM, ERP, Sales, Payroll, Inventory, and more."
        canonical="https://sapeagleerp.com/services"
      />

      {/* Hero Section */}
      <motion.section
        className="relative py-24 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
              Comprehensive Solutions
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Services
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover powerful tools designed to streamline your operations, boost productivity, and drive business growth.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white"
              >
                <span className="text-cyan-300">{feature.icon}</span>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Powerful Modules for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"> Every Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Eight comprehensive modules that work seamlessly together to transform your business operations.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={service.link}>
                  <motion.div
                    className={`group h-full ${service.bgColor} border ${service.borderColor} rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden`}
                    whileHover={{ y: -8 }}
                  >
                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {service.icon}
                      </div>

                      {/* Content */}
                      <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 text-gray-700 group-hover:text-white font-semibold">
                        <span>Learn More</span>
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${service.color} opacity-20 rounded-full blur-2xl`} />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already leveraging SAPEAGLE ERP for streamlined operations and exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <Link to="/book-demo">Get Started Free</Link>
                </button>
                <button className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white/10">
                  <Link to="/contact">Talk to Expert</Link>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Serverices;
