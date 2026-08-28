
import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTools,
  FaShieldAlt,
  FaClock,
  FaCogs,
  FaWrench,
  FaCheckCircle,
  FaBuilding,
  FaHospital,
  FaHotel,
  FaIndustry,
  FaGraduationCap,
  FaShoppingCart,
  FaServer,
  FaVideo,
  FaNetworkWired,
  FaFingerprint,
  FaPrint,
  FaKey,
  FaPhone,
  FaFireExtinguisher,
  FaArrowRight,
  FaHeadset,
  FaUserTie,
  FaBolt,
  FaClipboardCheck,
  FaSyncAlt,
} from "react-icons/fa";

import features from "../data/features";
import AmcImage from "../assets/AmcImage.jpg";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
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
  visible: {
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

const amcServices = [
  {
    title: "Preventive Maintenance",
    desc: "Regular inspection, cleaning, testing and performance optimization.",
    icon: FaTools,
  },
  {
    title: "Emergency Support",
    desc: "Fast response for breakdowns through remote or on-site support.",
    icon: FaBolt,
  },
  {
    title: "On-Site Technician",
    desc: "Scheduled technician visits to maintain reliable equipment performance.",
    icon: FaUserTie,
  },
  {
    title: "Parts & Replacement",
    desc: "Parts replacement support based on your AMC coverage plan.",
    icon: FaWrench,
  },
];

const amcTypes = [
  {
    title: "Comprehensive AMC",
    desc: "Parts, service and complete maintenance coverage.",
    icon: FaShieldAlt,
  },
  {
    title: "Non-Comprehensive AMC",
    desc: "Repair and service included while parts remain chargeable.",
    icon: FaTools,
  },
  {
    title: "Service Contract",
    desc: "Scheduled preventive maintenance for your equipment.",
    icon: FaClipboardCheck,
  },
  {
    title: "On-Call AMC",
    desc: "Technical visits based on your specific requirements.",
    icon: FaHeadset,
  },
];

const workflow = [
  {
    number: "01",
    title: "Service Request",
    desc: "Customer raises a service request.",
    icon: FaPhone,
  },
  {
    number: "02",
    title: "Technician Visit",
    desc: "Engineer visits the site.",
    icon: FaUserTie,
  },
  {
    number: "03",
    title: "Diagnosis & Repair",
    desc: "Problem is identified and resolved.",
    icon: FaWrench,
  },
  {
    number: "04",
    title: "Report & Verification",
    desc: "Service report is prepared and verified.",
    icon: FaClipboardCheck,
  },
  {
    number: "05",
    title: "Maintenance Renewal",
    desc: "AMC is reviewed and renewed.",
    icon: FaSyncAlt,
  },
];

const industries = [
  {
    title: "Corporate Offices",
    icon: FaBuilding,
  },
  {
    title: "Hotels & Resorts",
    icon: FaHotel,
  },
  {
    title: "Hospitals & Clinics",
    icon: FaHospital,
  },
  {
    title: "Manufacturing Plants",
    icon: FaIndustry,
  },
  {
    title: "Educational Institutions",
    icon: FaGraduationCap,
  },
  {
    title: "Retail & Shopping Malls",
    icon: FaShoppingCart,
  },
];

const equipment = [
  {
    title: "Computers, Laptops & Servers",
    icon: FaServer,
  },
  {
    title: "CCTV & Security Systems",
    icon: FaVideo,
  },
  {
    title: "Networking Devices",
    icon: FaNetworkWired,
  },
  {
    title: "Biometric Attendance",
    icon: FaFingerprint,
  },
  {
    title: "Printers & Scanners",
    icon: FaPrint,
  },
  {
    title: "Access Control Systems",
    icon: FaKey,
  },
  {
    title: "EPABX & Telecom Systems",
    icon: FaPhone,
  },
  {
    title: "Fire Alarm Systems",
    icon: FaFireExtinguisher,
  },
  {
    title: "Industrial Machines",
    icon: FaCogs,
  },
];

const benefits = [
  {
    title: "24/7 Support",
    desc: "Quick assistance whenever your business needs technical support.",
    icon: FaClock,
  },
  {
    title: "Certified Engineers",
    desc: "Experienced professionals for reliable maintenance services.",
    icon: FaUserTie,
  },
  {
    title: "Fast Response",
    desc: "Quick response helps minimize equipment downtime.",
    icon: FaBolt,
  },
  {
    title: "Quality Spare Parts",
    desc: "Reliable replacement parts for long-term performance.",
    icon: FaShieldAlt,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const AMCManagement = () => {
  return (
    <main className="overflow-hidden bg-slate-50">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

        {/* Background Glow */}
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />

        <Motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[15%] h-24 w-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        />

        <Motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[8%] h-16 w-16 rounded-full border border-blue-400/20 bg-blue-400/10"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 lg:grid-cols-2">

          {/* Hero Content */}

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white"
          >

            <Motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-200 backdrop-blur-xl"
            >
              <FaTools />
              Smart Maintenance Solutions
            </Motion.div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              AMC
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Management
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Keep your business infrastructure reliable, secure and
              operational with intelligent Annual Maintenance Contract
              solutions designed to reduce downtime and extend equipment life.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#amc-services"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore AMC Services
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Request a Quote
              </a>

            </div>

            {/* Stats */}

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5">

              {[
                ["24/7", "Support"],
                ["Fast", "Response"],
                ["Pro", "Engineers"],
              ].map(([value, label], index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  className="border-l border-white/20 pl-4"
                >
                  <div className="text-2xl font-black text-white">
                    {value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    {label}
                  </div>
                </Motion.div>
              ))}

            </div>

          </Motion.div>

          {/* Hero Image */}

          <Motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -inset-6 rounded-[3rem] bg-blue-500/20 blur-3xl" />

            <Motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
            >

              <img
                src={AmcImage}
                alt="AMC Management Services"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-slate-950/70 p-5 backdrop-blur-xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                    <FaShieldAlt />
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Reliable Equipment Protection
                    </p>

                    <p className="text-sm text-slate-300">
                      Preventive + Emergency Maintenance
                    </p>
                  </div>

                </div>

              </div>

            </Motion.div>

          </Motion.div>

        </div>

        {/* Bottom Curve */}

        <div className="absolute bottom-0 left-0 h-20 w-full bg-slate-50 [clip-path:ellipse(65%_55%_at_50%_100%)]" />

      </section>

      {/* =====================================================
          FEATURE NAVIGATION
      ===================================================== */}

      <section className="relative bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >

            <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
              ERP Modules
            </span>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              Explore All Features
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Explore powerful business management modules designed to
              simplify and automate your operations.
            </p>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
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
                className="group"
              >

                <Link
                  to={feature.link}
                  className="relative flex h-full min-h-[90px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
                >

                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative z-10 text-sm font-bold text-slate-700 transition-colors group-hover:text-blue-600">
                    {feature.name}
                  </span>

                </Link>

              </Motion.div>
            ))}

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section
        id="amc-services"
        className="relative overflow-hidden bg-white py-24"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <Motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
              <FaCogs />
              Complete Maintenance
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Keep Your Business
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Running Without Interruptions
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">

              <p>
                Annual Maintenance Contract (AMC) is a professional service
                agreement designed to provide regular maintenance, servicing
                and technical support for your equipment, systems and
                infrastructure.
              </p>

              <p>
                The primary objective of AMC management is to reduce downtime,
                improve equipment reliability and extend the operational life
                of your assets.
              </p>

              <p>
                From preventive inspections to emergency breakdown support,
                AMC ensures your critical systems remain operational and
                performing efficiently.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">

              {[
                "Reduced Downtime",
                "Better Equipment Life",
                "Scheduled Maintenance",
                "Technical Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <FaCheckCircle className="shrink-0 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </Motion.div>

          <Motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -inset-5 rounded-[3rem] bg-blue-100 blur-3xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-2xl">

              <img
                src={AmcImage}
                alt="AMC technical support"
                className="h-[500px] w-full rounded-[1.5rem] object-cover"
              />

            </div>

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          AMC SERVICES
      ===================================================== */}

      <section className="relative bg-slate-950 py-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >

            <span className="font-bold uppercase tracking-[0.3em] text-blue-400">
              Services & Coverage
            </span>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Everything Your Equipment Needs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              A complete maintenance ecosystem designed to keep your
              infrastructure reliable and business-ready.
            </p>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >

            {amcServices.map((item, index) => {
              const Icon = item.icon;

              return (
                <Motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl"
                >

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20" />

                  <div className="relative">

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-2xl text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon />
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-400">
                      {item.desc}
                    </p>

                  </div>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          TYPES OF AMC
      ===================================================== */}

      <section className="bg-gradient-to-b from-white to-blue-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >

            <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
              Flexible Plans
            </span>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Types of AMC
            </h2>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-4"
          >

            {amcTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-shadow hover:shadow-2xl hover:shadow-blue-100"
                >

                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-100 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                      <Icon />
                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600">
                      Learn More
                      <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-100 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >

            <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
              Simple Process
            </span>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              AMC Workflow
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              From service request to renewal, our structured workflow keeps
              every maintenance activity organized.
            </p>

          </Motion.div>

          <div className="relative">

            {/* Connecting Line */}

            <div className="absolute left-[10%] right-[10%] top-14 hidden h-px bg-blue-200 lg:block" />

            <Motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"
            >

              {workflow.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    className="relative text-center"
                  >

                    <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center rounded-full border-8 border-slate-100 bg-white text-blue-600 shadow-xl">

                      <div className="text-center">

                        <Icon className="mx-auto text-2xl" />

                        <span className="mt-1 block text-xs font-black">
                          {step.number}
                        </span>

                      </div>

                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.desc}
                    </p>

                  </Motion.div>
                );
              })}

            </Motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >

            <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
              Industries
            </span>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Industries We Serve
            </h2>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >

            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <Motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex items-center gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Professional AMC support
                      </p>
                    </div>

                  </div>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          EQUIPMENT
      ===================================================== */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >

            <span className="font-bold uppercase tracking-[0.3em] text-blue-600">
              Coverage
            </span>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Equipment Covered Under AMC
            </h2>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >

            {equipment.map((item, index) => {
              const Icon = item.icon;

              return (
                <Motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    x: 5,
                  }}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon />
                  </div>

                  <span className="font-semibold text-slate-700">
                    {item.title}
                  </span>

                  <FaArrowRight className="ml-auto text-sm text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600" />

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="bg-slate-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 text-center"
          >

            <span className="font-bold uppercase tracking-[0.3em] text-blue-400">
              Our Advantage
            </span>

            <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
              Why Choose Our AMC?
            </h2>

          </Motion.div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <Motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-2xl text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.desc}
                  </p>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 py-24"
      >

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-6 text-center text-white"
        >

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-xl">
            <FaHeadset />
          </div>

          <h2 className="text-4xl font-black md:text-6xl">
            Need AMC For Your Company?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Protect your business infrastructure with reliable maintenance,
            faster support and professional technical services.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50">
              Request AMC Quote
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
              <FaPhone />
              Talk to Expert
            </button>

          </div>

        </Motion.div>

      </section>

    </main>
  );
};

export default AMCManagement;

