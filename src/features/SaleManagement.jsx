import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import features from "../data/features";
import discount from "../assets/discount.jpg";

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

const SaleManagement = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        
        {/* Left Side - Description */}
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Sales Management
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            The process of planning, implementing, and controlling the activities of a sales team to achieve specific sales objectives for a business. 
            It involves setting goals, developing strategies, managing resources, and guiding the sales force to achieve optimal performance.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Sales management is the process of planning, organizing, directing, and controlling the sales activities of an organization. 
            It involves overseeing a team of salespeople and ensuring that they meet their targets and contribute to the business's overall success.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            It focuses on setting goals, developing strategies, providing training and motivation to the sales team, and analyzing performance to improve efficiency.
          </p>
        </Motion.div>

        {/* Right Side - Features */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-2xl p-6 grid grid-cols-2 gap-4"
        >
          {features.map((feature, i) => (
            <Motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#EFF6FF",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              }}
              className="text-center py-3 px-4 rounded-xl border border-gray-200 cursor-pointer transition-all duration-300"
            >
              <Link to={feature.link} className="text-sm font-semibold text-gray-800">
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
        <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full blur-2xl opacity-30" />
        <img
          src={discount}
          alt="About vTechSoftware ERP"
          className="rounded-3xl shadow-xl max-w-full hover:scale-105 transition-transform duration-500"
        />
      </Motion.div>

      {/* Right Side Text */}
      <Motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="text-gray-700 space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Examples of Manufacturing
        </h2>

        <p className="text-lg leading-relaxed">
                    magine a company that sells electronic gadgets. The sales manager would
        </p>

        <ul className="space-y-3">
          {[
            {
              title: "Set Sales Goals",
              desc: "Define clear targets for revenue, units sold, and market expansion."
            },
            {
              title: "Develop Strategies",
              desc: "Create plans to reach potential customers and close deals."
            },
            {
              title: "Lead the Sales Team",
              desc: "Recruit, train, and motivate sales representatives to perform at their best."
            },
            {
              title: "Monitor and Evaluate",
              desc: "Track sales performance and adjust strategies as needed to meet objectives."
            }
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

        <p className="text-lg leading-relaxed">
          Our mission is to empower businesses with technology that fosters growth, collaboration,
          and success in today’s competitive market.
        </p>

      </Motion.div>
    

      </div>
    </section>
  );
};

export default SaleManagement;
