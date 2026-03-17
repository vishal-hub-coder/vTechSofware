import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaGlobe, FaUser, FaBars, FaTimes, FaChevronDown, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaYoutube, FaAngleRight, FaRocket, FaChartPie, FaCogs, FaBoxes, FaShoppingCart, FaProjectDiagram, FaUsers, FaFileInvoice, FaWarehouse, FaLaptopCode, FaCloud } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/vTechSoftware.png";
import searchItems from "../data/searchItems";

const NavigationSection = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industories" },
    { 
      name: "Features", 
      path: "/explore-our-services",
      dropdown: [
        { name: "CRM", path: "/crm-feature-section", icon: <FaUsers />, desc: "Customer Management" },
        { name: "ERP", path: "/erp-feature-section", icon: <FaChartPie />, desc: "Enterprise Planning" },
        { name: "Sales Management", path: "/sales-management", icon: <FaShoppingCart />, desc: "Sales & Orders" },
        { name: "Payroll Management", path: "/payroll-management", icon: <FaFileInvoice />, desc: "Salary & HR" },
        { name: "Inventory", path: "/inventory-management", icon: <FaWarehouse />, desc: "Stock Management" },
        { name: "Accounting", path: "/account-management", icon: <FaBoxes />, desc: "Finance & GST" },
        { name: "AMC Management", path: "/cloud-solutions", icon: <FaCogs />, desc: "Asset Maintenance" },
        { name: "Manufacturing", path: "/manufacturing", icon: <FaProjectDiagram />, desc: "Production Planning" },
      ]
    },
    { name: "Pricing", path: "/pricing" },
    { name: "Customers", path: "/customers" },
    { name: "Support", path: "/support" },
  ];

  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.length > 0) {
      const filtered = searchItems.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (path) => {
    setShowSearch(false);
    setQuery("");
    setResults([]);
    navigate(path);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-sm py-3 hidden lg:block relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-blue-400 text-xs" />
                </div>
                <span className="font-medium">+91 9326870893</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-purple-400 text-xs" />
                </div>
                <span className="font-medium">vtechsoftwarevishal@gmail.com</span>
              </motion.span>
            </div>
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="text-blue-400 hover:text-blue-300 transition"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="text-pink-400 hover:text-pink-300 transition"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="text-blue-600 hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="text-sky-400 hover:text-sky-300 transition"
              >
                <FaTwitter />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -2 }}
                href="#" 
                className="text-red-500 hover:text-red-400 transition"
              >
                <FaYoutube />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100" 
            : "bg-white shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">

            {/* LOGO */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center">
                <div className="relative">
                  <img src={logo} alt="vTech Logo" className="h-20 w-auto" />
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* DESKTOP LINKS */}
            <div className="hidden xl:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  {link.dropdown ? (
                    <motion.button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      onMouseEnter={() => setActiveDropdown(index)}
                      className="group px-5 py-3 text-gray-700 font-bold text-base hover:text-blue-600 transition-all flex items-center gap-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="text-xs" />
                      </motion.span>
                    </motion.button>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={link.path}
                        className="px-5 py-3 text-gray-700 font-bold text-base hover:text-blue-600 transition-all rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )}

                  {/* Mega Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onMouseLeave={() => setActiveDropdown(null)}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px]"
                      >
                        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                            <h3 className="text-white font-bold text-lg flex items-center gap-2">
                              <FaRocket /> Explore Our Features
                            </h3>
                            <p className="text-blue-100 text-sm">Comprehensive solutions for your business</p>
                          </div>
                          
                          {/* Grid */}
                          <div className="p-4 grid grid-cols-2 gap-3">
                            {link.dropdown.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <Link
                                  to={item.path}
                                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all group"
                                >
                                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                      {item.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                  </div>
                                  <FaAngleRight className="ml-auto text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-3">

              {/* SEARCH BUTTON */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSearch(true)}
                className="p-3.5 hover:bg-gray-100 rounded-full transition flex items-center justify-center bg-gray-50"
              >
                <FaSearch className="text-gray-700" />
              </motion.button>

              {/* MAP ICON */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowMap(true)}
                className="p-3.5 hover:bg-gray-100 rounded-full transition hidden sm:flex items-center justify-center bg-gray-50"
              >
                <FaMapMarkerAlt className="text-gray-700" />
              </motion.button>

              {/* LOGIN */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:block"
              >
                <a
                  href="/login"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 text-gray-700 font-bold hover:text-blue-600 transition rounded-xl hover:bg-gray-100 border border-gray-200"
                >
                  <FaUser className="mr-2" /> Login
                </a>
              </motion.div>

              {/* BOOK DEMO */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:block bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-400 hover:via-green-500 hover:to-emerald-500 text-white px-8 py-3.5 rounded-2xl font-bold shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Link to="/book-demo-section">Book Demo</Link>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </motion.button>

              {/* MOBILE MENU ICON */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="xl:hidden p-3.5 hover:bg-gray-100 rounded-full transition bg-gray-50"
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9997]"
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-full max-w-md h-full bg-white shadow-2xl z-[9998] overflow-y-auto"
              >
                {/* Mobile Menu Header */}
                <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8">
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6">
                      <img src={logo} alt="vTech Logo" className="h-14" />
                      <button
                        onClick={() => setMenuOpen(false)}
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <h2 className="text-white font-bold text-2xl">vTech Software Solutions</h2>
                    <p className="text-white/70 mt-1">Your Trusted ERP Partner</p>
                    
                    {/* Quick Stats */}
                    <div className="flex gap-4 mt-6">
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <p className="text-2xl font-bold text-white">5000+</p>
                        <p className="text-xs text-white/70">Customers</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <p className="text-2xl font-bold text-white">15+</p>
                        <p className="text-xs text-white/70">Years</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <p className="text-2xl font-bold text-white">24/7</p>
                        <p className="text-xs text-white/70">Support</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Links */}
                <div className="p-4">
                  {navLinks.map((link, index) => (
                    <div key={index}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                            className="w-full flex items-center justify-between px-5 py-4 text-gray-700 font-bold text-lg border-b border-gray-100 hover:bg-gray-50 transition"
                          >
                            <span>{link.name}</span>
                            <motion.span
                              animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-gray-400"
                            >
                              <FaChevronDown />
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="bg-gradient-to-b from-gray-50 to-white overflow-hidden"
                              >
                                {link.dropdown.map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-4 px-8 py-3.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                  >
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                      {item.icon}
                                    </div>
                                    <div>
                                      <p className="font-semibold">{item.name}</p>
                                      <p className="text-xs text-gray-400">{item.desc}</p>
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center px-5 py-4 text-gray-700 font-bold text-lg border-b border-gray-100 hover:bg-gray-50 transition"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile CTA */}
                  <div className="mt-6 space-y-3">
                    <Link
                      to="/login"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center gap-2 px-5 py-4 text-lg font-bold border-2 border-gray-200 text-gray-700 rounded-2xl hover:border-blue-500 hover:text-blue-600 transition"
                    >
                      <FaUser /> Login
                    </Link>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/book-demo-section"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center gap-2 px-5 py-4 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-lg"
                      >
                        Book Free Demo
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* =================== FULL WIDTH SEARCH OVERLAY =================== */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center pt-32"
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl"
              onClick={() => setShowSearch(false)}
            ></div>

            {/* Search box */}
            <motion.div
              initial={{ y: -100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -100, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-3xl mx-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Search Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                  <div className="flex items-center gap-4">
                    <FaSearch className="text-white text-xl" />
                    <input
                      ref={searchRef}
                      type="text"
                      value={query}
                      onChange={handleSearch}
                      placeholder="Search features, pages, modules..."
                      className="flex-1 bg-transparent text-white placeholder-white/70 text-lg outline-none"
                    />
                    <button
                      onClick={() => setShowSearch(false)}
                      className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium transition"
                    >
                      ESC
                    </button>
                  </div>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto p-4">
                  {results.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 px-2 mb-3">Search Results</p>
                      {results.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => handleSelect(item.path)}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 group transition"
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                              <FaLaptopCode />
                            </div>
                            <div className="flex-1">
                              <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.name}</p>
                            </div>
                            <FaAngleRight className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {query && results.length === 0 && (
                    <div className="p-12 text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaSearch className="text-gray-400 text-3xl" />
                      </div>
                      <p className="text-gray-500 text-lg">No results found for "{query}"</p>
                      <p className="text-gray-400 text-sm mt-1">Try different keywords</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================== MAP OVERLAY =================== */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
              onClick={() => setShowMap(false)}
            ></div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-6 right-6 z-20 px-6 py-3 bg-white rounded-2xl font-bold shadow-lg hover:bg-gray-50 transition flex items-center gap-2"
              >
                <FaTimes /> Close
              </button>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902988654204!2d90.398197!3d23.780887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c38b4e1f27%3A0xa4e2a22712345678!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded-3xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationSection;
