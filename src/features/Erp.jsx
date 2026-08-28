
import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import erpImage from "../assets/erpImages.jpg";
import imgggggg from "../assets/imgggggg.jpg";

// ===============================
// Animation Variants
// ===============================

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// ===============================
// Features
// ===============================

const features = [
  {
    name: "SALE'S CRM",
    link: "/crm-feature-section",
    icon: "📊",
    description: "Manage leads, customers and sales pipelines.",
  },
  {
    name: "CORE ERP",
    link: "/erp-feature-section",
    icon: "⚙️",
    description: "Centralized ERP platform for complete operations.",
  },
  {
    name: "Payroll Management",
    link: "/payroll-management",
    icon: "💰",
    description: "Simplify employee salary and payroll operations.",
  },
  {
    name: "Inventory Management",
    link: "/inventory-management",
    icon: "📦",
    description: "Track stock, warehouses and inventory movement.",
  },
  {
    name: "Project Management",
    link: "/product-management",
    icon: "📋",
    description: "Plan, manage and monitor projects efficiently.",
  },
  {
    name: "Production",
    link: "/production",
    icon: "🏭",
    description: "Control production planning and operations.",
  },
  {
    name: "Process Management",
    link: "/process-management",
    icon: "🔄",
    description: "Automate and optimize business processes.",
  },
  {
    name: "Manufacturing Management",
    link: "/menufecturing-management",
    icon: "🛠️",
    description: "Manage manufacturing workflows and resources.",
  },
  {
    name: "AMC & CMC",
    link: "/cloud-solutions",
    icon: "☁️",
    description: "Manage annual and comprehensive maintenance.",
  },
  {
    name: "Accounting",
    link: "/account-management",
    icon: "🧾",
    description: "Manage finance, accounting and transactions.",
  },
];

// ===============================
// Business Challenges
// ===============================

const challenges = [
  "Disconnected Sales & Inventory Systems",
  "Manual Team Coordination",
  "Scattered Sales Data",
  "Inventory Management Difficulties",
  "Complex Accounting Operations",
  "Lack of Real-Time Business Visibility",
];

// ===============================
// Company Solutions
// ===============================

const solutions = [
  {
    title: "Management",
    text: "Management gets access to powerful dashboards that provide real-time visibility into company-wide performance, KPIs and business operations.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "SAP ERP",
    text: "Integrated ERP architecture helps organizations connect departments, automate workflows and maintain a centralized source of business information.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Oracle NetSuite",
    text: "Cloud-based enterprise management capabilities help businesses manage finance, operations, inventory and customer relationships from a unified platform.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Microsoft Dynamics",
    text: "Flexible business management solutions help organizations improve customer engagement, finance, operations and productivity.",
    gradient: "from-indigo-500 to-cyan-600",
  },
  {
    title: "Supply Chain Management",
    text: "Improve procurement, logistics, inventory movement and supply chain visibility with connected business processes.",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Human Resources",
    text: "Manage employees, payroll, attendance, recruitment and HR processes from one centralized system.",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    title: "Finance",
    text: "Automate accounting, financial reporting, transactions, taxation and financial analysis with integrated ERP tools.",
    gradient: "from-lime-500 to-green-600",
  },
  {
    title: "Customer Relationship Management",
    text: "Build stronger customer relationships through centralized customer information, lead tracking and sales management.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Manufacturing",
    text: "Manage production planning, material requirements, workflows, quality control and manufacturing operations.",
    gradient: "from-yellow-500 to-orange-600",
  },
];

// ===============================
// ERP Capabilities
// ===============================

const capabilities = [
  {
    title: "Analytics",
    description:
      "Real-time business intelligence, reports and performance dashboards.",
    icon: "📈",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "E-Commerce",
    description:
      "Connect online sales channels with inventory, customers and accounting.",
    icon: "🛒",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Automation",
    description:
      "Reduce repetitive manual work with intelligent business automation.",
    icon: "⚡",
    gradient: "from-pink-500 to-red-600",
  },
  {
    title: "Support",
    description:
      "Dedicated support and assistance to keep your business operations running.",
    icon: "🎧",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Industry Expertise",
    description:
      "Solutions designed with practical understanding of modern industries.",
    icon: "🏆",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Cloud Technology",
    description:
      "Secure and scalable cloud-ready business infrastructure.",
    icon: "☁️",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Integration",
    description:
      "Connect business applications, APIs and third-party platforms.",
    icon: "🔗",
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Security",
    description:
      "Role-based access and secure business data management.",
    icon: "🔐",
    gradient: "from-slate-600 to-gray-900",
  },
];

