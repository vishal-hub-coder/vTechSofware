
import React, { useEffect, useState } from "react";
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
  FaShoppingCart,
  FaBox,
  FaLayerGroup,
  FaCogs,
  FaPlay,
  FaStar,
  FaRocket,
  FaShieldAlt,
  FaBolt,
  FaDatabase,
  FaIndustry,
} from "react-icons/fa";

/* =========================================================
   DATA
========================================================= */

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
  {
    number: "5,000+",
    label: "Happy Customers",
    icon: <FaUsers />,
    gradient: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20",
  },
  {
    number: "1,200+",
    label: "Websites Delivered",
    icon: <FaGlobe />,
    gradient: "from-emerald-500 to-teal-400",
    shadow: "shadow-emerald-500/20",
  },
  {
    number: "800+",
    label: "Projects Completed",
    icon: <FaProjectDiagram />,
    gradient: "from-violet-500 to-fuchsia-500",
    shadow: "shadow-violet-500/20",
  },
  {
    number: "15+",
    label: "Years Experience",
    icon: <FaAward />,
    gradient: "from-orange-500 to-rose-500",
    shadow: "shadow-orange-500/20",
  },
];

const features = [
  {
    title: "LMS Dashboard",
    desc: "Manage learning content, track employee progress and analyze training performance from one powerful dashboard.",
    icon: <FaLayerGroup />,
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },
  {
    title: "Service Dashboard",
    desc: "Deliver exceptional services with real-time tracking, SLA management and customer satisfaction analytics.",
    icon: <FaCogs />,
    gradient: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
  },
  {
    title: "Inventory Dashboard",
    desc: "Monitor stock levels, warehouses, reorder points and supply chain operations in real time.",
    icon: <FaBox />,
    gradient: "from-violet-500 to-fuchsia-500",
    bg: "bg-violet-50",
  },
  {
    title: "Orders Dashboard",
    desc: "Process orders faster with automated billing, payment tracking and delivery management.",
    icon: <FaShoppingCart />,
    gradient: "from-orange-500 to-rose-500",
    bg: "bg-orange-50",
  },
  {
    title: "Project Dashboard",
    desc: "Collaborate with powerful task management, project timelines and resource allocation tools.",
    icon: <FaProjectDiagram />,
    gradient: "from-indigo-500 to-purple-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Production Dashboard",
    desc: "Optimize manufacturing with production planning, quality control and advanced analytics.",
    icon: <FaChartLine />,
    gradient: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
  },
];

const benefits = [
  {
    icon: <FaBolt />,
    title: "Lightning Fast",
    text: "Optimized workflows help your teams work faster and smarter.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure & Reliable",
    text: "Enterprise-grade security keeps your business data protected.",
  },
  {
    icon: <FaDatabase />,
    title: "Centralized Data",
    text: "Bring departments, operations and reports together in one place.",
  },
];

/* =========================================================
   CUSTOMER PAGE
========================================================= */

