import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const phoneNumber = "9910680809";

  const handleSend = () => {
    if (message.trim() === "") return;

    const newMsg = { text: message, type: "user" };
    setChat([...chat, newMsg]);

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* CALL BUTTON */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl flex items-center justify-center z-50"
        whileHover={{ scale: 1.15 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.3 }}
      >
        <FaPhoneAlt size={22} />
      </motion.a>

      {/* WHATSAPP BUTTON */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-xl flex items-center justify-center z-[999]"
        whileHover={{ scale: 1.15 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.3 }}
      >
        <FaWhatsapp size={28} />
      </motion.button>

     {/* whatsApp  */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.6, y: 40 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-40 left-6 w-80 h-[420px] 
      flex flex-col          
      backdrop-blur-xl bg-white/30 
      border border-white/50 shadow-2xl 
      rounded-2xl overflow-hidden 
      z-[99999]"
    >
    
      {/* HEADER */}
      <div className="bg-green-600 text-white p-4 flex items-center gap-3 flex-none">
        <img
          src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
          className="w-10 h-10 rounded-full border border-white"
          alt="support"
        />
        <div>
          <p className="font-semibold text-sm">SAPEAGLE SUPPORT</p>
          <p className="text-xs text-white/90 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-300 rounded-full"></span>
            Online
          </p>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-3 bg-white/50 backdrop-blur-lg">
        {chat.length===0 ? (
          <p className="text-gray-500 text-sm text-center mt-10">
            👋 Hello! How can we help you today?
          </p>
        ) : (
          chat.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: msg.type==='user'?20:-20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`mb-3 flex ${msg.type==='user'?'justify-end':'justify-start'}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[70%] text-sm shadow-md 
                ${msg.type==='user' 
                  ? 'bg-green-600 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* INPUT ALWAYS BOTTOM */}
      <div className="p-3 bg-white border-t flex items-center flex-none">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
          className="flex-1 border rounded-xl px-3 py-2 text-sm resize-none focus:outline-none"
          rows={1}
        />
        <motion.button
          onClick={handleSend}
          whileTap={{ scale: 0.9 }}
          className="ml-2 bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl"
        >
          <FaPaperPlane size={18} />
        </motion.button>
      </div>

    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default WhatsAppButton;
