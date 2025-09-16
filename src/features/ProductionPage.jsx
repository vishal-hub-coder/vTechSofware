import React from "react";
import { motion as Motion } from "framer-motion";
import productionImage from "../assets/inventoyImage.jpg";
import { Link } from "react-router-dom";
import features from "../data/features";

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

const ProductionPage = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
      
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            ERP Production
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Production in ERP (Enterprise Resource Planning) refers to planning,
            scheduling, monitoring, and controlling manufacturing activities. It
            ensures that resources such as raw materials, labor, and machinery
            are effectively utilized to deliver products on time and at optimal
            cost.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            ERP Production modules integrate with inventory, procurement, and
            sales to streamline the entire process — from raw material planning
            to finished goods delivery. This improves efficiency, reduces waste,
            and helps meet customer demand effectively.
          </p>
        </Motion.div>

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
                backgroundColor: "#faf5ff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
              className="text-center py-4 px-4 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <Link
                to={feature.link}
                className="text-sm font-semibold text-gray-800 hover:text-purple-600"
              >
                {feature.name}
              </Link>
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          className="relative flex justify-center"
        >
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-purple-100 to-purple-300 rounded-full blur-2xl opacity-30" />
          <img
            src={productionImage}
            alt="ERP Production"
            className="rounded-3xl shadow-xl max-w-full hover:scale-105 transition-transform duration-500"
          />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-gray-700 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent">
            Key Functions of ERP Production
          </h2>

          <ul className="space-y-3">
            {[
              { title: "Production Planning", desc: "Helps forecast and plan production schedules." },
              { title: "Bill of Materials (BOM)", desc: "Defines the raw materials and components needed for production." },
              { title: "Shop Floor Control", desc: "Tracks real-time production progress and resource usage." },
              { title: "Capacity Planning", desc: "Ensures machines and labor are allocated efficiently." },
              { title: "Quality Control", desc: "Monitors production quality at every stage." },
              { title: "Cost Management", desc: "Tracks costs of raw materials, labor, and overhead." },
            ].map((item, index) => (
              <Motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-5 h-5 flex-shrink-0 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>
                  <span className="font-semibold">{item.title}:</span>{" "}
                  {item.desc}
                </span>
              </Motion.li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
};

export default ProductionPage;
