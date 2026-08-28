import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiDollarSign,
  FiFileText,
  FiPieChart,
  FiTrendingUp,
  FiShield,
  FiCreditCard,
  FiActivity,
  FiDatabase,
} from "react-icons/fi";

import features from "../data/features";
import AccountImage from "../assets/AccountImage.jpg";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
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
  hidden: {
    opacity: 0,
    x: -60,
  },
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
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const accountingFunctions = [
  {
    icon: FiFileText,
    title: "Recording Transactions",
    desc: "Accurately record sales, purchases, expenses, receipts and other financial transactions.",
  },
  {
    icon: FiDatabase,
    title: "Classifying Data",
    desc: "Organize financial transactions into appropriate accounts for better reporting and analysis.",
  },
  {
    icon: FiBarChart2,
    title: "Financial Reporting",
    desc: "Generate structured financial reports that help management understand business performance.",
  },
  {
    icon: FiPieChart,
    title: "Financial Analysis",
    desc: "Analyze revenue, expenses, profitability and financial trends using meaningful insights.",
  },
  {
    icon: FiTrendingUp,
    title: "Budget Management",
    desc: "Create, monitor and manage budgets to keep business spending under control.",
  },
  {
    icon: FiShield,
    title: "Tax & Compliance",
    desc: "Maintain organized financial records to support tax preparation and regulatory compliance.",
  },
];

const accountingBenefits = [
  "Real-time financial visibility",
  "Automated transaction management",
  "Accurate financial reporting",
  "Expense and revenue tracking",
  "Better cash-flow management",
  "Improved decision making",
];

