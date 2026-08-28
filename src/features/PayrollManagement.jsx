
import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import features from "../data/features";
import saleImage from "../assets/employeesImge.jpg";

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
    y: 30,
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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const PayrollManagement = () => {
  const payrollComponents = [
    {
      number: "01",
      title: "Employee Data Management",
      desc: "Maintain employee profiles, job information, attendance, leave records, overtime and other payroll-related information from one centralized system.",
    },
    {
      number: "02",
      title: "Salary Calculations",
      desc: "Automatically calculate salaries, allowances, bonuses, deductions and overtime to reduce manual payroll work and calculation errors.",
    },
    {
      number: "03",
      title: "Tax Compliance",
      desc: "Manage applicable taxes, statutory deductions and payroll records while keeping the organization's payroll process organized and compliant.",
    },
    {
      number: "04",
      title: "Payments & Documentation",
      desc: "Process employee payments efficiently and maintain accurate salary records, payslips and payroll documentation for future reference.",
    },
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "Faster Processing",
      desc: "Automate repetitive payroll calculations and reduce manual effort.",
    },
    {
      icon: "🎯",
      title: "Better Accuracy",
      desc: "Minimize human errors in salary, deductions and overtime calculations.",
    },
    {
      icon: "🔐",
      title: "Secure Records",
      desc: "Keep important employee and payroll information organized and protected.",
    },
    {
      icon: "📊",
      title: "Smart Reporting",
      desc: "Get better visibility into salary costs, payroll trends and employee data.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 text-gray-900">

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute top-[35%] -right-40 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-[35%] h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
      </div>

      {/* =========================================================
          HERO SECTION
      ========================================================== */}

      <section className="relative min-h-[650px] flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2">

          {/* Hero Content */}
          <Motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 80,
            }}
          >

            {/* Badge */}
            <Motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Smart Workforce Management
            </Motion.div>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Payroll
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Management
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
              Simplify employee compensation, salary calculations, attendance,
              deductions, bonuses and payroll records with a centralized
              payroll management solution.
            </p>

            {/* Hero Stats */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold">100%</p>
                <p className="mt-1 text-xs text-blue-200">
                  Centralized Data
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold">24/7</p>
                <p className="mt-1 text-xs text-blue-200">
                  Accessibility
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold">Smart</p>
                <p className="mt-1 text-xs text-blue-200">
                  Automation
                </p>
              </div>

            </div>
          </Motion.div>

          {/* Hero Image */}
          <Motion.div
            initial={{ opacity: 0, x: 70, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              type: "spring",
              stiffness: 80,
            }}
            className="relative"
          >

            {/* Decorative circles */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-blue-300/20" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border border-cyan-300/20" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

              <img
                src={saleImage}
                alt="Payroll Management"
                className="h-[430px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
              />

              {/* Floating Card */}
              <Motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-8 rounded-2xl border border-white/20 bg-white/90 px-5 py-4 text-gray-900 shadow-2xl backdrop-blur-xl"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Payroll System
                </p>
                <p className="mt-1 text-lg font-bold">
                  Efficient & Accurate
                </p>
              </Motion.div>

            </div>
          </Motion.div>

        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block h-20 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C360,10 720,140 1080,50 C1240,10 1340,30 1440,70 L1440,120 L0,120 Z"
              className="fill-slate-50"
            />
          </svg>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}

      <Motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              WHAT IS PAYROLL MANAGEMENT?
            </span>

            <h2 className="text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Manage Your Workforce
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                With Confidence
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-gray-600">

              <p>
                Payroll management is the process of handling all aspects of
                employee compensation, including salaries, wages, bonuses,
                deductions and other payments.
              </p>

              <p>
                A modern payroll system helps organizations maintain accurate
                employee records, track working hours, manage leave and
                overtime, calculate salaries and organize payroll
                documentation.
              </p>

              <p>
                By bringing these processes together, businesses can reduce
                repetitive manual work, improve accuracy and provide a more
                efficient experience for both employees and management.
              </p>

            </div>
          </div>

          {/* Highlight Card */}
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 blur-xl opacity-20" />

            <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-2xl text-white shadow-lg">
                ₹
              </div>

              <h3 className="text-2xl font-bold">
                Simplified Payroll
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Bring employee data, salary calculations, attendance,
                deductions and payroll records into one unified platform.
              </p>

              <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-100">
                <Motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-gray-500">
                Process efficiency
              </p>

            </div>
          </div>

        </div>
      </Motion.section>

      {/* =========================================================
          PAYROLL FEATURES
      ========================================================== */}

      <section className="relative bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-700">
              ERP MODULES
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
              Powerful Features For
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore the complete ERP ecosystem and connect payroll with
              other essential business functions.
            </p>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
          >

            {features.map((feature, index) => (

              <Motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-slate-50 p-[1px] shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
              >

                <div className="relative flex h-full min-h-[105px] items-center justify-center rounded-2xl bg-white px-4 py-5 text-center">

                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full" />

                  <Link
                    to={feature.link}
                    className="text-sm font-bold text-gray-700 transition-colors duration-300 group-hover:text-blue-600"
                  >
                    {feature.name}
                  </Link>

                </div>

              </Motion.div>

            ))}

          </Motion.div>

        </div>
      </section>

      {/* =========================================================
          KEY COMPONENTS
      ========================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

            {/* Image */}
            <Motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
              className="relative"
            >

              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-blue-300/30 blur-3xl" />

              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-indigo-300/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl">

                <img
                  src={saleImage}
                  alt="Payroll employees"
                  className="h-[500px] w-full rounded-[1.5rem] object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </Motion.div>

            {/* Content */}
            <Motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
            >

              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                CORE CAPABILITIES
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Key Components of
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Payroll Management
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                From employee information to salary calculations and
                documentation, every important payroll activity can be
                organized within a centralized system.
              </p>

              <div className="mt-10 space-y-5">

                {payrollComponents.map((item, index) => (

                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    whileHover={{ x: 6 }}
                    className="group flex gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                  >

                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-black text-white shadow-lg">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.desc}
                      </p>
                    </div>

                  </Motion.div>

                ))}

              </div>

            </Motion.div>

          </div>

        </div>
      </section>

      {/* =========================================================
          BENEFITS
      ========================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-700">
              BUSINESS BENEFITS
            </span>

            <h2 className="mt-5 text-4xl font-black text-gray-900 md:text-5xl">
              Why Choose
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Smart Payroll?
              </span>
            </h2>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >

            {benefits.map((benefit, index) => (

              <Motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-600">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {benefit.desc}
                </p>

              </Motion.div>

            ))}

          </Motion.div>

        </div>
      </section>

      {/* =========================================================
          PROCESS SECTION
      ========================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 py-24 text-white">

        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >

            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-blue-200 backdrop-blur-md">
              PAYROLL WORKFLOW
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              From Employee Data
              <span className="block text-cyan-300">
                To Payroll Processing
              </span>
            </h2>

          </Motion.div>

          <div className="relative mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">

            {/* Connector */}
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-cyan-400/20 via-cyan-400 to-cyan-400/20 md:block" />

            {[
              {
                number: "01",
                title: "Employee Data",
                desc: "Manage employee profiles and work information.",
              },
              {
                number: "02",
                title: "Attendance",
                desc: "Track working hours, leave and overtime.",
              },
              {
                number: "03",
                title: "Calculation",
                desc: "Calculate salaries, bonuses and deductions.",
              },
              {
                number: "04",
                title: "Payment",
                desc: "Complete payroll processing and documentation.",
              },
            ].map((item, index) => (

              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 text-center"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-900 bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black shadow-xl shadow-cyan-500/20">
                  {item.number}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-blue-200">
                  {item.desc}
                </p>

              </Motion.div>

            ))}

          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-slate-50 py-24">

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 px-8 py-16 text-center text-white shadow-2xl md:px-16"
        >

          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-300/10 blur-2xl" />

          <div className="relative">

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              SMART ERP SOLUTION
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Empower Your Business
              <span className="block text-cyan-200">
                With Smarter Payroll
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Bring payroll, employee information, attendance and business
              processes together with a modern ERP-powered solution.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/contact"
                className="group rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Get Started
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/erp-feature-section"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Explore ERP
              </Link>

            </div>

          </div>

        </Motion.div>

      </section>

    </section>
  );
};

export default PayrollManagement;

