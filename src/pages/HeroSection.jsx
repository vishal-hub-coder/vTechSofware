import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/hero-img.png";
// import { FaComments } from "react-icons/fa";
// import Chatbot from "../chatbot/Chatbot";

const HeroSection = () => {
  const [showChat, setShowChat] = useState(false);

  const text = "Arise Awake and stop not Till the Goal is Reached";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (index < text.length) {
      interval = setInterval(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        
        setDisplayText("");
        
        setIndex(0);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <section className="bg-gradient-to-br from-[#240303] to-[#96aff5] text-white relative overflow-hidden">
     
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">
        


        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-snug tracking-wide"
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8 }}
          >
            {displayText}
            <span className="border-r-2 border-white animate-pulse ml-1" />
          </motion.h1>

        

         
        </motion.div>

       


       
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <motion.img
            src={Image1}
            alt="Hero"
            className="max-w-xs md:max-w-md drop-shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
{/* 
      <motion.button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <FaComments className="w-6 h-6" />
      </motion.button> */}

      {/* {showChat && <Chatbot />} */}
    </section>
  );
};

export default HeroSection;
