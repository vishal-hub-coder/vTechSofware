import React, { useState } from "react";
import { FiMessageCircle, FiX, FiGrid } from "react-icons/fi"; 
import { motion, AnimatePresence } from "framer-motion";

const icon = "";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! User How can I help you today?", link:"/book-demo-section",options: ["Pricing", "Support", "Book a Demo", "Options"] },
  ]);

  const handleOptionClick = (option) => {
    const newMessages = [...messages, { sender: "user", text: option }];
    let botReply;

    switch (option) {
      case "Pricing":
        botReply = { sender: "bot", text: "Our pricing starts at 499 INR/month. Would you like to see detailed plans?",link:"/pricing", options: ["Back to menu"] };
        break;
      case "Support":
        botReply = { sender: "bot", text: "Sure! What kind of support do you need?", options: ["Technical", "Billing", "Other", "Back to menu"] };
        break;
      case "Book a Demo":
        botReply = { sender: "bot", text: "Awesome! Please provide your email  and we’ll contact you shortly.", options: ["Back to menu"] };
        break;
      case "Options":
        botReply = { 
          sender: "bot", 
          text: "Here are our key modules", 
          features: [
            { name: "CRM" },
            { name: "ERP" },
            { name: "Manufacturing"},
            { name: "Sales Management"},
            { name: "Payroll Management"},
            { name: "Services Management"},
            { name: "ACM Management", icon },
            { name: "Inventory Management" },
            { name: "Accounting" },
          ],
          options: ["Back to menu"],
        };
        break;
      case "Back to menu":
        botReply = { sender: "bot", text: "What would you like to do next?", options: ["Pricing", "Support", "Book a Demo", "Options"] };
        break;
      default:
        botReply = { sender: "bot", text: `You selected: ${option}`, options: ["Back to menu"] };
    }

    setMessages([...newMessages, botReply]);
  };

  return (
    <>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-96 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden z-50"
          >
           
            <div className="bg-blue-600 text-white p-4 text-lg font-bold flex justify-between items-center">
              Chat Assistant 
              <FiGrid />
            </div>






            <div className="flex-1 p-4 overflow-y-auto space-y-3 h-96">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}

                      <p>{msg.text}</p>


                      {msg.link && (
                        <a href={msg.link} className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded-lg text-xs shadow-sm hover:bg-blue-700 transition">
                          Got to All Plans {msg.link.replace("/","")}
                        </a>
                      )}





                    {msg.options?.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded-lg hover:bg-blue-50 text-xs shadow-sm"
                            onClick={() => handleOptionClick(opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}







                    {msg.features && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {msg.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center p-2 bg-white border rounded-lg shadow-sm hover:bg-blue-50 text-xs cursor-pointer"
                            onClick={() => handleOptionClick(feature.name)}
                          >
                            <span className="mr-2">{feature.icon}</span>
                            {feature.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
