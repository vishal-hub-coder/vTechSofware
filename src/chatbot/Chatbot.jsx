import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPaperPlane, 
  FaTimes, 
  FaMoon, 
  FaSun, 
  FaMicrophone, 
  FaPaperclip,
  FaRobot,
  FaUser,
  FaWhatsapp,
  FaChevronDown,
  FaEnvelope
} from "react-icons/fa";

const features = [
  { name: "CRM", desc: "Manage leads, customers, pipelines, and interactions with powerful automation and analytics." },
  { name: "ERP", desc: "Integrate finance, HR, inventory, and operations into one unified platform." },
  { name: "Manufacturing", desc: "Production planning, BOM management, workflows, and raw material tracking." },
  { name: "Sales Management", desc: "Track leads, quotations, orders, and revenue with predictive insights." },
  { name: "Payroll Management", desc: "Automated salary processing, payslips, deductions, and compliance." },
  { name: "Services Management", desc: "Customer tickets, service requests, and support workflow automation." },
  { name: "AMC Management", desc: "Asset lifecycle management with contract tracking and maintenance schedules." },
  { name: "Inventory Management", desc: "Real-time stock monitoring, warehouse management, and supplier coordination." },
  { name: "Accounting", desc: "Invoices, expenses, GST filing, ledgers, and comprehensive financial reports." },
];

const quickQuestions = [
  "What is your pricing?",
  "Book a demo",
  "Feature details",
  "Contact sales"
];

