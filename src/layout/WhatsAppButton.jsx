import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const phoneNumber = " 9910680809"; 

  const handleSend = () => {
    if (message.trim() === "") return;

    const newMsg = { text: message, type: "user" };
    setChat([...chat, newMsg]);

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  return (
    <>
      {/* 📞 Call Button (Bottom-Left) */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className="fixed bottom-6 left-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaPhoneAlt size={24} />
      </motion.a>

      {/* 💬 WhatsApp Button (Above Call Button with gap) */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-28 left-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <FaWhatsapp size={28} />
      </motion.button>

      {/* WhatsApp Chatbox */}
      {isOpen && (
        <div className="fixed bottom-44 left-6 w-80 h-96 bg-gray-100 shadow-2xl rounded-lg flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 flex items-center">
            <FaWhatsapp className="mr-2" />
            <span className="font-semibold">SAPAGLE PVT LTD</span>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {chat.length === 0 ? (
              <p className="text-gray-400 text-sm text-center mt-10">
                Say hi 👋, we’re here to help!
              </p>
            ) : (
              chat.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                      msg.type === "user"
                        ? "bg-green-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 border rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div className="p-2 flex items-center border-t bg-white">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="flex-1 border rounded-full px-3 py-2 text-sm resize-none focus:outline-none"
              rows={1}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