const accountingModules = [
  {
    icon: FiDollarSign,
    title: "Income & Expenses",
    desc: "Monitor business income and expenses from one centralized system.",
  },
  {
    icon: FiCreditCard,
    title: "Payments",
    desc: "Track customer payments, vendor payments and outstanding balances.",
  },
  {
    icon: FiBarChart2,
    title: "Reports",
    desc: "Create financial statements and performance reports whenever required.",
  },
  {
    icon: FiActivity,
    title: "Business Analytics",
    desc: "Transform financial data into actionable business intelligence.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const AccountingManagement = () => {
  return (
    <main className="overflow-hidden bg-slate-50 text-gray-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[720px] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >

            <Motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-200 text-sm font-semibold backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Smart Financial Management
            </Motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white">
              Modern
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Accounting
              </span>
              Management
            </h1>

            <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-blue-100/80">
              Manage financial transactions, expenses, revenue, reports,
              budgets and business performance from one powerful and
              intelligent accounting platform.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                to="/account-management"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white text-blue-900 font-bold shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Explore Accounting
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#accounting-features"
                className="inline-flex items-center px-7 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-semibold backdrop-blur-md hover:bg-white/10 transition-all"
              >
                View Features
              </a>

            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4 pt-5 max-w-lg">

              {[
                ["100%", "Visibility"],
                ["24/7", "Access"],
                ["Smart", "Reports"],
              ].map(([value, label], index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.15 }}
                  className="border-l border-white/20 pl-4"
                >
                  <p className="text-2xl font-extrabold text-white">
                    {value}
                  </p>
                  <p className="text-sm text-blue-200/70">
                    {label}
                  </p>
                </Motion.div>
              ))}

            </div>

          </Motion.div>

          {/* RIGHT IMAGE */}
          <Motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-90" />

            {/* Main Image */}
            <Motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-3 backdrop-blur-xl shadow-2xl shadow-blue-950/50">

                <img
                  src={AccountImage}
                  alt="Accounting Management Dashboard"
                  className="w-full h-[420px] object-cover rounded-[1.5rem]"
                />

              </div>
            </Motion.div>

            {/* Floating Card 1 */}
            <Motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="absolute -left-8 top-16 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <FiTrendingUp className="text-blue-600" />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Business Growth
                </p>
                <p className="font-bold text-gray-900">
                  +28.6%
                </p>
              </div>
            </Motion.div>

            {/* Floating Card 2 */}
            <Motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute -right-6 bottom-16 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-white/95 px-4 py-3 shadow-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <FiCheckCircle className="text-emerald-600" />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Financial Status
                </p>
                <p className="font-bold text-gray-900">
                  Healthy
                </p>
              </div>
            </Motion.div>

          </Motion.div>

        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="#f8fafc"
              d="M0,80 C300,140 500,20 780,65 C1040,105 1200,120 1440,45 L1440,120 L0,120 Z"
            />
          </svg>
        </div>

      </section>


      {/* =====================================================
          INTRO SECTION
      ===================================================== */}

      <section className="relative py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >

            <span className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
              ACCOUNTING MANAGEMENT
            </span>

            <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">
              Complete control over your
              <span className="text-blue-600">
                {" "}financial operations.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-gray-600">

              <p>
                Accounting is the process of recording, summarizing,
                analyzing and reporting financial transactions of an
                organization.
              </p>

              <p>
                A modern accounting management system helps businesses
                maintain accurate financial records while providing
                management, investors and other stakeholders with a clear
                understanding of financial health and performance.
              </p>

              <p>
                From daily transactions to financial reporting and business
                analytics, everything can be managed through a centralized
                platform.
              </p>

            </div>

          </Motion.div>


          {/* Feature Highlight */}
          <Motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >

            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl rounded-[2rem]" />

            <div className="relative rounded-[2rem] bg-white border border-gray-100 shadow-2xl p-8">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="text-sm text-gray-500">
                    Financial Overview
                  </p>

                  <h3 className="text-2xl font-black text-gray-900">
                    Accounting Dashboard
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <FiBarChart2 className="text-blue-600 text-xl" />
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                {[
                  {
                    title: "Revenue",
                    value: "₹12.8L",
                    icon: FiTrendingUp,
                  },
                  {
                    title: "Expenses",
                    value: "₹4.2L",
                    icon: FiCreditCard,
                  },
                  {
                    title: "Profit",
                    value: "₹8.6L",
                    icon: FiDollarSign,
                  },
                  {
                    title: "Reports",
                    value: "128",
                    icon: FiFileText,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="p-5 rounded-2xl bg-slate-50 border border-gray-100"
                    >
                      <div className="flex justify-between items-start">

                        <div>
                          <p className="text-sm text-gray-500">
                            {item.title}
                          </p>

                          <p className="mt-2 text-2xl font-black text-gray-900">
                            {item.value}
                          </p>
                        </div>

                        <Icon className="text-blue-600 text-xl" />

                      </div>
                    </Motion.div>
                  );
                })}

              </div>

              {/* Fake Chart */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">

                <div className="flex justify-between items-center mb-4">
                  <p className="font-bold text-gray-800">
                    Financial Performance
                  </p>

                  <span className="text-sm font-semibold text-green-600">
                    +18.4%
                  </span>
                </div>

                <div className="flex items-end gap-2 h-28">

                  {[35, 55, 45, 70, 62, 82, 95, 75, 100, 88, 110, 120].map(
                    (height, index) => (
                      <Motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height / 1.3}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.5,
                        }}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400"
                      />
                    )
                  )}

                </div>

              </div>

            </div>

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          ACCOUNTING FUNCTIONS
      ===================================================== */}

      <section
        id="accounting-features"
        className="relative py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14"
          >

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
              POWERFUL CAPABILITIES
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Key Components of
              <span className="text-blue-600">
                {" "}Accounting
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Everything your business needs to maintain accurate,
              transparent and intelligent financial management.
            </p>

          </Motion.div>


          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >

            {accountingFunctions.map((item, index) => {

              const Icon = item.icon;

              return (
                <Motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative p-7 rounded-3xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden"
                >

                  <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors" />

                  <div className="relative z-10">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-200 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="text-2xl" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                      Learn More
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>

                  </div>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          FEATURE NAVIGATION
      ===================================================== */}

      <section className="py-24 bg-slate-950 relative overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >

            <p className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-3">
              Explore ERP Modules
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-white">
              All Business Features
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Connect accounting with every important department of your
              organization through one integrated ERP ecosystem.
            </p>

          </Motion.div>


          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >

            {features.map((feature, index) => (
              <Motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
              >
                <Link
                  to={feature.link}
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-5 hover:bg-white/[0.12] hover:border-blue-400/40 transition-all duration-300"
                >

                  <div className="flex items-center justify-between gap-3">

                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white">
                      {feature.name}
                    </span>

                    <FiArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />

                  </div>

                </Link>
              </Motion.div>
            ))}

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          IMAGE + ACCOUNTING BENEFITS
      ===================================================== */}

      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-blue-300/30 to-indigo-300/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-2xl">

              <img
                src={AccountImage}
                alt="Accounting Software"
                className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">

                <div className="rounded-2xl bg-white/90 backdrop-blur-xl p-5 shadow-xl">

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <FiBarChart2 />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Business Intelligence
                      </p>
                      <p className="font-bold text-gray-900">
                        Data-driven financial decisions
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </Motion.div>


          <Motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-5">
              BUSINESS ADVANTAGE
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Make financial management
              <span className="text-blue-600">
                {" "}simple and intelligent.
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              An integrated accounting platform reduces manual work,
              improves accuracy and gives decision-makers the information
              they need at the right time.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {accountingBenefits.map((benefit, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >

                  <FiCheckCircle className="text-blue-600 flex-shrink-0" />

                  <span className="font-medium text-gray-700">
                    {benefit}
                  </span>

                </Motion.div>
              ))}

            </div>

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          MODULES
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >

            <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">
              Integrated Accounting
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-black text-gray-900">
              Everything in one place
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Bring your financial operations together with a connected,
              easy-to-use accounting environment.
            </p>

          </Motion.div>


          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >

            {accountingModules.map((item, index) => {

              const Icon = item.icon;

              return (
                <Motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                  }}
                  className="group p-7 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all"
                >

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="text-2xl" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900">

        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-6 text-center text-white"
        >

          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center">
            <FiDollarSign className="text-3xl" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to simplify your
            <span className="block text-cyan-300">
              financial management?
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Connect accounting, reporting and business operations through
            a powerful ERP platform designed for modern organizations.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              to="/account-management"
              className="group px-8 py-4 rounded-xl bg-white text-blue-700 font-bold shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all inline-flex items-center gap-3"
            >
              Get Started
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/"
              className="px-8 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md font-semibold hover:bg-white/20 transition-all"
            >
              Explore ERP
            </Link>

          </div>

        </Motion.div>

      </section>

    </main>
  );
};

export default AccountingManagement;