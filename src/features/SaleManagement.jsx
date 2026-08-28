
import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import features from "../data/features";
import discount from "../assets/discount.jpg";

// =========================
// ANIMATION VARIANTS
// =========================

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

// =========================
// SALES PROCESS DATA
// =========================

const salesProcess = [
  {
    number: "01",
    title: "Set Sales Goals",
    desc: "Define clear targets for revenue, units sold, customer acquisition, and market expansion.",
  },
  {
    number: "02",
    title: "Develop Strategies",
    desc: "Create smart sales strategies to reach potential customers and convert opportunities into successful deals.",
  },
  {
    number: "03",
    title: "Lead the Sales Team",
    desc: "Recruit, train, guide, and motivate sales representatives to achieve their maximum potential.",
  },
  {
    number: "04",
    title: "Monitor & Evaluate",
    desc: "Track sales performance, identify bottlenecks, and continuously optimize strategies.",
  },
];

const benefits = [
  {
    title: "Centralized Sales Data",
    desc: "Keep customers, leads, deals, and sales activities organized in one centralized platform.",
  },
  {
    title: "Better Team Performance",
    desc: "Monitor individual and team performance using real-time sales information.",
  },
  {
    title: "Faster Decision Making",
    desc: "Use accurate business insights and reports to make faster and smarter decisions.",
  },
  {
    title: "Improved Customer Experience",
    desc: "Build stronger relationships by maintaining complete customer interaction history.",
  },
];

// =========================
// COMPONENT
// =========================

