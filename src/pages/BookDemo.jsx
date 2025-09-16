import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const sectors = [
  "Industrial Machinery and Supplies",
  "Mechanical Tools and Supplies",
  "Automotive, Parts & Spares",
  "Chemicals and Solvents",
  "Plastic and Polymers",
  "Instruments and Equipments",
  "Building and Construction",
  "Food and Beverage",
  "Cosmetics and Personal Care",
  "FMCG",
  "Fashion Accessories & Supplies",
  "Handicrafts and Decoratives",
  "Furniture & Supplies",
  "Packaging Machines and Materials",
  "Petroleum",
  "Drugs and Medical",
  "House and Office Supplies",
  "Others",
];

const industries = [
  "Elevators",
  "Escalators",
  "Counter & Design Manufacturing",
  "Solar Management",
  "Textile Manufacturing",
  "Ayurvedic Medicine Manufacturing",
  "Pharmacy Manufacturing",
  "Real Estate",
  "AC Manufacturing",
  "E-Riksha Manufacturing",
  "Hotel Management",
  "Pharma Manufacture",
  "Traders Management",
  "Customized Software Development",
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

const BookDemo = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [openSector, setOpenSector] = useState(false);
  const [openIndustry, setOpenIndustry] = useState(false);



  const [name , setName] = useState("");
  const [companyName , setCompanyName] = useState("");
  const [contact , setContact] = useState("");
  const [email,setEmail] = useState("");

    const handleSubmit = async(e)=>{
      e.preventDefault();

      try{
        const res = await axios.post("http://localhost:5000/api/bookdemo",{
          name,companyName,contact,email,sector:selectedSector,industry: selectedIndustry
        });
        alert(res.data.message);
        setName("");
        setCompanyName("");
        setContact("");
        setEmail("");

      }catch(error){
          alert(error.response?.data?.message || "Something went wrong");
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/40">
        
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0b2d27] text-white p-10 flex flex-col justify-center"
        >
          <h3 className="text-green-300 text-sm mb-3">Sign up for a demo</h3>
          <h1 className="text-4xl font-extrabold leading-snug mb-6">
           SAPEAGLE ERP <br /> PVT LTD
          </h1>

          <div className="space-y-5 text-gray-200">
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">📊</span>
              <p>
                <span className="font-semibold">Email Address</span> <br />
                info@sapeagleerp.com
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">✨</span>
              <p>
                <span className="font-semibold">CRM (Customer Relationship Management) is not just software – it's a</span> <br />
                powerful strategy to manage customer interactions, increase
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400 text-xl">💬</span>
              <p>
                <span className="font-semibold">5 star customer support</span> <br />
                Always ready to assist you with questions or issues. Talk to a human.
              </p>
            </div>
          </div>

          <div className="bg-yellow-300 text-black rounded-lg p-3 mt-8 text-center font-medium">
            Trusted by 100+ companies 
          </div>
        </motion.div>

        {/* RIGHT SECTION (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Book Your Demo
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e)=>  setCompanyName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="number"
              value={contact}
              onChange={(e)=> setContact(e.target.value)}
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              value={email}
              onChange={(e)=>     setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl p-3 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />

            {/* Sector Dropdown */}
            <div className="relative">
              <div
                onClick={() => setOpenSector(!openSector)}
                className="cursor-pointer border border-gray-300 rounded-xl p-3 bg-white/60 shadow-sm flex justify-between items-center"
              >
                <span className="text-gray-700">
                  {selectedSector || "Select Your Sector"}
                </span>
                <motion.span animate={{ rotate: openSector ? 180 : 0 }}>▼</motion.span>
              </div>

              <AnimatePresence>
                {openSector && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-y-auto max-h-48 z-10"
                  >
                    {sectors.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedSector(item);
                          setOpenSector(false);
                        }}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 transition"
                      >
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* Industry Dropdown */}
            <div className="relative">
              <div
                onClick={() => setOpenIndustry(!openIndustry)}
                className="cursor-pointer border border-gray-300 rounded-xl p-3 bg-white/60 shadow-sm flex justify-between items-center"
              >
                <span className="text-gray-700">
                  {selectedIndustry || "Select Industry"}
                </span>
                <motion.span animate={{ rotate: openIndustry ? 180 : 0 }}>▼</motion.span>
              </div>

              <AnimatePresence>
                {openIndustry && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-y-auto max-h-48 z-10"
                  >
                    {industries.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedIndustry(item);
                          setOpenIndustry(false);
                        }}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 transition"
                      >
                        {item}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-xl hover:shadow-blue-400/40 text-white font-bold py-3 rounded-xl shadow-md transition duration-300"
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookDemo;
