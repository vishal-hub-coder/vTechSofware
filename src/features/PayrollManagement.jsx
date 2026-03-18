import { motion as Motion } from "framer-motion";
import React from "react";
import features from "../data/features";
import { Link } from "react-router-dom";
import saleImage from "../assets/employeesImge.jpg";

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

const PayrollManagement = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
      {/* FIXED GRID CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left Side Description */}
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Payroll Management
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            The process of handling all aspects of employee compensation,
            bonuses, and deductions. It ensures that employees are paid
            accurately and on time while complying with labor laws, tax
            regulations, and company policies. Maintaining records of employees'
            personal and job-related information. Tracking working hours, leave,
            and overtime.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Including the calculation, distribution, and documentation of
            salaries, wages.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Bonuses and deductions. It ensures that employees are paid accurately
            and on time while complying with labor laws, tax regulations, and
            company policies.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Maintaining records of employees' personal and job-related
            information. Tracking working hours, leave, and overtime.
          </p>
        </Motion.div>

        {/* Right Side Feature Cards */}
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








                    
     
           <Motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
             className="relative flex justify-center"
           >
             <div className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full blur-2xl opacity-30" />
             <img
               src={saleImage}
               alt="About vTechSoftware ERP"
               className="rounded-3xl shadow-xl w-[400px] hover:scale-105 transition-transform duration-500"
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
               Key Components of Payroll Management
             </h2>
     
             <p className="text-lg leading-relaxed">
                        Computing gross wages based on hours worked or agreed-upon salaries.Deducting taxes, insurance, retirement contributions, and other withholdings.
             </p>
     
             <ul className="space-y-3">
               {[
                 {
                   title: "Employee Data Management",
                   desc: ""
                 },
                 {
                   title: "Salary Calculations",
                   desc: ""
                 },
                 {
                   title: "Tax Compliance",
                   desc: ""
                 },
                 {
                   title: "Payments",
                   desc: ""
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

     
           </Motion.div>



      </div>
    </section>
  );
};

export default PayrollManagement;