const CustomerPage = () => {
  const text = "Transforming Customer Connections, One Click at a Time.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 55);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="w-full overflow-hidden bg-white text-gray-900">
      <SEO
        title="Customers - vTechSoftware ERP"
        description="Discover why thousands of businesses trust vTechSoftware ERP for their digital transformation."
        canonical="https://vtechsoftwareerp/customers"
      />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=85')",
          }}
        />

        {/* Dark Premium Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-indigo-900/80 to-purple-950/90" />

        {/* Animated Glow 1 */}
        <motion.div
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Glow 2 */}
        <motion.div
          className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-purple-500/25 blur-[130px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Circles */}
        <motion.div
          className="absolute top-24 right-[12%] h-4 w-4 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/50"
          animate={{ y: [0, -25, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-32 left-[12%] h-3 w-3 rounded-full bg-purple-300"
          animate={{ y: [0, 20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto max-w-6xl px-5 py-28 text-center sm:px-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 shadow-xl backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>
            Trusted by Industry Leaders
          </motion.div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {displayText}
            <motion.span
              className="ml-1 inline-block h-10 w-1 rounded-full bg-cyan-400 align-middle shadow-lg shadow-cyan-400/50 sm:h-12 md:h-16"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </h1>

          {/* Gradient Sub Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-relaxed text-blue-100 sm:text-xl md:text-2xl"
          >
            Irresistible features, intelligent workflows and powerful
            dashboards built for modern business excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/book-demo"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 sm:text-lg"
            >
              Get Started
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <FaPlay className="ml-0.5 text-sm text-cyan-300" />
              </span>
              Watch Demo
            </button>
          </motion.div>

          {/* Trust Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-blue-100/70"
          >
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              No credit card required
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Free consultation
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Enterprise ready
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-7 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2">
            <motion.div
              className="h-2.5 w-1 rounded-full bg-white/80"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          STATS SECTION
      ===================================================== */}

      <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="-mt-28 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/80 bg-white p-5 text-center shadow-xl shadow-slate-200/70 transition-all duration-300 hover:shadow-2xl sm:p-7"
              >
                {/* Top Gradient */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                />

                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} text-xl text-white shadow-lg ${stat.shadow} transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:text-2xl`}
                >
                  {stat.icon}
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-800 sm:text-4xl">
                  {stat.number}
                </h2>

                <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUSTED COMPANIES
      ===================================================== */}

      <section className="border-y border-slate-100 bg-slate-50/70 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold tracking-wider text-blue-600">
              <FaStar />
              OUR TRUSTED NETWORK
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl md:text-5xl">
              Trusted By{" "}
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Leading Companies
              </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              Join hundreds of businesses that rely on modern technology and
              intelligent digital solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -7, scale: 1.03 }}
                className="group flex min-h-[130px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
              >
                <div className="flex h-14 w-full items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    loading="lazy"
                    className="max-h-10 max-w-[110px] object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>

                <p className="mt-4 text-xs font-bold text-slate-400 transition-colors group-hover:text-blue-600 sm:text-sm">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold tracking-wider text-emerald-600">
              WHY BUSINESSES CHOOSE US
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-800 sm:text-4xl md:text-5xl">
              Built For{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Business Growth
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-7 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-xl text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-extrabold text-slate-800">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-500">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ERP FEATURE SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
        {/* Background Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-300/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="rounded-full bg-purple-100 px-4 py-2 text-xs font-bold tracking-wider text-purple-600">
              POWERFUL ERP PLATFORM
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-800 sm:text-4xl md:text-5xl">
              Everything You Need To{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
              A complete ecosystem of intelligent dashboards designed to
              simplify operations and accelerate productivity.
            </p>

            <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
          </motion.div>

          {/* Main ERP */}
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl" />

              <motion.div
                whileHover={{ scale: 1.015 }}
                className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-slate-300/60"
              >
                <img
                  src={DashboardImage}
                  alt="vTechSoftware ERP Dashboard"
                  className="w-full rounded-[1.5rem] object-cover"
                />

                <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:-right-6 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 text-white shadow-lg shadow-emerald-500/20">
                    <FaAward />
                  </div>

                  <div>
                    <p className="text-lg font-black text-slate-800 sm:text-xl">
                      #1 ERP
                    </p>
                    <p className="text-xs font-medium text-slate-500">
                      Business Management
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaIndustry />
                </span>

                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Enterprise Resource Planning
                </span>
              </div>

              <h3 className="text-3xl font-black leading-tight text-slate-800 sm:text-4xl md:text-5xl">
                One Platform.
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                  Infinite Possibilities.
                </span>
              </h3>

              <p className="text-base leading-8 text-slate-500 sm:text-lg">
                A comprehensive business management platform that automates
                and integrates your core business processes. Connect
                departments, centralize data and make smarter decisions from a
                single powerful ecosystem.
              </p>

              <div className="grid gap-3">
                {[
                  "Seamless Department Integration",
                  "Real-time Data Synchronization",
                  "Scalable Architecture",
                  "Advanced Analytics & Reporting",
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <FaCheckCircle className="shrink-0 text-emerald-500" />
                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/erp-feature-section"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore ERP
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE CARDS
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-200/40 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {feature.icon}
                </div>

                <h3 className="relative text-xl font-extrabold text-slate-800 transition-colors group-hover:text-blue-600">
                  {feature.title}
                </h3>

                <p className="relative mt-3 leading-7 text-slate-500">
                  {feature.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  Learn More
                  <FaArrowRight className="text-xs" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-24">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950" />

        {/* Glows */}
        <motion.div
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-6"
        >
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl text-cyan-300 shadow-xl backdrop-blur-xl">
            <FaRocket />
          </div>

          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg">
            Join thousands of businesses using modern technology to automate
            operations, improve productivity and achieve sustainable growth.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/book-demo"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-9 py-4 text-base font-extrabold text-blue-700 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/20 sm:text-lg"
            >
              Book a Free Demo
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-9 py-4 text-base font-extrabold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 sm:text-lg"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-blue-100/60">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Free Demo
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Expert Support
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-emerald-400" />
              Secure Platform
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CustomerPage;

