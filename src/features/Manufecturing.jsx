import React from "react";
import { motion as Motion } from "framer-motion";
import workerImages from "../assets/worker.jpg";
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

const Manufecturing = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
 
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Manufacturing
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Manufacturing is the process of converting raw materials or
            components into finished goods through the use of tools, machines,
            labor, and technology.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            It involves a series of steps to produce items at various scales,
            from small batches to mass production. Our group works with specific
            corporations to convert identified thoughts into beautiful batches
            ready for market. Manufacturing plays a vital role in industries
            such as automotive, electronics, food processing, textiles, and
            more.
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
                backgroundColor: "#f0fff4",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
              className="text-center py-4 px-4 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <Link
                to={feature.link}
                className="text-sm font-semibold text-gray-800 hover:text-green-600"
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
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-green-100 to-green-300 rounded-full blur-2xl opacity-30" />
          <img
            src={workerImages}
            alt="Manufacturing process"
            className="rounded-3xl shadow-xl max-w-full hover:scale-105 transition-transform duration-500"
          />
        </Motion.div>





















        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-gray-700 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Examples of Manufacturing
          </h2>

          <p className="text-lg leading-relaxed">
            Manufacturing plays a significant role in the following industries:
          </p>

          <ul className="space-y-3">
            {[
              "Automotive Industry",
              "Textile Industry",
              "Electronics Industry",
              "Food Processing",
            ].map((industry, index) => (
              <Motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="w-5 h-5 flex-shrink-0 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="font-semibold">{industry}</span>
              </Motion.li>
            ))}
          </ul>
        </Motion.div>
      </div>
    </section>
  );
};

export default Manufecturing;
