import React from "react";
import { motion } from "framer-motion";
import crmImage from "../assets/crm-mangement.svg";
import whyCrmImage from "../assets/why-crm.svg";
import { FaCogs, FaMobileAlt, FaCloud, FaSync, FaWrench, FaDatabase, FaPlug, FaRocket, FaExchangeAlt } from "react-icons/fa";

const crmModules = [
  {
    title: "CRM Module Development",
    description:
      "We are proficient in thoughtfully designing and integrating custom CRM solutions and different modules like performance analysis, KPI tracking, task creation, etc.",
    icon: <FaCogs className="text-purple-600 text-2xl" />,
  },
  {
    title: "CRM Mobile Applications",
    description:
      "The mobile applications assist in connecting to a broader audience in less time. Let your users access the CRM system from anywhere.",
    icon: <FaMobileAlt className="text-purple-600 text-2xl" />,
  },
  {
    title: "Cloud CRM Software Development",
    description:
      "Our CRM team can help create and implement CRM on-premise and in the cloud using proven methodology and practices.",
    icon: <FaCloud className="text-purple-600 text-2xl" />,
  },
  {
    title: "CRM Maintenance and Upgrades",
    description:
      "We provide dedicated maintenance and upgrade support services 24/7 to ensure your system stays up-to-date and running smoothly.",
    icon: <FaSync className="text-purple-600 text-2xl" />,
  },
  {
    title: "CRM Software Customization",
    description:
      "We excel in customizing your existing CRM software to boost productivity, automate workflows, and streamline processes.",
    icon: <FaWrench className="text-purple-600 text-2xl" />,
  },
  {
    title: "CRM Database Management",
    description:
      "We can help create CRM databases with search functions, record/document management, and integrate multiple databases for insights.",
    icon: <FaDatabase className="text-purple-600 text-2xl" />,
  },
  {
    title: "CRM System Integration",
    description:
      "Our skilled CRM developers can seamlessly integrate CRM software into third-party or custom business systems.",
    icon: <FaPlug className="text-purple-600 text-2xl" />,
  },
  {
    title: "CRM Implementation",
    description:
      "Our CRM team specializes in reliable, efficient implementation solutions with precision and industry best practices.",
    icon: <FaRocket className="text-purple-600 text-2xl" />,
  },
  {
    title: "CRM Migration",
    description:
      "We ensure secure migration from existing systems to new CRM solutions, safely extracting and transferring your data.",
    icon: <FaExchangeAlt className="text-purple-600 text-2xl" />,
  },
];

