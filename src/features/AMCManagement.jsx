import React from "react";
import features from "../data/features";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import AmcImage from "../assets/AmcImage.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const AMCManagement = () => {
  return (
    <>
      {/* ======================== MAIN SECTION ========================== */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
          {/* LEFT DESCRIPTION */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              AMC Management
            </h2>

            <p className="text-lg leading-relaxed text-gray-700">
              Annual Maintenance Contract (AMC) ek service agreement hota hai jisme
              company aapke equipment, systems ya products ki regular maintenance,
              servicing aur support provide karti hai. AMC ka main purpose hota hai
              downtime ko kam karna aur equipment ki life ko increase karna.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Isme preventive maintenance, emergency breakdown support, scheduled
              inspections, performance testing aur on-site technician visits include hote hain.
            </p>
          </Motion.div>

          {/* RIGHT FEATURE CARDS */}
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-8 grid grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <Motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f0faff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                }}
                className="text-center py-4 px-4 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300"
              >
                <Link
                  to={feature.link}
                  className="text-sm font-semibold text-gray-800 hover:text-blue-600"
                >
                  {feature.name}
                </Link>
              </Motion.div>
            ))}
          </Motion.div>

          {/* AMC IMAGE */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="relative flex justify-center"
          >
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full blur-2xl opacity-30" />
            <img
              src={AmcImage}
              alt="AMC Services"
              className="rounded-3xl shadow-xl max-w-full hover:scale-105 transition-transform duration-500"
            />
          </Motion.div>

          {/* RIGHT SIDE DETAILED CONTENT */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-gray-700 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AMC Services & Coverage
            </h2>

            <p className="text-lg leading-relaxed">
              AMC ke under company aapke equipment ko smooth aur error-free chalane ke liye
              multiple types of maintenance activities provide karti hai.
            </p>

            <ul className="space-y-3">
              {[
                {
                  title: "Preventive Maintenance",
                  desc: "Regular inspection, cleaning, testing and performance optimization.",
                },
                {
                  title: "Emergency Support",
                  desc: "Breakdown calls ka quick response — remote ya on-site support.",
                },
                {
                  title: "On-Site Technician Visits",
                  desc: "Scheduled visits as per AMC plan to ensure continuous equipment performance.",
                },
                {
                  title: "Parts & Replacement",
                  desc: "Comprehensive AMC me parts included, Non-Comprehensive me chargeable.",
                },
              ].map((item, index) => (
                <Motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-5 h-5 flex-shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <span className="font-semibold">{item.title}:</span> {item.desc}
                  </span>
                </Motion.li>
              ))}
            </ul>
          </Motion.div>
        </div>
      </section>

      {/* ======================= TYPES OF AMC ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-10">
            Types of AMC
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Comprehensive AMC",
                desc: "Parts + Service + Full Maintenance included.",
              },
              {
                title: "Non-Comprehensive AMC",
                desc: "Only repair & service. Parts chargeable.",
              },
              {
                title: "Service Contract",
                desc: "Periodic maintenance but breakdown not included.",
              },
              {
                title: "On-Call AMC",
                desc: "Requirement ke hisab se visit. No fixed contract.",
              },
            ].map((item, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-blue-50 border rounded-xl shadow hover:bg-blue-100 transition"
              >
                <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= AMC WORKFLOW ======================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-12">
            AMC Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              "Service Request",
              "Technician Visit",
              "Diagnosis & Repair",
              "Report & Verification",
              "Maintenance Renewal",
            ].map((step, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white shadow-lg rounded-2xl border"
              >
                <div className="text-2xl font-bold text-blue-600">{i + 1}</div>
                <p className="text-gray-700 mt-2">{step}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= INDUSTRIES SERVED ======================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-10">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Corporate Offices",
              "Hotels & Resorts",
              "Hospitals & Clinics",
              "Manufacturing Plants",
              "Educational Institutions",
              "Retail & Shopping Malls",
            ].map((item, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-blue-50 shadow rounded-xl border text-lg font-semibold"
              >
                {item}
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= EQUIPMENT COVERED ======================= */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-blue-700 text-center mb-10">
            Equipment Covered Under AMC
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            {[
              "Computers, Laptops & Servers",
              "CCTV & Security Systems",
              "Networking Devices",
              "Biometric Attendance Machines",
              "Printers, Scanners & Copiers",
              "Access Control Systems",
              "EPABX & Telecom Systems",
              "Fire Alarm Systems",
              "Industrial Machines & Panels",
            ].map((item, i) => (
              <Motion.li
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 bg-white p-4 border shadow rounded-xl"
              >
                <span className="text-blue-600 text-xl font-bold">•</span>
                {item}
              </Motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================= WHY CHOOSE US ======================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-10">
            Why Choose Our AMC?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "24/7 Support",
              "Certified Engineers",
              "Fast Response Time",
              "High Quality Spare Parts",
            ].map((item, i) => (
              <Motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-blue-50 border rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold text-blue-700">{item}</h3>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CTA SECTION ======================= */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Need AMC For Your Company?</h2>
        <p className="text-lg mb-6">
          Contact us today for custom AMC packages and expert technical support.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:bg-blue-50 transition">
          Request AMC Quote
        </button>
      </section>
    </>
  );
};

export default AMCManagement;
