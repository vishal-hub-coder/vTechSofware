import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Image1 from "../assets/hero-img.png";
import BgImage from "../assets/herosection.png";
import SEO from "../layout/SEO";

const HeroSection = () => {
  const [showChat, setShowChat] = useState(false);

  const text = "Empower Your Business with Expert Freelance Talent";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (index < text.length) {
      interval = setInterval(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [index, text]);

  // Floating particles data
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/25 to-pink-500/25 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45"
          animate={{ rotate: [45, 405], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-20 border border-purple-500/20 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 border border-blue-500/20"
          animate={{ rotate: [0, -180], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Text Content */}
        <motion.div
          className="space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-200">
              Top Rated Freelancing Platform
            </span>
          </motion.div>

          {/* Main Heading with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="border-r-2 border-blue-400 animate-pulse ml-1" />
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Connect with skilled freelancers worldwide. Get your projects done
            faster, cheaper, and with professional quality. From web development
            to graphic design, find the perfect talent for your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Find Freelancers
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Post a Project
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 justify-center md:justify-start pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              { number: "10K+", label: "Freelancers" },
              { number: "5K+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            {/* Glow Effect Behind Image */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />

            {/* Main Image */}
            <motion.img
              src={Image1}
              alt="vTechSoftware ERP - Hero"
              className="relative z-10 max-w-xs md:max-w-md lg:max-w-lg drop-shadow-2xl"
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-6 -left-4 md:-left-8 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Top Rated
                  </div>
                  <div className="text-xs text-gray-400">Verified Freelancers</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute -top-4 -right-4 md:-right-8 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* SEO Component */}
      <SEO
        title="Home Page - vTechSoftware Freelancing"
        description="Connect with top-rated freelancers for your business projects. Find expert developers, designers, marketers and more on our freelancing platform."
        canonical="https://vtechsoftwareerp/"
      />
    </section>
  );
};

export default HeroSection;