const Crm = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-200 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* MAIN HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* LEFT SIDE TEXT */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Transform Your Business with{" "}
            <span className="text-blue-600">CRM Management</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            CRM (Customer Relationship Management) is not just software – 
            it's a powerful strategy to manage customer interactions, 
            increase retention, and boost your sales growth.
          </motion.p>

          {/* Bullet Points */}
          <ul className="space-y-3">
            {[
              "Streamlined customer data management",
              "Automated workflows & reporting",
              "Better communication with customers",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-2xl shadow-lg hover:from-blue-700 hover:to-blue-900 transition duration-300"
          >
            Get Started
          </motion.button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.img
            src={crmImage}
            alt="CRM Illustration"
            className="w-full max-w-md rounded-2xl shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* CUSTOM CRM DESCRIPTION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full mt-20 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 text-center border border-gray-200"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-snug">
          Custom{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
            CRM Software Development Services
          </span>
        </h2>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          <span className="font-semibold text-gray-900">Custom CRM software</span> helps businesses build
          strong customer relationships by centralizing data, automating sales processes, and improving
          communication. <br /><br />
          Our solutions focus on{" "}
          <span className="text-purple-600 font-medium">efficiency</span>,
          <span className="text-purple-600 font-medium"> transparency</span>, and
          <span className="text-purple-600 font-medium"> scalability</span> — giving you the competitive edge
          your business deserves.
          <br /><br />
          As a <span className="font-semibold text-gray-900">leading CRM development company</span> in
          Noida, India, we deliver
          <span className="text-purple-600 font-medium"> tailored, feature-rich CRM solutions</span> that
          fit your unique business needs and accelerate enterprise growth.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-base font-medium rounded-2xl shadow-md hover:shadow-lg transition duration-300"
        >
          Explore Our CRM Solutions
        </motion.button>
      </motion.div>

      {/* =====  FLIP CARD SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="w-full mt-20 px-6 md:px-12"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Explore Our <span className="text-purple-600">CRM Modules</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {crmModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative w-full h-64 perspective"
            >
              {/* CARD WRAPPER */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center border border-gray-100 backface-hidden">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg mb-3">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center px-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center px-4 mt-2">
                    Hover to learn more
                  </p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl shadow-xl p-5 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden">
                  {module.icon}
                  <h3 className="text-lg font-bold mb-2">{module.title}</h3>
                  <p className="text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>




<motion.section
  id="crm-lead-management"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="w-full mt-20 bg-white shadow-xl rounded-3xl p-10 md:p-16 border border-gray-100"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT SIDE - HEADING + DESCRIPTION */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Benefits of Availing
      </h2>
      <h4 className="font-bold ">Custom CRM Software Development Solutions</h4>
      <p className="text-gray-700 text-lg leading-relaxed">
        CRM Lead Management allows you to capture, track, and nurture leads efficiently.
        It ensures no opportunity is missed, automates follow-ups, and helps your
        sales team convert prospects into loyal customers faster.
      </p>
    </div>

    {/* RIGHT SIDE - BENEFITS WITH ✅ */}
    <div className="space-y-4">
      {[
        "The business can provide a competitive gain over others by adopting unique CRM solutions.",
        "Custom CRM software helps to pay for what your business requires and uses.",
        "It has the flexibility to change or upgrade at any point in time when the business requirement comes.",
        "You can scale the existing system anytime with the growing and changing business requirements.",
        "You do not require any training on the CRM platform as it is intuitive, user-friendly, and understandable.",
        "The custom CRM platforms are secure and flexible, and one can apply high-end security mechanisms to make them safe.",
      ].map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <span className="text-green-600 text-xl mt-1">✔</span>
          <p className="text-gray-700 text-base">{point}</p>
        </motion.div>
      ))}

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="pt-6"
      >
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
          CRM Lead Management
        </button>
      </motion.div>
    </div>
  </div>
</motion.section>

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full mt-20 relative"
>
  <div className="max-w-6xl mx-auto px-6">
    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
    >
      Explore Our CRM Solutions
    </motion.h2>

    {/* GRID CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Analytical CRM",
          desc: "Boost customer retention, acquire new leads, and keep your data clean and relevant with advanced analytics.",
          icon: "📊",
        },
        {
          title: "Strategic CRM",
          desc: "Capture customer and market insights to deliver value-driven strategies and improve satisfaction.",
          icon: "🎯",
        },
        {
          title: "Collaborative CRM",
          desc: "Enhance communication by integrating tools, data, and channels to strengthen relationships.",
          icon: "🤝",
        },
        {
          title: "Operational CRM",
          desc: "Automate sales, marketing, and service workflows to streamline customer-facing operations.",
          icon: "⚡",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-start hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200"
        >
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>






<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="w-full mt-20"
>
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT SIDE - IMAGE WITH BIGGER GRADIENT BORDER + GLOW */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex justify-center"
    >
      <div className="relative p-[6px] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 
        shadow-[0_0_40px_rgba(168,85,247,0.6)]">
        <img
          src={whyCrmImage}
          alt="CRM Solutions"
          className="w-96 h-96 object-cover rounded-full shadow-[0_0_60px_rgba(236,72,153,0.5)]"
        />
      </div>
    </motion.div>

    {/* RIGHT SIDE - CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-100 p-10 md:p-12 rounded-3xl shadow-xl border border-indigo-100"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Opt for CRM Solutions
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        As a well-established and reputed custom CRM software development company in India,
        we have experience and expertise in creating and implementing automated CRM software
        in your business. Our services are top-notch, catering to businesses of all domains and sizes.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Our team of expert CRM developers has built many enterprise-grade solutions that helped
        our clientele attain better database management, marketing, and access to real-time
        consumer data instantly.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Additionally, our dedicated technical support team will be there at your service round the clock
        for further support, any assistance, maintenance, or upgrade of the CRM software system.
        Feel free to share your CRM requirement with us today to build a lasting relationship with
        clients, enhance the productivity and efficacy of your business, and stay ahead in this
        tech-savvy competitive industry.
      </p>
    </motion.div>
  </div>
</motion.section>



    </section>
  );
};

export default Crm;
