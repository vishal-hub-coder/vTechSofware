import React from "react";
import { motion } from "framer-motion";

const AboutCompany = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="CRM and ERP illustration"
            className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Understanding CRM and ERP Systems
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            In the modern business world, efficiency and customer focus are key
            to success. CRM and ERP systems are essential tools that help
            companies achieve these goals effectively.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-4">What is CRM?</h3>
          <p className="text-gray-700 mb-4">
            Customer Relationship Management (CRM) is a strategy, technology,
            and process designed to manage a company's interactions with current
            and potential customers.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Automation of business processes</li>
            <li>Customer data analysis</li>
            <li>Improved communication</li>
            <li>Comprehensive integration</li>
            <li>Process automation</li>
            <li>Real-time analytics</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Benefits of CRM</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Improved customer retention through personalized interactions</li>
            <li>Streamlined sales and marketing efforts</li>
            <li>Enhanced productivity and collaboration</li>
            <li>
              Greater insights into customer behavior for better strategic
              planning
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg">
        <div>
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">What is ERP?</h3>
          <p className="text-gray-700 mb-4">
            Enterprise Resource Planning (ERP) is a type of software system used
            by organizations to manage and integrate core business processes in
            a unified system.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comprehensive integration</li>
            <li>Process automation</li>
            <li>Real-time analytics</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Benefits of ERP</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Improved operational efficiency</li>
            <li>Enhanced decision-making with real-time reporting</li>
            <li>Centralized data reduces duplication and errors</li>
            <li>Scalability to support growth</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Key Differences Between CRM and ERP
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Feature</th>
                <th className="px-6 py-3 text-left">CRM</th>
                <th className="px-6 py-3 text-left">ERP</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="px-6 py-3">Focus Area</td>
                <td>Customer relationships and sales growth</td>
                <td>Core business processes and efficiency</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3">Main Users</td>
                <td>Sales, marketing, and customer service teams</td>
                <td>Finance, HR, supply chain, manufacturing</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3">Primary Goal</td>
                <td>Improving customer retention and sales</td>
                <td>Streamlining processes and resources</td>
              </tr>
              <tr>
                <td className="px-6 py-3">Type of Data</td>
                <td>Customer-specific data</td>
                <td>Organizational data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">
          How CRM and ERP Work Together
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Integration ensures consistency across orders, payments, and service
          records. Combined insights improve decision-making and enhance the
          customer experience.
        </p>
      </div>



      <div className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Emerging Trends
        </h3>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <li className="p-4 bg-white rounded-xl shadow-md hover:scale-[1.02] transition">
            AI and Machine Learning: Optimizing predictions and enhancing
            processes.
          </li>
          <li className="p-4 bg-white rounded-xl shadow-md hover:scale-[1.02] transition">
            Cloud-Based Solutions: Offering flexibility and remote access.
          </li>
          <li className="p-4 bg-white rounded-xl shadow-md hover:scale-[1.02] transition">
            Mobile Optimization: Providing on-the-go access for employees.
          </li>
          <li className="p-4 bg-white rounded-xl shadow-md hover:scale-[1.02] transition">
            Blockchain: Enhancing security and transparency in operations.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutCompany;
