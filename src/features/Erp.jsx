import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import erpImage from "../assets/erpImages.jpg";
import imgggggg from "../assets/imgggggg.jpg"
const listVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
  }),
};

const features = [
  { name: "SALE'S CRM", link: "/crm-feature-section" },
  { name: "CORE ERP", link: "/erp" },
  { name: "Payroll Management", link: "/payroll-management" },
  { name: "Inventory Management", link: "/inventory-management" },
  { name: "Project Management", link: "/product-management" },
  { name: "Production", link: "/production" },
  { name: "Process Management", link: "/process-management" },
  { name: "Service and complaint", link: "/sevice-and-complaint" },
  { name: "AMC & CMC", link: "/amc-cmc" },
  {name:"Accounting",link:"/accounting"},
];

const Erp = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-20">
          {/* Left Content */}
          <Motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Next-Gen <span className="text-blue-700">ERP Solutions</span>
            </h1>
            <p className="text-gray-700 text-lg max-w-lg">
              ERP stands for Enterprise Resource Planning, a type of software that
              organizations use to manage and integrate their core business processes.
              It provides a centralized system that enables the smooth flow of
              information across departments, improving efficiency, reducing duplication,
              and enhancing decision-making.
            </p>
          </Motion.div>

          {/* Right Image */}
          <Motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="flex justify-center"
          >
            <img
              src={erpImage}
              alt="ERP Dashboard"
              className="w-full max-w-lg drop-shadow-2xl rounded-3xl transform hover:scale-105 transition duration-500"
            />
          </Motion.div>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-16 text-blue-700"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,120 960,0 1440,120 L1440,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-100 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {/* Left - Challenges */}
          <Motion.div
            initial={{ opacity: 0, rotate: -2, y: 40 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Business Challenges
            </h3>
            <ul className="space-y-4">
              {[
                "Sales Inventory",
                "Teams Work",
                "Sales Data",
                "Inventory Leading",
                "Accounting Struggles",
                "ERP",
                "Oracle NetSuite",
              ].map((item, i) => (
                <Motion.li
                  key={i}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="text-gray-700 text-lg pl-2 border-l-4 border-blue-500"
                >
                  {item}
                </Motion.li>
              ))}
            </ul>
          </Motion.div>

          {/* Right - Features */}
          <Motion.div
            initial={{ opacity: 0, rotate: 2, y: 40 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              All Features
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <Motion.div
                  key={i}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="bg-blue-50 px-4 py-2 rounded-lg shadow hover:shadow-md transition"
                >
                  <Link to={feature.link} className="block text-gray-900 font-medium">
                    {feature.name}
                  </Link>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>




                  {/* Discription Section */}


<Motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
  className="max-w-7xl mx-auto px-6 py-12"
>
  <div className="space-y-6">
    <p className="text-center text-3xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-md tracking-wide">
      Company-Wide Solutions & Services
    </p>

    <div className="space-y-6 text-lg leading-relaxed">
      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Management:
        </span> Management has access to dashboards showing company-wide performance metrics.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
          SAP ERP:
        </span> Creating websites that adapt to different screen sizes and devices for enhanced user experience.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
          Oracle NetSuite:
        </span> Designing and developing websites using Content Management Systems (CMS) such as WordPress, Drupal, or Joomla, allowing clients to manage and update their website content easily.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
          Microsoft Dynamics:
        </span> Creating customized ecommerce websites that provide a seamless user experience, optimized for conversions and sales.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Supply Chain Management:
        </span> Helping businesses migrate their existing ecommerce websites to the latest version of Magento for improved functionality and performance.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
          Human Resources:
        </span> Developing websites that prioritize mobile devices' user experience, ensuring optimal functionality and engagement across all devices.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text text-transparent">
          Finance:
        </span> Developing websites using the Laravel framework, which is known for its scalability, security, and performance.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          Customer Relationship Management:
        </span> Developing ecommerce websites using Shopify, a popular platform for online businesses, providing a wide range of features and integrations.
      </p>

      <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
        <span className="font-bold text-xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Manufacturing:
        </span> Designing and developing customized websites using WordPress, a popular CMS platform with extensive flexibility and functionality.
      </p>
    </div>
  </div>
</Motion.div>









<Motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
  className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
>
  {/* Left Side Image */}
  <div className="flex justify-center">
    <img
      src={imgggggg}
      alt="Company Dashboard"
      className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Right Side Text */}
  <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
      ERP (Enterprise Resource Planning)
    </h2>

    <p className="text-lg leading-relaxed text-gray-700">
     Type of business management software that helps organizations automate and integrate their core business processes. Think of it as a central hub that connects various departments and functions within a company, providing a unified view of all business activities.
    </p>


  </div>
</Motion.div>



<Motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
>
  <div className="w-[85%] min-h-[400px] rounded-2xl bg-white mx-auto my-20 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl">
    
    {/* Card 1 */}
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-bold mb-2">Analytics</h3>
      <p className="text-sm opacity-90">
        Professional and Creative Team
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
      <p className="text-sm opacity-90">
        Project Management System with full Plan
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-bold mb-2">Automation</h3>
      <p className="text-sm opacity-90">
        Personalized and Consultative Approach
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-bold mb-2">Support</h3>
      <p className="text-sm opacity-90">
       Timely Quality Control
      </p>
    </div>
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-bold mb-2">Support</h3>
      <p className="text-sm opacity-90">
       Experienced Team in the Industry
      </p>
    </div>

  </div>
</Motion.div>


<Motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
  className="max-w-7xl mx-auto px-6 py-12"
>
  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
    <p className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
      Monteage <span className="text-red-500">IT Solutions Pvt Ltd</span>
    </p>

    <p className="text-lg leading-relaxed text-gray-700">
      Monteage IT Solutions Pvt Ltd has a strong focus on <span className="font-semibold text-gray-900">professionalism, creativity,</span> and <span className="font-semibold text-gray-900">personalized solutions</span> when it comes to web design and development.
    </p>

    <p className="text-lg leading-relaxed text-gray-700">
      The company emphasizes the importance of fully planning and time-boxing project plans, ensuring that clients have full access to their project management system for transparency and accountability.
    </p>

    <p className="text-lg leading-relaxed text-gray-700">
      Their personalized and consultative approach to web design requirements is commendable, as they take the time to understand each client's <span className="font-semibold">brand, values,</span> and <span className="font-semibold">precise business needs</span> before beginning any project.
    </p>

    <p className="text-lg leading-relaxed text-gray-700">
      This approach helps create <span className="font-semibold text-gray-900">customized solutions</span> that meet each business's specific needs and goals.
    </p>
  </div>
</Motion.div>


    </div>
  );
};

export default Erp;