const SaleManagement = () => {
  return (
    <main className="relative overflow-hidden bg-slate-50 text-gray-800">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute top-[35%] -right-40 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="absolute bottom-[10%] left-1/3 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

      </div>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[650px] bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">

        {/* Grid Pattern */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glow */}

        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[100px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">

          {/* LEFT */}

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur-md">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              Smart Business Management

            </div>

            {/* Heading */}

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">

              Powerful{" "}

              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">

                Sales Management

              </span>

              <br />

              For Modern Businesses

            </h1>

            {/* Description */}

            <p className="max-w-2xl text-lg leading-8 text-blue-100/80">

              Manage your complete sales operation from one intelligent platform.
              Track leads, customers, sales activities, performance, targets,
              and business opportunities with complete visibility.

            </p>

            {/* Buttons */}

            <div className="flex flex-col gap-4 sm:flex-row">

              <Link
                to="/crm-feature-section"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-900 shadow-xl shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >

                Explore CRM

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

              <a
                href="#sales-process"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Explore Features
              </a>

            </div>

            {/* Stats */}

            <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">

              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  360°
                </h3>
                <p className="mt-1 text-sm text-blue-200">
                  Sales Visibility
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  Real-Time
                </h3>
                <p className="mt-1 text-sm text-blue-200">
                  Analytics
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">
                  Smart
                </h3>
                <p className="mt-1 text-sm text-blue-200">
                  Automation
                </p>
              </div>

            </div>

          </Motion.div>

          {/* RIGHT */}

          <Motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative"
          >

            {/* Decorative Cards */}

            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md" />

            <div className="absolute -bottom-7 -left-7 h-28 w-28 rounded-full border border-blue-300/20 bg-blue-400/10 backdrop-blur-md" />

            {/* Main Image Card */}

            <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">

              <div className="overflow-hidden rounded-[1.5rem]">

                <img
                  src={discount}
                  alt="Sales Management Dashboard"
                  className="h-auto w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              {/* Floating Status */}

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-xl"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">
                    📈
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Sales Performance
                    </p>

                    <p className="text-lg font-extrabold text-gray-900">
                      Growing
                    </p>
                  </div>

                </div>

              </Motion.div>

            </div>

          </Motion.div>

        </div>

        {/* Bottom Curve */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

          <svg
            className="relative block h-20 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >

            <path
              d="M0,80 C360,0 720,140 1080,60 C1260,20 1350,40 1440,80 L1440,120 L0,120 Z"
              className="fill-slate-50"
            />

          </svg>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative z-10 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold uppercase tracking-wider text-blue-700">
              Sales Management
            </span>

            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl">

              Transform Your{" "}

              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sales Operations
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

              Sales management is the process of planning, organizing,
              directing, and controlling the sales activities of an organization.
              A modern sales management system helps businesses coordinate teams,
              monitor performance, manage customers, and achieve revenue targets.

            </p>

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          FEATURES SECTION
      ===================================================== */}

      <section className="relative px-6 pb-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Powerful Modules
            </span>

            <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
              Everything Your Sales Team Needs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Connect your sales processes with powerful business management
              modules designed for efficiency and growth.
            </p>

          </div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >

            {features.map((feature, index) => (

              <Motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-100"
              >

                {/* Top Glow */}

                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                {/* Number */}

                <div className="mb-5 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white shadow-lg shadow-blue-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-gray-300 transition group-hover:text-blue-500">
                    →
                  </span>

                </div>

                <Link
                  to={feature.link}
                  className="relative z-10 block text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
                >
                  {feature.name}
                </Link>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Streamline your business workflow with intelligent tools.
                </p>

              </Motion.div>

            ))}

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          SALES PROCESS
      ===================================================== */}

      <section
        id="sales-process"
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 px-6 py-24"
      >

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-16 max-w-3xl">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Build a High-Performance Sales Process
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-100/70">
              From setting targets to evaluating performance, manage every
              stage of your sales operation with complete control.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

            {salesProcess.map((item, index) => (

              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.1]"
              >

                <div className="mb-8 flex items-center justify-between">

                  <span className="text-4xl font-black text-blue-300/30">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 transition group-hover:bg-blue-500 group-hover:text-white">
                    ✓
                  </div>

                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-blue-100/60">
                  {item.desc}
                </p>

              </Motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          IMAGE + CONTENT SECTION
      ===================================================== */}

      <section className="relative px-6 py-24">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}

          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="relative"
          >

            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-200/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-3 shadow-2xl">

              <img
                src={discount}
                alt="Sales Management"
                className="w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 right-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl">

              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Business Growth
              </p>

              <p className="mt-1 text-2xl font-black text-blue-600">
                Smarter Sales
              </p>

            </div>

          </Motion.div>

          {/* CONTENT */}

          <Motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="space-y-7"
          >

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Real-World Application
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 md:text-5xl">

                Examples of{" "}

                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Sales Management
                </span>

              </h2>

            </div>

            <p className="text-lg leading-8 text-gray-600">

              Imagine a company that sells electronic gadgets. The sales
              manager needs to understand customer demand, manage sales
              representatives, monitor revenue, track opportunities, and
              continuously improve the sales process.

            </p>

            <div className="space-y-4">

              {salesProcess.map((item, index) => (

                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >

                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    ✓
                  </div>

                  <div>

                    <h3 className="font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {item.desc}
                    </p>

                  </div>

                </Motion.div>

              ))}

            </div>

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS SECTION
      ===================================================== */}

      <section className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Business Benefits
            </span>

            <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-5xl">
              Why Choose Smart Sales Management?
            </h2>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => (

              <Motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50/50 p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-200">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {benefit.desc}
                </p>

              </Motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-24">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 px-8 py-16 text-center shadow-2xl md:px-16">

          <div className="absolute" />

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              Ready To Grow?
            </span>

            <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">
              Take Control of Your Sales
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100/80">
              Empower your sales team with intelligent tools, better insights,
              automated workflows, and centralized customer information.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/crm-feature-section"
                className="rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Explore CRM →
              </Link>

              <Link
                to="/"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Back To Home
              </Link>

            </div>

          </Motion.div>

        </div>

      </section>

    </main>
  );
};

export default SaleManagement;