// ===============================
// Main Component
// ===============================

const Erp = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-50 text-gray-900">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

        {/* Background Glow */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32 lg:py-36">

          {/* Hero Content */}
          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              Smart Enterprise Resource Planning
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Next-Gen
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                ERP Solutions
              </span>
              For Modern Business
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/80 md:text-xl">
              Connect your people, processes, data and operations through a
              powerful centralized ERP ecosystem designed to help your
              business grow faster and operate smarter.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-900 shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Explore Features
              </a>

            </div>

            {/* Mini Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">

              <div>
                <p className="text-3xl font-black text-white">10+</p>
                <p className="mt-1 text-sm text-blue-200/70">ERP Modules</p>
              </div>

              <div>
                <p className="text-3xl font-black text-white">24/7</p>
                <p className="mt-1 text-sm text-blue-200/70">Accessibility</p>
              </div>

              <div>
                <p className="text-3xl font-black text-white">360°</p>
                <p className="mt-1 text-sm text-blue-200/70">Business View</p>
              </div>

            </div>
          </Motion.div>

          {/* Hero Image */}
          <Motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative flex justify-center"
          >

            <div className="absolute inset-5 rounded-[2rem] bg-blue-500/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-blue-950/60 backdrop-blur-md">

              <img
                src={erpImage}
                alt="ERP Dashboard"
                className="relative w-full max-w-xl rounded-[1.5rem] object-cover transition duration-700 hover:scale-[1.03]"
              />

              {/* Floating Card */}
              <Motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      Business Connected
                    </p>
                    <p className="text-xs text-gray-500">
                      Real-time ERP ecosystem
                    </p>
                  </div>
                </div>
              </Motion.div>

            </div>
          </Motion.div>

        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            className="block h-20 w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#f8fafc"
              d="M0,80 C360,10 720,120 1080,55 C1240,25 1360,35 1440,65 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* =====================================================
          CHALLENGES + FEATURES
      ===================================================== */}

      <section
        id="features"
        className="bg-slate-50 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <span className="font-bold uppercase tracking-[0.25em] text-blue-600">
              Powerful ERP Ecosystem
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              Everything Your Business Needs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bring every department together with a unified platform built
              around your business processes.
            </p>

          </Motion.div>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Challenges */}
            <Motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-red-100 bg-white p-8 shadow-xl shadow-slate-200/60 md:p-10"
            >

              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-100 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
                  Business Challenges
                </span>

                <h3 className="mt-5 text-3xl font-black text-slate-900">
                  Is Your Business Facing These Problems?
                </h3>

                <div className="mt-8 space-y-4">

                  {challenges.map((item, index) => (
                    <Motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                        ×
                      </span>

                      <span className="font-medium text-slate-700">
                        {item}
                      </span>
                    </Motion.div>
                  ))}

                </div>
              </div>
            </Motion.div>

            {/* Features */}
            <Motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-blue-100 bg-white p-8 shadow-xl shadow-slate-200/60 md:p-10"
            >

              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
                    ERP Modules
                  </span>

                  <h3 className="mt-4 text-3xl font-black text-slate-900">
                    All Features
                  </h3>
                </div>

                <div className="hidden text-4xl md:block">⚙️</div>
              </div>

              <Motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-2"
              >

                {features.map((feature, index) => (
                  <Motion.div
                    key={index}
                    variants={fadeUp}
                  >
                    <Link
                      to={feature.link}
                      className="group block h-full rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-lg"
                    >

                      <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                          {feature.icon}
                        </div>

                        <div className="min-w-0">
                          <h4 className="font-bold text-slate-900">
                            {feature.name}
                          </h4>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            {feature.description}
                          </p>

                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-blue-600">
                            Explore
                            <span className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </span>
                        </div>

                      </div>

                    </Link>
                  </Motion.div>
                ))}

              </Motion.div>
            </Motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY WIDE SOLUTIONS
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-6 py-20 md:py-28">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-4xl text-center"
          >

            <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-indigo-600">
              Complete Business Management
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Company-Wide
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Solutions & Services
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Connect departments, automate operations and create one
              intelligent source of truth for your entire organization.
            </p>

          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >

            {solutions.map((solution, index) => (
              <Motion.div
                key={index}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r ${solution.gradient}`}
                />

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${solution.gradient} text-xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {index + 1}
                </div>

                <h3 className="text-xl font-black text-slate-900">
                  {solution.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {solution.text}
                </p>

                <div className="mt-6 h-px w-full bg-slate-100" />

                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Integrated ERP Solution
                </div>

              </Motion.div>
            ))}

          </Motion.div>

        </div>
      </section>

      {/* =====================================================
          ERP IMAGE + DESCRIPTION
      ===================================================== */}

      <section className="bg-slate-950 px-6 py-20 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -inset-5 rounded-[2rem] bg-blue-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md">

              <img
                src={imgggggg}
                alt="ERP Company Dashboard"
                className="w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
              />

            </div>

          </Motion.div>

          <Motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-300">
              Enterprise Resource Planning
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
              One Platform.
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Endless Possibilities.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              ERP is a powerful business management platform that connects
              departments, people, processes and information into one
              centralized ecosystem.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Instead of working with disconnected systems, organizations can
              manage finance, HR, inventory, production, sales, projects and
              customer relationships through one unified platform.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              {[
                "Centralized Data",
                "Real-Time Reports",
                "Process Automation",
                "Better Decisions",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white backdrop-blur-sm"
                >
                  <span className="mr-2 text-blue-400">✓</span>
                  {item}
                </div>
              ))}

            </div>

          </Motion.div>

        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="bg-slate-50 px-6 py-20 md:py-28">

        <div className="mx-auto max-w-7xl">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <span className="font-bold uppercase tracking-[0.25em] text-blue-600">
              Why Choose ERP
            </span>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Built For Smarter Operations
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Powerful capabilities designed to simplify operations and
              improve the way your organization works.
            </p>

          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >

            {capabilities.map((item, index) => (
              <Motion.div
                key={index}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.gradient} text-2xl shadow-lg transition duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 text-sm font-bold text-blue-600">
                  Learn More →
                </div>

              </Motion.div>
            ))}

          </Motion.div>

        </div>
      </section>

      {/* =====================================================
          COMPANY INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-6 py-20 md:py-28">

        <div className="mx-auto max-w-5xl">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl md:p-12 lg:p-16"
          >

            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

            <div className="relative">

              <div className="mb-8 text-center">

                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-600">
                  About Our ERP
                </span>

                <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-4xl">
                  V
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {" "}
                    Tech Pvt Ltd
                  </span>
                </h2>

              </div>

              <div className="space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  vTech Software pvt ltd is dedicated to delivering{" "}
                  <span className="font-bold text-slate-900">
                    innovative, scalable, and intelligent ERP solutions
                  </span>{" "}
                  that empower businesses to streamline operations, enhance
                  efficiency and drive sustainable growth.
                </p>

                <p>
                  Our approach focuses on{" "}
                  <span className="font-bold text-slate-900">
                    customized solutions, modern technology and seamless
                    integration
                  </span>
                  . We work closely with organizations to understand their
                  unique processes and build ERP systems around their actual
                  business requirements.
                </p>

                <p>
                  Our expertise spans finance, HR, inventory, production,
                  customer management, sales, projects and multiple other
                  business functions. The goal is to provide a{" "}
                  <span className="font-bold text-slate-900">
                    unified platform
                  </span>{" "}
                  that makes decision-making faster, smarter and
                  data-driven.
                </p>

                <p>
                  At Sappeagle ERP, we believe in{" "}
                  <span className="font-bold text-slate-900">
                    innovation, reliability and client-centricity
                  </span>
                  . Our mission is to help businesses reduce operational
                  bottlenecks, automate repetitive work and scale efficiently.
                </p>

                <p>
                  By combining modern ERP technology, intelligent automation
                  and seamless integrations, we create{" "}
                  <span className="font-bold text-slate-900">
                    bespoke business systems
                  </span>{" "}
                  that help organizations stay competitive in a rapidly
                  changing digital marketplace.
                </p>

              </div>

            </div>
          </Motion.div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-6 py-20 md:py-28">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-blue-100 backdrop-blur-md">
            Ready To Transform Your Business?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Build A Smarter Business
            <span className="block text-blue-200">
              With Next-Gen ERP
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/80">
            Bring your business operations together with a powerful,
            scalable and intelligent ERP platform.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Talk To Our Team
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Back To Home
            </Link>

          </div>

        </Motion.div>
      </section>

    </div>
  );
};

export default Erp;

