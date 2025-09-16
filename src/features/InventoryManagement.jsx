import React from 'react'
import features from "../data/features";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import inventoyImage from "../assets/inventoyImage.jpg";
import webDevServicesImage from "../assets/webDevServicesImage.jpg";
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
const InventoryManagement = () => {
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
            Inventory Management 
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
refers to the process of ordering, storing, tracking, and controlling a company’s inventory. This includes raw materials, components, and finished products. The goal of inventory
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            management is to ensure that a business always has the right amount of inventory in the right place at the right time, minimizing costs while meeting customer demands.</p>



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
               src={inventoyImage}
               alt="About SAPEAGLE ERP"
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
               Inventory  Management
             </h2>
     
             <p className="text-lg leading-relaxed">
                  Functions of Inventory Management
             </p>
             <ul className="space-y-3">
               {[
                 {
                   title: "Stock Tracking",
                   desc: ""
                 },
                 {
                   title: "Reorder Point Calculation",
                   desc: ""
                 },
                 {
                   title: "Storge Mangement",
                   desc: ""
                 },
                 {
                   title: "Demand Forcasting",
                   desc: ""
                 },
                 {
                    title:"Inventory Valuation"
                 },
                 {
                    title:"Reorder Point"
                 },{
                    title:"Demand Forcasting"
                 },
                 {
                    title:"Storage"
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








           <Motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ type: "spring", stiffness: 120, damping: 12 }}
             className="max-w-7xl mx-auto px-6 py-12"
           >
             <div className="space-y-6">
            
           
               <div className="space-y-6 text-lg leading-relaxed">
                 <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
                   <span className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                     {/* Management: */}
                   </span> The system alerts the store manager when stock falls below 20 coats, signaling it's time to :
                 </p>
           
                 <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
                   <span className="font-bold text-xl bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    Stock Levels :
                   </span> The store uses an inventory management system to track how many coats are in.
                 </p>
           
                 <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
                   <span className="font-bold text-xl bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                     Reorder Point:
                   </span>The system alerts the store manager when stock falls below 20 coats, signaling it's time to order more.
                 </p>
           
                 <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
                   <span className="font-bold text-xl bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                     Demand Forecasting:
                   </span> Based on past data, the manager estimates they’ll sell 100 coats in December.
                 </p>
           
                 <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
                   <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                     Storage:
                   </span> Coats are organized in the warehouse by size and color for easy access
                 </p>
           
                 <p className="hover:scale-[1.02] transition-transform duration-300 hover:text-red-500">
                   <span className="font-bold text-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
                     Outcome:
                   </span> With efficient inventory management, the store avoids running out of stock during peak season
                 </p>
           
           
           
               </div>
             </div>
           </Motion.div>













      </div>
    </section>
  );
}

export default InventoryManagement
