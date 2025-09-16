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
} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const services = [
  {
    icon: <FaUsers className="text-blue-600 text-5xl mb-4" />,
    title: "CRM",
    link: "/crm-feature-section",
    description:
      "This is a strategy, technology, and process for managing a company's interactions with customers, improving relationships and driving sales growth.",
  },
  {
    icon: <FaCogs className="text-green-600 text-5xl mb-4" />,
    title: "ERP",
    link: "/erp-feature-section",
    description:
      "This is a type of software system used by organizations to manage and integrate the core processes of their business in a unified system...",
  },
  {
    icon: <FaChartLine className="text-purple-600 text-5xl mb-4" />,
    title: "Sales Management",
    link: "/sales-management",
    description:
      "Sales Management helps track leads, monitor performance, and optimize your sales funnel for better revenue growth.",
  },
  {
    icon: <FaDatabase className="text-orange-600 text-5xl mb-4" />,
    title: "Payroll Management",
    link: "/payroll-management",
    description:
      "Payroll management refers to the administration and organization of the financial records and systems used to manage employee compensation.",
  },
  {
    icon: <AiFillAppstore className="text-red-600 text-5xl mb-4" />,
    title: "Services Management",
    link: "/services-mnagement",
    description:
      "Payroll Services Management refers to the comprehensive process of managing employee compensation, including salaries, wages, bonuses, deductions, and tax withholdings.",
  },
  {
    icon: <FaCloud className="text-cyan-600 text-5xl mb-4" />,
    title: "AMC Management",
    link: "/cloud-solutions",
    description:
      "AMC stands for Annual Maintenance Contract or Asset Management Company. It ensures your assets and systems are managed and maintained effectively.",
  },
  {
    icon: <FaRobot className="text-pink-600 text-5xl mb-4" />,
    title: "Inventory Management",
    link: "/inventory-management",
    description:
      "Inventory Management is the process of efficiently overseeing the procurement, storage, and usage of materials or products that a business maintains in stock.",
  },
  {
    icon: <FaMobileAlt className="text-indigo-600 text-5xl mb-4" />,
    title: "Accounting Management",
    link: "/account-management",
    description:
      "Accounting is the process of systematically recording, measuring, analyzing, and communicating financial information about an organization or individual.",
  },
];

const Serverices = () => {
  return (
    <motion.section
      className="bg-gray-100 py-16 px-6"
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900">
          Explore Our Services
        </h1>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {services.map((service, index) => (
          <Link key={index} to={service.link}>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:scale-105 cursor-pointer min-h-[350px] w-[280px]"
              whileHover={{ y: -8 }}
            >
              {service.icon}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-blue-600 font-semibold hover:underline">
                Learn More →
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Serverices;
