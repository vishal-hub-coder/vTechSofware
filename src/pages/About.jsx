import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

import {
  FaChevronDown,
  FaIndustry,
  FaSolarPanel,
  FaBuilding,
  FaPills,
  FaWarehouse,
  FaCouch,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaLightbulb,
  FaRocket,
  FaGem,
  FaFire,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import SEO from "../layout/SEO";

/* =========================================================
   INDUSTRIES
========================================================= */

const industriesData = [
  {
    title: "Elevators",
    icon: <FaBuilding />,
    img: elevatorImg,
    description:
      "Advanced vertical transportation solutions engineered for safety, efficiency, and seamless mobility.",
    features: [
      "Safety First Design",
      "Energy Efficient",
      "Smart Control Systems",
      "24/7 Maintenance Support",
    ],
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
  },
  {
    title: "Escalators",
    icon: <FaCogs />,
    img: esclarator,
    description:
      "Modern escalator systems combining functionality, safety, and aesthetic excellence.",
    features: [
      "Smooth Passenger Flow",
      "Low Maintenance",
      "Energy Saving Mode",
      "Custom Designs",
    ],
    gradient: "from-cyan-500 via-blue-600 to-indigo-600",
  },
  {
    title: "Counter & Design",
    icon: <FaCouch />,
    img: counter,
    description:
      "Premium custom counter manufacturing with innovative designs and superior craftsmanship.",
    features: [
      "Custom Designs",
      "Premium Materials",
      "Structural Excellence",
      "Turnkey Solutions",
    ],
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
  },
  {
    title: "Textile Manufacturing",
    icon: <FaIndustry />,
    img: textile,
    description:
      "State-of-the-art textile production with advanced machinery and skilled craftsmanship.",
    features: [
      "Quality Fabrics",
      "Various Weaves",
      "Dyeing & Printing",
      "Client Specifications",
    ],
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
  },
  {
    title: "Solar Management",
    icon: <FaSolarPanel />,
    img: solar,
    description:
      "Intelligent solar energy management with real-time monitoring and optimization.",
    features: [
      "Remote Monitoring",
      "Smart Analytics",
      "Load Balancing",
      "Cost Optimization",
    ],
    gradient: "from-yellow-500 via-orange-500 to-red-500",
  },
  {
    title: "Ayurvedic Medicine",
    icon: <FaPills />,
    img: aayurvedic,
    description:
      "Traditional Ayurvedic formulations manufactured with cutting-edge technology.",
    features: [
      "Herbal Excellence",
      "Quality Testing",
      "GMP Certified",
      "Traditional Wisdom",
    ],
    gradient: "from-orange-500 via-red-500 to-pink-600",
  },
  {
    title: "Real Estate",
    icon: <FaBuilding />,
    img: realSttae,
    description:
      "Premium commercial spaces designed for modern business requirements.",
    features: [
      "Strategic Locations",
      "Scalable Layouts",
      "Modern Infrastructure",
      "Business Ready",
    ],
    gradient: "from-rose-500 via-pink-600 to-purple-600",
  },
  {
    title: "Pharmacy Management",
    icon: <FaShieldAlt />,
    img: far,
    description:
      "Comprehensive pharmacy operations management with regulatory compliance.",
    features: [
      "Regulatory Compliance",
      "Audit Trails",
      "Inventory Control",
      "Reporting Tools",
    ],
    gradient: "from-purple-600 via-indigo-600 to-blue-600",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Clients Worldwide",
    icon: <FaUsers />,
  },
  {
    number: 15,
    suffix: "+",
    label: "Years Experience",
    icon: <FaAward />,
  },
  {
    number: 99,
    suffix: "%",
    label: "Customer Satisfaction",
    icon: <FaStar />,
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support Available",
    icon: <FaShieldAlt />,
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const reasons = [
  {
    title: "Process Automation",
    description:
      "Streamline operations with intelligent workflow automation that saves time and reduces manual errors.",
    icon: <FaCogs />,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Leverage powerful analytics to make informed decisions and predict market trends.",
    icon: <FaChartLine />,
    gradient: "from-emerald-500 to-green-400",
  },
  {
    title: "Enhanced Collaboration",
    description:
      "Break down silos with unified communication across all departments and stakeholders.",
    icon: <FaUsers />,
    gradient: "from-purple-500 to-fuchsia-400",
  },
  {
    title: "Comprehensive Solutions",
    description:
      "All-in-one platform managing finance, supply chain, HR, manufacturing, and CRM seamlessly.",
    icon: <FaWarehouse />,
    gradient: "from-orange-500 to-yellow-400",
  },
];

/* =========================================================
   FESTIVE PARTICLES
========================================================= */

const festiveParticles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 4,
  duration: Math.random() * 5 + 5,
}));

