import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardImage from "../assets/image.png";
import SEO from "../layout/SEO";
import { 
  FaUsers, 
  FaGlobe, 
  FaProjectDiagram, 
  FaAward, 
  FaArrowRight, 
  FaCheckCircle,
  FaChartLine,
  FaDatabase,
  FaShoppingCart,
  FaBox,
  FaLayerGroup,
  FaCogs,
  FaPlay,
  FaStar
} from "react-icons/fa";

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
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

const stats = [
  { number: "5,000+", label: "Happy Customers", icon: <FaUsers />, color: "from-blue-500 to-cyan-400" },
  { number: "1,200+", label: "Websites Delivered", icon: <FaGlobe />, color: "from-green-500 to-teal-400" },
  { number: "800+", label: "Projects Completed", icon: <FaProjectDiagram />, color: "from-purple-500 to-pink-400" },
  { number: "15+", label: "Years Experience", icon: <FaAward />, color: "from-orange-500 to-red-400" },
];

const features = [
  {
    title: "LMS Dashboard",
    desc: "Manage learning content, track employee progress, and analyze training effectiveness with comprehensive analytics.",
    icon: <FaLayerGroup />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Service Dashboard",
    desc: "Deliver exceptional services with real-time tracking, SLA management, and customer satisfaction metrics.",
    icon: <FaCogs />,
    color: "from-green-500 to-teal-400"
  },
  {
    title: "Inventory Dashboard",
    desc: "Monitor stock levels across warehouses, optimize reorder points, and streamline supply chain operations.",
    icon: <FaBox />,
    color: "from-purple-500 to-pink-400"
  },
  {
    title: "Orders Dashboard",
    desc: "Process orders efficiently with automated billing, payment tracking, and delivery management.",
    icon: <FaShoppingCart />,
    color: "from-orange-500 to-red-400"
  },
  {
    title: "Project Dashboard",
    desc: "Collaborate seamlessly with task management, timeline tracking, and resource allocation tools.",
    icon: <FaProjectDiagram />,
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "Production Dashboard",
    desc: "Optimize manufacturing with production planning, quality control, and performance analytics.",
    icon: <FaChartLine />,
    color: "from-cyan-500 to-blue-400"
  },
];

const CustomerPage = () => {
  const text = "Transforming Customer Connections, One Click at a Time.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="w-full overflow-hidden">
      <SEO
        title="Customers - SAPEAGLE ERP"
        description="Discover why thousands of businesses trust SAPEAGLE ERP for their digital transformation."
        canonical="https://sapeagleerp.com/customers"
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-4 sm:px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium border border-white/20">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            {displayText}
            <motion.span 
              className="inline-block w-1 h-12 md:h-16 bg-cyan-400 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Irresistible Features Tailored for Business Excellence
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
              <Link to="/book-demo">Get Started</Link>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/30 flex items-center justify-center gap-2">
              <FaPlay className="text-cyan-400" />
              <span>Watch Demo</span>
            </button>
          </motion.div>
        </motion.div>

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
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative -mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 text-white text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2">
                  {stat.number}
                </h2>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              OUR PARTNERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Trusted By Leading Companies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of industry leaders who rely on our solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 object-contain mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-gray-600 font-semibold text-xs sm:text-sm text-center">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              POWERFUL FEATURES
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                Succeed
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive dashboards designed to streamline your operations and boost productivity
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Main Feature */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src={DashboardImage}
                  alt="Company Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaAward className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">#1 ERP</p>
                    <p className="text-gray-500 text-sm">in India</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                Enterprise Resource{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                  Planning
                </span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                A comprehensive business management software that automates and integrates core business processes. Think of it as a central hub connecting various departments and functions within your company.
              </p>
              
              <div className="space-y-3">
                {[
                  "Seamless Department Integration",
                  "Real-time Data Synchronization",
                  "Scalable Architecture",
                  "Advanced Analytics & Reporting"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                <Link to="/erp-feature-section">Explore ERP</Link>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl mb-4 text-white text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have revolutionized their operations with SAPEAGLE ERP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Link to="/book-demo">Book a Free Demo</Link>
            </button>
            <button className="bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              <Link to="/contact">Contact Sales</Link>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CustomerPage;