const introMessage = "Hi there! 👋 I'm your vTech Assistant. I can help you explore our ERP solutions, explain features, or connect you with our team. What would you like to know?";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [typed, setTyped] = useState("");
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Typing animation for intro
  useEffect(() => {
    if (open && i < introMessage.length) {
      const t = setTimeout(() => {
        setTyped((p) => p + introMessage[i]);
        setI((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(t);
    } else if (i === introMessage.length) {
      setTimeout(() => setShowOptions(true), 500);
    }
  }, [i, open]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typed]);

  const sendMessage = (text) => {
    const messageText = text || inputRef.current?.value?.trim();
    if (!messageText) return;
    
    setMessages(prev => [...prev, { from: "user", text: messageText }]);
    if (inputRef.current) inputRef.current.value = "";
    
    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "Thank you for your interest! Our team will reach out to you shortly. 💼",
        "Great question! I'd be happy to help. Let me connect you with our specialists.",
        "That's a popular feature! Would you like to schedule a demo to see it in action?",
        "Perfect! We've received your query. Our team will contact you within 24 hours."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { from: "bot", text: randomResponse }]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* FLOATING CHAT BUTTON - Right Side */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ 
            boxShadow: [
              "0 10px 30px rgba(99, 102, 241, 0.3)",
              "0 15px 40px rgba(99, 102, 241, 0.5)",
              "0 10px 30px rgba(99, 102, 241, 0.3)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl relative"
        >
          {open ? (
            <FaTimes size={24} />
          ) : (
            <>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                💬
              </motion.span>
              {/* Notification Badge */}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold"
              >
               !
              </motion.span>
            </>
          )}
        </motion.div>
      </motion.button>

      {/* CHAT WINDOW - Right Side */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`
              fixed z-50 flex flex-col shadow-2xl
              bottom-24 right-6
              w-[380px] max-w-[calc(100vw-3rem)] h-[600px]
              ${dark ? "bg-gray-900" : "bg-white"}
              rounded-2xl overflow-hidden border
              ${dark ? "border-gray-700" : "border-gray-100"}
            `}
          >
            {/* HEADER */}
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white p-5 flex items-center justify-between flex-none">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '15px 15px'
                  }}
                />
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FaRobot size={24} />
                  </div>
                  <motion.div 
                    className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">vTech Assistant</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    Online
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setDark(!dark)}
                  className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaTimes size={14} />
                </motion.button>
              </div>
            </div>

            {/* BODY */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${dark ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-gray-100"}`}>
              
              {/* Bot Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-2xl rounded-bl-none max-w-[90%] ${
                  dark ? "bg-gray-700" : "bg-white"
                } shadow-lg`}
              >
                <p className={`text-sm leading-relaxed ${dark ? "text-gray-200" : "text-gray-700"}`}>
                  {typed}
                  {i < introMessage.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                      className="inline-block w-0.5 h-4 bg-indigo-500 ml-0.5 align-middle"
                    />
                  )}
                </p>
              </motion.div>

              {/* Messages */}
              {messages.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, x: m.from === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${m.from === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-none ${
                      m.from === "user" 
                        ? "bg-indigo-600" 
                        : dark ? "bg-gray-600" : "bg-white shadow"
                    }`}>
                      {m.from === "user" ? (
                        <FaUser size={12} className="text-white" />
                      ) : (
                        <FaRobot size={12} className={dark ? "text-gray-300" : "text-indigo-600"} />
                      )}
                    </div>
                    <div className={`px-4 py-3 rounded-2xl text-sm shadow-md ${
                      m.from === "user"
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-none"
                        : dark ? "bg-gray-700 text-gray-200 rounded-bl-none" : "bg-white text-gray-800 rounded-bl-none"
                    }`}>
                      {m.text}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-2 items-end">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${dark ? "bg-gray-600" : "bg-white shadow"}`}>
                      <FaRobot size={12} className={dark ? "text-gray-300" : "text-indigo-600"} />
                    </div>
                    <div className={`px-4 py-3 rounded-2xl rounded-bl-none ${dark ? "bg-gray-700" : "bg-white"} shadow-md`}>
                      <div className="flex gap-1">
                        {[0, 1, 2].map((dot) => (
                          <motion.div
                            key={dot}
                            className="w-2 h-2 bg-indigo-500 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 0.6, 
                              delay: dot * 0.2 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Feature Options */}
              <AnimatePresence>
                {showOptions && !selected && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-3"
                  >
                    <p className={`text-xs font-medium ${dark ? "text-gray-400" : "text-gray-500"}`}>
                      Quick Actions:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {features.slice(0, 6).map((f) => (
                        <motion.button
                          key={f.name}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelected(f)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all duration-200 shadow-sm
                            ${dark 
                              ? "bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600" 
                              : "bg-white hover:bg-indigo-50 text-gray-700 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
                            }`}
                        >
                          {f.name}
                        </motion.button>
                      ))}
                    </div>

                    {/* Contact Options */}
                    <div className="flex gap-2 pt-2">
                      <motion.a
                        href="https://wa.me/919910680809"
                        target="_blank"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-medium shadow-lg"
                      >
                        <FaWhatsapp size={14} />
                        WhatsApp
                      </motion.a>
                      <motion.a
                        href="mailto:info@vtech.com"
                        target="_blank"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-lg"
                      >
                        <FaEnvelope size={14} />
                        Email
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Feature Details */}
              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="space-y-3"
                  >
                    <div className={`p-4 rounded-2xl border-l-4 border-indigo-500 ${
                      dark ? "bg-gray-700" : "bg-white"
                    } shadow-lg`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-bold rounded-lg">
                          {selected.name}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${dark ? "text-gray-300" : "text-gray-600"}`}>
                        {selected.desc}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelected(null)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-medium text-sm shadow-lg"
                    >
                      Explore More Features
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className={`p-4 border-t flex items-center gap-2 flex-none ${
              dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"
            }`}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl transition-colors ${
                  dark ? "hover:bg-gray-700 text-gray-400" : "hover:bg-gray-100 text-gray-500"
                }`}
              >
                <FaPaperclip size={18} />
              </motion.button>
              
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type your message..."
                  onKeyPress={handleKeyPress}
                  className={`w-full px-4 py-3 pr-12 rounded-xl border outline-none text-sm transition-all duration-200 ${
                    dark 
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500" 
                      : "bg-gray-50 border-gray-200 text-gray-800 focus:border-indigo-500 focus:bg-white"
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => sendMessage()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                >
                  <FaPaperPlane size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