/* =========================================================
   COUNTER
========================================================= */

const Counter = ({ number, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = number / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

/* =========================================================
   ABOUT PAGE
========================================================= */

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleTile = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#faf9ff] text-gray-800 overflow-hidden">

      <SEO
        title="About Us - vTechSoftware ERP"
        description="Discover how vTechSoftware ERP transforms businesses with intelligent ERP solutions across diverse industries."
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${industory})`,
          }}
        />

        {/* Premium Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#09051c]/95 via-[#171044]/90 to-[#09051c]/95" />

        {/* Blue Glow */}
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/25 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple Glow */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/25 blur-[140px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Diwali Gold Glow */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-amber-400/10 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        {/* =================================================
            FESTIVE PARTICLES
        ================================================= */}

        <div className="absolute inset-0 pointer-events-none">

          {festiveParticles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-amber-300"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 12px rgba(251,191,36,.9)",
              }}
              animate={{
                y: [-10, -40, -10],
                opacity: [0.15, 0.9, 0.15],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

        </div>

        {/* =================================================
            FLOATING DIYA STYLE ELEMENTS
        ================================================= */}

        <motion.div
          className="absolute top-24 left-[8%] hidden lg:block"
          animate={{
            y: [0, -12, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-5 h-8 rounded-full bg-orange-400 blur-md" />
            <div className="w-14 h-7 rounded-b-full bg-gradient-to-r from-amber-500 to-orange-600 shadow-[0_0_25px_rgba(245,158,11,.7)]" />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-28 right-[8%] hidden lg:block"
          animate={{
            y: [0, 12, 0],
            rotate: [3, -3, 3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
        >
          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-5 h-8 rounded-full bg-yellow-400 blur-md" />
            <div className="w-14 h-7 rounded-b-full bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_0_25px_rgba(245,158,11,.7)]" />
          </div>
        </motion.div>

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-7"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-300/30 bg-amber-300/10 backdrop-blur-xl text-amber-200 text-sm font-semibold shadow-lg shadow-amber-500/10">
              <FaLightbulb className="text-amber-300" />
              Celebrating Innovation & Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-white"
          >
            Transforming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400">
              Businesses
            </span>
            <br />
            Empowering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
              Futures
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="max-w-3xl mx-auto mt-7 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
          >
            We build intelligent ERP solutions that simplify operations,
            connect teams, and help ambitious businesses grow faster.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >
            <Link
              to="/contact"
              className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white font-bold text-lg shadow-2xl shadow-orange-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start Your Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>

              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>

            <button className="group px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-lg hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
              <span className="flex items-center justify-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaPlay className="text-amber-300 text-sm ml-0.5" />
                </span>
                Watch Demo
              </span>
            </button>
          </motion.div>

          {/* Trust */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Trusted Solutions
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Industry Ready
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Dedicated Support
            </span>
          </motion.div>
        </div>

        {/* Bottom Fade */}

        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#faf9ff] to-transparent" />

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section
        id="stats-section"
        className="relative py-20 bg-[#faf9ff]"
      >
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.6,
                }}
                whileHover={{ y: -8 }}
                className="relative group"
              >

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl group-hover:opacity-100 opacity-0 transition-opacity" />

                <div className="relative bg-white border border-gray-100 rounded-3xl p-7 text-center shadow-sm group-hover:shadow-xl transition-all duration-300">

                  <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>

                  <div className="text-3xl md:text-4xl font-black mt-5 text-gray-900">
                    <Counter
                      number={stat.number}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="text-gray-500 mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="relative py-24 bg-gradient-to-b from-[#faf9ff] to-white">

        {/* Decorative Glow */}

        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />

        <div className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/10 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold border border-blue-100">
              <FaGem />
              OUR EXPERTISE
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              Industries We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Empower
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Powerful technology tailored to the unique requirements of
              modern businesses across multiple industries.
            </p>

            <div className="flex justify-center mt-7">
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600" />
            </div>
          </motion.div>

          {/* Industry Grid */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {industriesData.map((industry, index) => {
              const active = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.5,
                  }}
                  className="group"
                >

                  <motion.div
                    whileHover={{ y: -8 }}
                    onClick={() => toggleTile(index)}
                    className={`relative overflow-hidden rounded-3xl bg-white border cursor-pointer transition-all duration-500 ${
                      active
                        ? "border-blue-400 shadow-2xl shadow-blue-500/15"
                        : "border-gray-100 shadow-lg hover:shadow-2xl"
                    }`}
                  >

                    {/* Image */}

                    <div className="relative h-52 overflow-hidden">

                      <img
                        src={industry.img}
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Gradient */}

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-20 mix-blend-overlay`}
                      />

                      {/* Icon */}

                      <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center text-xl">
                        {industry.icon}
                      </div>

                      {/* Title */}

                      <div className="absolute bottom-4 left-5 right-5">

                        <h3 className="text-xl font-bold text-white">
                          {industry.title}
                        </h3>

                      </div>

                      {/* Arrow */}

                      <motion.div
                        animate={{
                          rotate: active ? 180 : 0,
                        }}
                        className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center"
                      >
                        <FaChevronDown className="text-white text-sm" />
                      </motion.div>

                    </div>

                    {/* Description */}

                    <div className="p-5">

                      <p
                        className={`text-sm text-gray-500 leading-relaxed ${
                          active ? "" : "line-clamp-2"
                        }`}
                      >
                        {industry.description}
                      </p>

                      <AnimatePresence initial={false}>

                        {active && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.35,
                            }}
                            className="overflow-hidden"
                          >

                            <div className="pt-5 mt-5 border-t border-gray-100 space-y-3">

                              {industry.features.map(
                                (feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-3 text-sm text-gray-700"
                                  >
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                                      <FaCheckCircle className="text-emerald-500 text-xs" />
                                    </span>

                                    {feature}
                                  </div>
                                )
                              )}

                            </div>

                          </motion.div>
                        )}

                      </AnimatePresence>

                      {!active && (
                        <div className="mt-4 text-xs font-bold text-blue-600">
                          Explore solutions →
                        </div>
                      )}

                    </div>

                  </motion.div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY / ABOUT
      ===================================================== */}

      <section className="relative py-28 bg-white overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100/50 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-amber-400/20 blur-2xl" />

              <motion.div
                whileHover={{ scale: 1.015 }}
                className="relative overflow-hidden rounded-[32px] shadow-2xl"
              >

                <img
                  src={SupportImage}
                  alt="vTechSoftware ERP Team"
                  className="w-full h-[520px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Image Badge */}

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white">

                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <FaRocket />
                    </div>

                    <div>
                      <p className="font-bold">
                        Built for Growth
                      </p>

                      <p className="text-xs text-gray-300">
                        Technology that moves businesses forward
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Floating Certificate */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="absolute -bottom-7 -right-4 md:-right-8 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center text-xl">
                    <FaAward />
                  </div>

                  <div>
                    <p className="text-xl font-black text-gray-900">
                      Excellence
                    </p>

                    <p className="text-sm text-gray-500">
                      Quality Driven
                    </p>
                  </div>

                </div>

              </motion.div>

            </motion.div>

            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-bold border border-purple-100">
                <FaFire />
                ABOUT vTECHSOFTWARE
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight text-gray-900">

                Intelligent Technology.
                <br />

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500">
                  Real Business Impact.
                </span>

              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                vTechSoftware ERP is a comprehensive business management
                platform designed to bring your entire organization together.
                From finance and HR to manufacturing, inventory and CRM,
                everything works together inside one intelligent ecosystem.
              </p>

              {/* Reasons */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                  >

                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.gradient} text-white flex items-center justify-center text-lg shadow-lg mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {reason.icon}
                    </div>

                    <h4 className="font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h4>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {reason.description}
                    </p>

                  </motion.div>
                ))}

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-9">

                <Link
                  to="/about-company"
                  className="group px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-all flex items-center gap-3"
                >
                  Explore Our Story
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-7 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-blue-400 hover:text-blue-600 transition-all"
                >
                  Talk to Our Team
                </Link>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FESTIVE CTA
      ===================================================== */}

      <section className="relative py-28 overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#12051f] via-[#25104b] to-[#0a1535]" />

        {/* Glows */}

        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        {/* Festive Dots */}

        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-300"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
              boxShadow:
                "0 0 15px rgba(251,191,36,.8)",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.6, 1.3, 0.6],
            }}
            transition={{
              duration: 2 + (i % 4),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400/10 border border-amber-300/20 text-amber-200 text-sm font-bold">
              ✨ LET'S BUILD SOMETHING GREAT
            </span>

            <h2 className="mt-7 text-4xl md:text-6xl font-black text-white leading-tight">

              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-pink-400">
                Transform
              </span>{" "}
              Your Business?

            </h2>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover how vTechSoftware ERP can simplify your operations,
              improve productivity and unlock your next stage of growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

              <Link
                to="/book-demo"
                className="group px-9 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white font-black text-lg shadow-2xl shadow-orange-500/20 hover:-translate-y-1 transition-all"
              >
                <span className="flex items-center justify-center gap-3">
                  Book a Free Demo
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/pricing"
                className="px-9 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-lg hover:bg-white/15 transition-all"
              >
                Explore Pricing
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default About;