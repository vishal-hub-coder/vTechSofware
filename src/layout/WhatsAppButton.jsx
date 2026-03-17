import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaPaperPlane, FaTimes, FaCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { text: "Hello! 👋 Welcome to vTech Support. How can we help you today?", type: "bot" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const phoneNumber = "9326870893";

  const handleSend = () => {
    if (message.trim() === "") return;

    const newMsg = { text: message, type: "user" };
    setChat([...chat, newMsg]);
    setMessage("");

    // Simulate typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setChat(prev => [...prev, { 
        text: "Thank you for reaching out! Our team will get back to you shortly. 💼", 
        type: "bot" 
      }]);
    }, 1500);

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const quickReplies = [
    "I need a demo",
    "Pricing inquiry",
    "Feature request",
    "Technical support"
  ];

  const handleQuickReply = (text) => {
    setMessage(text);
  };

  return (
    <>
      {/* Phone Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full p-4 shadow-xl flex items-center justify-center z-50"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -5, 0],
          boxShadow: [
            "0 10px 30px rgba(37, 99, 235, 0.3)",
            "0 15px 40px rgba(37, 99, 235, 0.4)",
            "0 10px 30px rgba(37, 99, 235, 0.3)"
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          hover: { duration: 0.2 }
        }}
      >
        <FaPhoneAlt size={22} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 left-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-full p-4 shadow-xl flex items-center justify-center z-[999]"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          y: [0, -5, 0],
          boxShadow: [
            "0 10px 30px rgba(22, 163, 74, 0.3)",
            "0 15px 40px rgba(22, 163, 74, 0.4)",
            "0 10px 30px rgba(22, 163, 74, 0.3)"
          ]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          hover: { duration: 0.2 }
        }}
      >
        {isOpen ? (
          <FaTimes size={26} />
        ) : (
          <FaWhatsapp size={28} />
        )}
      </motion.button>

      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0, originX: 0, originY: 1 }}
            exit={{ opacity: 0, scale: 0.5, y: 50, originX: 0, originY: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-36 left-6 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] 
            flex flex-col          
            bg-white 
            shadow-2xl 
            rounded-2xl overflow-hidden 
            z-[99999]
            border border-gray-100"
          >
            {/* HEADER */}
            <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white p-5 flex items-center gap-4 flex-none">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}
                />
              </div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <img
                    src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    className="w-14 h-14 rounded-full border-2 border-white/30 shadow-lg"
                    alt="support"
                  />
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">vTech Support</p>
                  <p className="text-xs text-white/90 flex items-center gap-1">
                    <FaCircle className="text-xs" />
                    <span>Online</span>
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-gray-100">
              {/* Bot Welcome Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-start mb-4"
              >
                <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm max-w-[85%]">
                  <p className="text-sm">👋 Hello! Welcome to <strong>vTech Support</strong>.</p>
                  <p className="text-sm mt-1">How can we help you today?</p>
                </div>
              </motion.div>

              {/* Chat Messages */}
              {chat.slice(1).map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-3 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm shadow-sm
                    ${msg.type === 'user' 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start mb-3"
                >
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <motion.div 
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Replies */}
              {chat.length === 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border border-gray-200 hover:border-green-400 hover:bg-green-50 text-gray-700 hover:text-green-600 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 shadow-sm"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t flex items-end gap-2 flex-none">
              <div className="flex-1 relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="Type a message..."
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 bg-gray-50"
                  rows={1}
                  style={{ maxHeight: '100px' }}
                />
              </div>
              <motion.button
                onClick={handleSend}
                whileTap={{ scale: 0.9 }}
                disabled={!message.trim()}
                className={`p-3 rounded-2xl flex items-center justify-center transition-all duration-200
                  ${message.trim() 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
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
