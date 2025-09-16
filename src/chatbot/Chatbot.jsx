import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 How can I help you today?", options: ["Pricing", "Support", "Book a Demo"] }
  ]);

  const handleOptionClick = (option) => {
    const newMessages = [...messages, { sender: "user", text: option }];

    let botReply;
    switch (option) {
      case "Pricing":
        botReply = { sender: "bot", text: "Our pricing starts at $19/month. Would you like to see detailed plans?", options: ["Yes, show me plans", "No, thanks"] };
        break;
      case "Support":
        botReply = { sender: "bot", text: "Sure! What kind of support do you need?", options: ["Technical", "Billing", "Other"] };
        break;
      case "Book a Demo":
        botReply = { sender: "bot", text: "Awesome! Please provide your email address and we’ll contact you shortly.", options: [] };
        break;
      case "Yes, show me plans":
        botReply = { sender: "bot", text: "Here’s the link to our plans: https://example.com/plans", options: ["Back to menu"] };
        break;
      case "No, thanks":
        botReply = { sender: "bot", text: "No problem! Is there anything else I can help you with?", options: ["Support", "Book a Demo"] };
        break;
      case "Back to menu":
        botReply = { sender: "bot", text: "What would you like to do next?", options: ["Pricing", "Support", "Book a Demo"] };
        break;
      default:
        botReply = { sender: "bot", text: "Got it!", options: ["Back to menu"] };
    }

    setMessages([...newMessages, botReply]);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
   
      <div className="bg-blue-600 text-white p-3 text-lg font-bold">
        Chat with us 💬
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-3 h-80">
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
              {msg.options?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {msg.options.map((opt, i) => (
                    <button
                      key={i}
                      className="bg-white border border-gray-300 text-gray-800 px-2 py-1 rounded-lg hover:bg-blue-50 text-xs"
                      onClick={() => handleOptionClick(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default Chatbot;
