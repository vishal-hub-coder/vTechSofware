import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUser, 
  FaBuilding, 
  FaPhone, 
  FaEnvelope, 
  FaMoneyBillWave, 
  FaIndustry, 
  FaBriefcase, 
  FaPaperPlane, 
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaHeadset,
  FaRocket,
  FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SEO from "../layout/SEO";

const sectors = [
  "Industrial Machinery and Supplies",
  "Mechanical Tools and Supplies",
  "Automotive, Parts & Spares",
  "Chemicals and Solvents",
  "Plastic and Polymers",
  "Instruments and Equipments",
  "Building and Construction",
  "Food and Beverage",
  "Cosmetics and Personal Care",
  "FMCG",
  "Fashion Accessories & Supplies",
  "Handicrafts and Decoratives",
  "Furniture & Supplies",
  "Packaging Machines and Materials",
  "Petroleum",
  "Drugs and Medical",
  "House and Office Supplies",
  "Others",
];

const industries = [
  "Elevators",
  "Escalators",
  "Counter & Design Manufacturing",
  "Solar Management",
  "Textile Manufacturing",
  "Ayurvedic Medicine Manufacturing",
  "Pharmacy Manufacturing",
  "Real Estate",
  "AC Manufacturing",
  "E-Riksha Manufacturing",
  "Hotel Management",
  "Pharma Manufacture",
  "Traders Management",
  "Customized Software Development",
];

const BookDemo = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [openSector, setOpenSector] = useState(false);
  const [openIndustry, setOpenIndustry] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !companyName || !contact || !email) {
      alert("Please fill all required fields!");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      companyName,
      budget,
      mobile: contact,
      altMobile: "",
      name,
      email,
      address: "",
      remarks: "",
      comId: "78",
    };

    try {
      const res = await axios.post(
        "https://vtechsoftwareerp/api/Lead/InsertLead",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            key: "a9f8e7d6c5b4a3f2981e7c5d4b3a2f6e",
          },
        }
      );

      if (res.data.status === "Success") {
        setIsSuccess(true);
        setName("");
        setCompanyName("");
        setContact("");
        setEmail("");
        setBudget("");
        setSelectedSector("");
        setSelectedIndustry("");
      } else {
        alert("Something went wrong with API.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "API request failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 overflow-hidden relative">
      <SEO
        title="Book Demo - vTech Software Solutions"
        description="Book a free demo of vTech ERP software"
       
      />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-5 gap-0 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4">
              ✨ Free Demo
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2"
          >
            Book Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Free Demo
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mb-8"
          >
            Experience the power of vTech ERP. Get a personalized demo from our experts.
          </motion.p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {[
              { icon: <FaRocket />, title: "Free 14-Day Trial", desc: "No credit card required" },
              { icon: <FaHeadset />, title: "Expert Support", desc: "24/7 assistance" },
              { icon: <FaStar />, title: "Customized Demo", desc: "Tailored to your needs" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-3 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <FaEnvelope className="text-green-400" />
              </div>
              <span>vtechsoftwarevishal@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <FaPhone className="text-green-400" />
              </div>
              <span>+91 9326870893</span>
            </div>
            <a 
              href="https://wa.me/919326870893"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
            >
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <FaWhatsapp className="text-green-400" />
              </div>
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-yellow-400/20 border border-yellow-400/30 rounded-xl p-4 mt-6"
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl">🏆</div>
              <div>
                <p className="text-yellow-400 font-bold">Trusted by 40+ Companies</p>
                <p className="text-gray-400 text-sm">Across various industries</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT PANEL - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center bg-white/5"
        >
          {/* Success Message */}
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center mb-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <FaCheckCircle className="text-white text-4xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300 mb-4">Your demo request has been submitted successfully.</p>
                <p className="text-green-400 font-semibold">We'll contact you within 24 hours.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Book another demo
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {!isSuccess && (
            <>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-bold text-white mb-2"
              >
                Get Your Free Demo
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 mb-8"
              >
                Fill in your details and our team will get back to you
              </motion.p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name & Company Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Company Name *</label>
                    <div className="relative">
                      <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Your Company Ltd"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Contact & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number *</label>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Budget & Dropdowns Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Budget Range</label>
                    <div className="relative">
                      <FaMoneyBillWave className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="e.g. ₹50,000 - ₹1,00,000"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </motion.div>

                  {/* Sector Dropdown */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="relative"
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Sector</label>
                    <div
                      onClick={() => setOpenSector(!openSector)}
                      className="cursor-pointer border border-white/10 rounded-xl p-3.5 bg-white/5 flex justify-between items-center hover:border-green-500/50 transition-colors"
                    >
                      <span className={selectedSector ? "text-white" : "text-gray-500"}>
                        {selectedSector || "Select Sector"}
                      </span>
                      <motion.span animate={{ rotate: openSector ? 180 : 0 }} className="text-gray-400">▼</motion.span>
                    </div>

                    <AnimatePresence>
                      {openSector && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-xl shadow-2xl border border-white/10 z-50 max-h-48 overflow-auto"
                        >
                          {sectors.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSelectedSector(item);
                                setOpenSector(false);
                              }}
                              className="px-4 py-3 hover:bg-green-500/20 cursor-pointer text-gray-300 hover:text-white transition-colors"
                            >
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Industry Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Industry</label>
                  <div
                    onClick={() => setOpenIndustry(!openIndustry)}
                    className="cursor-pointer border border-white/10 rounded-xl p-3.5 bg-white/5 flex justify-between items-center hover:border-green-500/50 transition-colors"
                  >
                    <span className={selectedIndustry ? "text-white" : "text-gray-500"}>
                      {selectedIndustry || "Select Industry"}
                    </span>
                    <motion.span animate={{ rotate: openIndustry ? 180 : 0 }} className="text-gray-400">▼</motion.span>
                  </div>

                  <AnimatePresence>
                    {openIndustry && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-xl shadow-2xl border border-white/10 z-50 max-h-48 overflow-auto"
                      >
                        {industries.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => {
                              setSelectedIndustry(item);
                              setOpenIndustry(false);
                            }}
                            className="px-4 py-3 hover:bg-green-500/20 cursor-pointer text-gray-300 hover:text-white transition-colors"
                          >
                            {item}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg shadow-2xl transition-all flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:shadow-green-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Book Free Demo
                      <FaPaperPlane />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-sm">
                  No credit card required • Takes only 2 minutes
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookDemo;
