




















import React, { useState, useEffect } from "react";

function App() {
  const text = "Helloworld"; // Text to animate
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]); // Add next character
      setIndex((prevIndex) => prevIndex + 1);
    }, 200); // typing speed (ms)

    if (index === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        setDisplayText(""); // Clear after delay
        setIndex(0); // Restart loop
      }, 1000); // wait 1 second before restarting
    }

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "3rem", fontFamily: "monospace" }}>
        {displayText}
        <span style={{ borderRight: "2px solid black", marginLeft: "2px" }} />
      </h1>
    </div>
  );
}

export default App;






























<Motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
  className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
>
  {/* Left Side Image */}
  <div className="flex justify-center">
    <img
      src="/images/company-dashboard.png"
      alt="Company Dashboard"
      className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
    />
  </div>

  {/* Right Side Text */}
  <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
      ERP (Enterprise Resource Planning)
    </h2>

    <p className="text-lg leading-relaxed text-gray-700">
     Type of business management software that helps organizations automate and integrate their core business processes. Think of it as a central hub that connects various departments and functions within a company, providing a unified view of all business activities.
    </p>

    
  </div>
</Motion.div>