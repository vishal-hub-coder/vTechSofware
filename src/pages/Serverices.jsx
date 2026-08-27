import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaUsers,
  FaCogs,
  FaChartLine,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaMobileAlt,
  FaArrowRight,
  FaShieldAlt,
  FaHandshake,
  FaRocket,
  FaBrain,
  FaCheckCircle,
  FaBolt,
  FaLayerGroup,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

import { AiFillAppstore } from "react-icons/ai";
import SEO from "../layout/SEO";

/* =========================================================
   SERVICES DATA
========================================================= */

const services = [
  {
    icon: <FaUsers />,
    title: "CRM",
    shortTitle: "Customer Relationship",
    link: "/crm-feature-section",
    description:
      "Build stronger customer relationships with intelligent lead management, automated workflows, customer insights and personalized engagement.",
    features: [
      "Lead & Contact Management",
      "Sales Pipeline",
      "Customer Analytics",
      "Automated Workflows",
    ],
    color: "blue",
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    softGradient: "from-blue-50 to-indigo-50",
  },

  {
    icon: <FaCogs />,
    title: "ERP",
    shortTitle: "Enterprise Resource Planning",
    link: "/erp-feature-section",
    description:
      "Connect finance, HR, operations, supply chain and business processes through one powerful centralized ERP platform.",
    features: [
      "Business Operations",
      "Finance Integration",
      "HR Management",
      "Centralized Dashboard",
    ],
    color: "emerald",
    gradient: "from-emerald-500 via-green-600 to-teal-600",
    softGradient: "from-emerald-50 to-teal-50",
  },

  {
    icon: <FaChartLine />,
    title: "Sales Management",
    shortTitle: "Sales & Revenue",
    link: "/sales-management",
    description:
      "Accelerate your sales performance with pipeline visibility, order management, sales analytics and automated processes.",
    features: [
      "Sales Pipeline",
      "Order Management",
      "Sales Analytics",
      "Revenue Tracking",
    ],
    color: "purple",
    gradient: "from-purple-500 via-violet-600 to-fuchsia-600",
    softGradient: "from-purple-50 to-fuchsia-50",
  },

  {
    icon: <FaDatabase />,
    title: "Payroll Management",
    shortTitle: "Payroll & HR",
    link: "/payroll-management",
    description:
      "Simplify payroll processing with accurate salary calculations, employee records, compliance management and automated reports.",
    features: [
      "Salary Processing",
      "Employee Management",
      "Tax Calculations",
      "Payroll Reports",
    ],
    color: "orange",
    gradient: "from-orange-500 via-amber-500 to-red-500",
    softGradient: "from-orange-50 to-amber-50",
  },

  {
    icon: <AiFillAppstore />,
    title: "Services Management",
    shortTitle: "Service Operations",
    link: "/services-mnagement",
    description:
      "Manage service requests, customer support, technicians, tickets and SLA commitments from a unified service platform.",
    features: [
      "Ticket Management",
      "SLA Tracking",
      "Service Scheduling",
      "Customer Support",
    ],
    color: "rose",
    gradient: "from-rose-500 via-pink-600 to-red-600",
    softGradient: "from-rose-50 to-pink-50",
  },

  {
    icon: <FaCloud />,
    title: "AMC Management",
    shortTitle: "Asset Maintenance",
    link: "/cloud-solutions",
    description:
      "Keep critical assets performing at their best with AMC contracts, preventive maintenance and automated service reminders.",
    features: [
      "AMC Contracts",
      "Preventive Maintenance",
      "Warranty Tracking",
      "Service Reminders",
    ],
    color: "cyan",
    gradient: "from-cyan-500 via-sky-600 to-blue-600",
    softGradient: "from-cyan-50 to-sky-50",
  },

  {
    icon: <FaRobot />,
    title: "Inventory Management",
    shortTitle: "Stock & Warehouse",
    link: "/inventory-management",
    description:
      "Gain complete inventory visibility with real-time stock tracking, warehouse management, forecasting and automated reordering.",
    features: [
      "Real-Time Stock",
      "Warehouse Management",
      "Stock Forecasting",
      "Purchase Automation",
    ],
    color: "pink",
    gradient: "from-pink-500 via-fuchsia-600 to-purple-600",
    softGradient: "from-pink-50 to-purple-50",
  },

  {
    icon: <FaMobileAlt />,
    title: "Accounting Management",
    shortTitle: "Finance & Accounting",
    link: "/account-management",
    description:
      "Manage financial operations with automated accounting, GST support, financial reports and complete transaction visibility.",
    features: [
      "GST Management",
      "Financial Reports",
      "Transaction Management",
      "Audit Trails",
    ],
    color: "indigo",
    gradient: "from-indigo-500 via-blue-600 to-violet-600",
    softGradient: "from-indigo-50 to-blue-50",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Implementation",
    text: "Get your business up and running quickly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    text: "Secure your critical business information.",
  },
  {
    icon: <FaHandshake />,
    title: "Dedicated Support",
    text: "Expert assistance whenever you need it.",
  },
  {
    icon: <FaBrain />,
    title: "AI-Powered Insights",
    text: "Make smarter decisions with intelligent analytics.",
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "8+",
    label: "Business Modules",
  },
  {
    value: "500+",
    label: "Businesses",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="h-full"
    >
      <Link
        to={service.link}
        className="group relative block h-full"
      >
        {/* Outer glow */}
        <div
          className={`absolute -inset-[1px] rounded-[28px] bg-gradient-to-br ${service.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30`}
        />

        {/* Card */}
        <motion.div
          whileHover={{
            y: -10,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[28px] border border-gray-200/80 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-500 group-hover:border-transparent group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]"
        >
          {/* Top gradient */}
          <div
            className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${service.gradient}`}
          />

          {/* Decorative background */}
          <div
            className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.07] blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-[0.14]`}
          />

          <div className="relative flex h-full flex-col p-7">
            {/* Header */}
            <div className="mb-7 flex items-start justify-between">
              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.08,
                }}
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-2xl text-white shadow-lg`}
              >
                {/* Icon glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-50 blur-md`}
                />

                <span className="relative z-10">
                  {service.icon}
                </span>
              </motion.div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-400 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>

            {/* Title */}
            <div className="mb-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                {service.shortTitle}
              </p>

              <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mb-7 text-[15px] leading-7 text-gray-600">
              {service.description}
            </p>

            {/* Divider */}
            <div className="mb-6 h-px w-full bg-gray-100" />

            {/* Features */}
            <div className="flex-1 space-y-3">
              {service.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  className="flex items-center gap-3"
                  whileHover={{ x: 4 }}
                >
                  <span
                    className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.gradient} text-[10px] text-white`}
                  >
                    <FaCheckCircle />
                  </span>

                  <span className="text-sm font-medium text-gray-600">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
              <span className="text-sm font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                Explore Module
              </span>

              <div className="flex items-center gap-1 text-xs font-semibold text-gray-400 transition-all group-hover:text-blue-600">
                <span>View</span>
                <FaChevronRight className="text-[10px]" />
              </div>
            </div>
          </div>

          {/* Bottom hover line */}
          <div
            className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.gradient} transition-all duration-500 group-hover:w-full`}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Serverices = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-gray-900">

      <SEO
        title="Services - vTech ERP"
        description="Explore vTech ERP's comprehensive business management services including CRM, ERP, Sales, Payroll, Inventory, Accounting, AMC and Service Management."
      />

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950">

        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.30),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(124,58,237,0.28),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.18),transparent_40%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating blobs */}
        <motion.div
          className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small floating dots */}
        <motion.div
          className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-cyan-400"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute right-[15%] top-[35%] h-3 w-3 rounded-full bg-purple-400"
          animate={{
            y: [0, 25, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:py-32">

          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 text-sm font-semibold text-blue-100 shadow-2xl backdrop-blur-xl"
            >
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              Complete Business Management Suite

              <FaStar className="ml-1 text-xs text-yellow-300" />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Everything Your Business Needs.

              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                One Powerful Platform.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              From customer relationships to finance, inventory,
              payroll and operations — vTech ERP connects every
              part of your business in one intelligent ecosystem.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link
                to="/book-demo"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-slate-900 shadow-2xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Book a Free Demo

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Talk to an Expert
              </Link>
            </motion.div>
          </div>

          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.10]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                  {feature.icon}
                </div>

                <h3 className="font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8fafc] to-transparent" />
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative z-20 -mt-2 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            className="grid grid-cols-2 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.10)] lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative px-6 py-7 text-center ${
                  index !== stats.length - 1
                    ? "border-b border-gray-100 lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "border-r"
                    : ""
                }`}
              >
                <div className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                  {stat.value}
                </div>

                <div className="mt-1 text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES HEADER
      ===================================================== */}

      <section className="px-6 pb-10 pt-28 sm:px-8">

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-7xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            <FaLayerGroup />
            Our Solutions
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Powerful Modules.

            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Built for Modern Business.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Choose the modules you need today and scale your platform
            as your business grows tomorrow.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <section className="px-6 pb-28 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          WHY VTECH SECTION
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-gray-200 bg-white px-6 py-28 sm:px-8">

        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(37,99,235,0.06),transparent_30%),radial-gradient(circle_at_90%_50%,rgba(124,58,237,0.06),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Left content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
              Why vTech ERP
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl">
              One Platform.
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
              Stop switching between disconnected software.
              vTech brings your core business processes together
              so your teams can work smarter, faster and with
              complete visibility.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Centralized business data",
                "Real-time operational visibility",
                "Scalable modules for growing businesses",
                "AI-powered decision support",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm text-blue-600">
                    <FaCheckCircle />
                  </span>

                  <span className="font-semibold text-gray-700">
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>

            <Link
              to="/about-company"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
            >
              Discover vTech

              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Main card */}
            <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-slate-950 p-7 shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:p-9">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative">

                {/* Fake dashboard top */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <div className="h-3 w-28 rounded-full bg-white/20" />
                    <div className="mt-3 h-2 w-20 rounded-full bg-white/10" />
                  </div>

                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <div className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                </div>

                {/* Dashboard cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <FaUsers />,
                      value: "CRM",
                    },
                    {
                      icon: <FaChartLine />,
                      value: "Sales",
                    },
                    {
                      icon: <FaDatabase />,
                      value: "Finance",
                    },
                    {
                      icon: <FaCloud />,
                      value: "AMC",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                        {item.icon}
                      </div>

                      <p className="mt-4 font-bold text-white">
                        {item.value}
                      </p>

                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${55 + index * 10}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + index * 0.1,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom analytics */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Business Performance
                      </p>

                      <p className="mt-1 text-2xl font-black text-white">
                        +38.6%
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                      <FaBolt />
                    </div>
                  </div>

                  <div className="mt-5 flex h-20 items-end gap-2">
                    {[35, 50, 42, 65, 55, 75, 68, 90, 82, 100].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            height: 0,
                          }}
                          whileInView={{
                            height: `${height}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.05,
                          }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 opacity-80"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <FaShieldAlt />
                </div>

                <div>
                  <p className="text-sm font-black text-gray-900">
                    Secure & Reliable
                  </p>

                  <p className="text-xs text-gray-500">
                    Enterprise ready
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 px-6 py-28 sm:px-8">

        {/* Gradient blobs */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <motion.div
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
            duration: 0.7,
          }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-200 backdrop-blur-md">
            <FaRocket />
            Start Your Digital Transformation
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Build a
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Smarter Business?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Discover how vTech ERP can simplify your operations,
            connect your teams and help your business grow faster.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/book-demo"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-bold text-white shadow-2xl shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/50"
            >
              Book Free Demo

              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Talk to Our Experts
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              No setup hassle
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              Scalable platform
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              Dedicated support
            </span>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Serverices;