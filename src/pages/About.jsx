import React, { useState, useEffect } from "react";
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

import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaChevronDown, FaIndustry, FaSolarPanel, FaBuilding, FaPills, FaWarehouse, FaCouch, FaCogs, FaChartLine, FaShieldAlt, FaAward, FaUsers, FaCheckCircle, FaArrowRight, FaPlay, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../layout/SEO";

const industriesData = [
  {
    title: "Elevators",
    icon: <FaBuilding />,
    img: elevatorImg,
    description: "Advanced vertical transportation solutions engineered for safety, efficiency, and seamless mobility.",
    features: ["Safety First Design", "Energy Efficient", "Smart Control Systems", "24/7 Maintenance Support"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Escalators",
    icon: <FaCogs />,
    img: esclarator,
    description: "Modern escalator systems combining functionality, safety, and aesthetic excellence.",
    features: ["Smooth Passenger Flow", "Low Maintenance", "Energy Saving Mode", "Custom Designs"],
    color: "from-cyan-500 to-teal-400"
  },
  {
    title: "Counter & Design",
    icon: <FaCouch />,
    img: counter,
    description: "Premium custom counter manufacturing with innovative designs and superior craftsmanship.",
    features: ["Custom Designs", "Premium Materials", "Structural Excellence", "Turnkey Solutions"],
    color: "from-teal-500 to-green-400"
  },
  {
    title: "Textile Manufacturing",
    icon: <FaIndustry />,
    img: textile,
    description: "State-of-the-art textile production with advanced machinery and skilled craftsmanship.",
    features: ["Quality Fabrics", "Various Weaves", "Dyeing & Printing", "Client Specifications"],
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Solar Management",
    icon: <FaSolarPanel />,
    img: solar,
    description: "Intelligent solar energy management with real-time monitoring and optimization.",
    features: ["Remote Monitoring", "Smart Analytics", "Load Balancing", "Cost Optimization"],
    color: "from-yellow-500 to-orange-400"
  },
  {
    title: "Ayurvedic Medicine",
    icon: <FaPills />,
    img: aayurvedic,
    description: "Traditional Ayurvedic formulations manufactured with cutting-edge technology.",
    features: ["Herbal Excellence", "Quality Testing", "GMP Certified", "Traditional Wisdom"],
    color: "from-orange-500 to-red-400"
  },
  {
    title: "Real Estate",
    icon: <FaBuilding />,
    img: realSttae,
    description: "Premium commercial spaces designed for modern business requirements.",
    features: ["Strategic Locations", "Scalable Layouts", "Modern Infrastructure", "Business Ready"],
    color: "from-red-500 to-pink-400"
  },
  {
    title: "Pharmacy Management",
    icon: <FaShieldAlt />,
    img: far,
    description: "Comprehensive pharmacy operations management with regulatory compliance.",
    features: ["Regulatory Compliance", "Audit Trails", "Inventory Control", "Reporting Tools"],
    color: "from-pink-500 to-purple-400"
  },
];

const stats = [
  { number: "500+", label: "Clients Worldwide", icon: <FaUsers /> },
  { number: "15+", label: "Years Experience", icon: <FaAward /> },
  { number: "99%", label: "Customer Satisfaction", icon: <FaStar /> },
  { number: "24/7", label: "Support Available", icon: <FaShieldAlt /> },
];

const reasons = [
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent workflow automation that saves time and reduces manual errors.",
    icon: <FaCogs />,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Data-Driven Insights",
    description: "Leverage powerful analytics to make informed decisions and predict market trends.",
    icon: <FaChartLine />,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Enhanced Collaboration",
    description: "Break down silos with unified communication across all departments and stakeholders.",
    icon: <FaUsers />,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Comprehensive Solutions",
    description: "All-in-one platform managing finance, supply chain, HR, manufacturing, and CRM seamlessly.",
    icon: <FaWarehouse />,
    color: "bg-orange-100 text-orange-600"
  },
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [statsCounted, setStatsCounted] = useState(false);

  const toggleTile = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Counter animation effect
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('stats-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !statsCounted) {
          setStatsCounted(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsCounted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="About Us - vTechSoftware ERP"
        description="Discover how vTechSoftware ERP transforms businesses with integrated solutions for finance, HR, manufacturing, and more."
        
      />

      {/* Hero Section */}
      <motion.div 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${industory})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-indigo-900/90" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-white/20">
              Pioneering Excellence Since 2009
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transforming Businesses,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Empowering Futures
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            We deliver cutting-edge ERP solutions that streamline operations, enhance productivity, and drive growth across diverse industries.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
              <Link to="/contact">Get Started</Link>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
              <FaPlay className="text-cyan-400" />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/80 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl mb-4 text-white text-2xl">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {statsCounted ? stat.number : "0"}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering specialized solutions across diverse sectors with innovation and excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <motion.div 
                  className={`relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    activeIndex === index ? 'ring-2 ring-blue-400' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => toggleTile(index)}
                >
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${industry.color} text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                          {industry.icon}
                        </div>
                        <h3 className="text-xl font-bold">{industry.title}</h3>
                      </div>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <FaChevronDown className="text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <AnimatePresence>
                    {activeIndex === index ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6">
                          <img
                            src={industry.img}
                            alt={industry.title}
                            className="w-full h-40 object-cover rounded-xl mb-4"
                          />
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {industry.description}
                          </p>
                          <div className="space-y-2">
                            {industry.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-gray-700">
                                <FaCheckCircle className="text-green-500 text-sm" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-6 py-4"
                      >
                        <p className="text-gray-600 line-clamp-2">
                          {industry.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img
                    src={SupportImage}
                    alt="vTechSoftware ERP Team"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
                
                {/* Floating Card */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                      <FaAward className="text-green-600 text-2xl" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">ISO 9001</p>
                      <p className="text-gray-500 text-sm">Certified Company</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 -left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-10 -right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                  ABOUT US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Empowering Businesses with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Intelligent Solutions
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  vTechSoftware ERP is a comprehensive solution that helps businesses streamline operations, improve efficiency, and make smarter decisions. It integrates all key business functions into a single, unified platform.
                </p>
              </div>

              {/* Reasons Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className={`w-12 h-12 ${reason.color} rounded-xl flex items-center justify-center text-xl mb-3`}>
                      {reason.icon}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{reason.title}</h4>
                    <p className="text-sm text-gray-600">{reason.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                  <Link to="/about-company">Learn More</Link>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-200 hover:border-blue-400 text-gray-700 hover:text-blue-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
                  <Link to="/contact">Contact Us</Link>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses already leveraging vTechSoftware ERP for streamlined operations and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Link to="/book-demo">Book a Free Demo</Link>
              </button>
              <button className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                <Link to="/pricing">View Pricing</Link>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
