import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  FaWhatsapp,
  FaComments,
  FaEnvelope,
  FaPhone,
  FaSkype,
  FaDesktop,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaLifeRing,
  FaTicketAlt,
  FaVideo,
  FaHandshake
} from "react-icons/fa";

import supportImage from "../assets/supportImage.jpg";
import SEO from "../layout/SEO";

const supportOptions = [
  { 
    id: "whatsapp", 
    title: "WhatsApp Support", 
    subtitle: "Quick responses on WhatsApp",
    icon: <FaWhatsapp />,
    color: "from-green-500 to-green-600",
    hoverColor: "hover:bg-green-50 hover:border-green-300"
  },
  { 
    id: "chat", 
    title: "Chat with Experts", 
    subtitle: "Live chat with our team",
    icon: <FaComments />,
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:bg-blue-50 hover:border-blue-300"
  },
  { 
    id: "email", 
    title: "Email Support", 
    subtitle: "Get replies within 24 hours",
    icon: <FaEnvelope />,
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:bg-purple-50 hover:border-purple-300"
  },
  { 
    id: "call", 
    title: "Calling Support", 
    subtitle: "Talk to our support team",
    icon: <FaPhone />,
    color: "from-orange-500 to-orange-600",
    hoverColor: "hover:bg-orange-50 hover:border-orange-300"
  },
  { 
    id: "skype", 
    title: "Skype Support", 
    subtitle: "Video call support",
    icon: <FaSkype />,
    color: "from-sky-500 to-sky-600",
    hoverColor: "hover:bg-sky-50 hover:border-sky-300"
  },
  { 
    id: "remote", 
    title: "Remote Desk Support", 
    subtitle: "Screen sharing assistance",
    icon: <FaDesktop />,
    color: "from-indigo-500 to-indigo-600",
    hoverColor: "hover:bg-indigo-50 hover:border-indigo-300"
  },
  { 
    id: "visit", 
    title: "Visit Our Office", 
    subtitle: "In-person consultation",
    icon: <FaMapMarkerAlt />,
    color: "from-pink-500 to-pink-600",
    hoverColor: "hover:bg-pink-50 hover:border-pink-300"
  },
  { 
    id: "ticket", 
    title: "Raise a Ticket", 
    subtitle: "Track your issue",
    icon: <FaTicketAlt />,
    color: "from-teal-500 to-teal-600",
    hoverColor: "hover:bg-teal-50 hover:border-teal-300"
  },
];

const SupportPage = () => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "vtech ERP - Support Page",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "url": "https://vtechsoftwareerp/support",
    "description": "vtech ERP Support — Contact us for help regarding CRM, HRMS, Payroll, Accounting, Inventory & Sales Management software.",
    "image": "https://vtechsoftwareerp/assets/support-og-image.png",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "INR",
      "url": "https://vtechsoftwareerp/book-demo-section"
    }
  };

  const handleSupportClick = (type) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to continue with ${type}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Continue",
      background: "#fefefe",
    }).then((result) => {
      if (result.isConfirmed) {
        switch (type) {
          case "WhatsApp Support":
            window.open("https://wa.me/9326870893", "_blank");
            break;
          case "Chat with Experts":
            Swal.fire("Chat Support", "Live chat expert will connect shortly...", "info");
            break;
          case "Email Support":
            Swal.fire({
              title: "Choose Email Address",
              html: `
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <button id="mail1" class="swal2-confirm swal2-styled" style="background:#2563eb;">vtechsoftwarevishal@gmail.com</button>

                </div>
              `,
              showConfirmButton: false,
              showCancelButton: true,
              cancelButtonText: "Close",
            });
            setTimeout(() => {
              document.getElementById("mail1").onclick = () =>
                window.location.href = "mailto:vtechsoftwarevishal@gmail.com?subject=Support Request&body=Hello Team,";
              document.getElementById("mail2").onclick = () =>
                window.location.href = "mailto:support@vtechsoftwarevishal.com?subject=Support Request&body=Hello Team,";
              document.getElementById("mail3").onclick = () =>
                window.location.href = "mailto:admin@vtechsoftwarevishal.com?subject=Support Request&body=Hello Team,";
              document.getElementById("mail4").onclick = () =>
                window.location.href = "mailto:info@vtechsoftwarevishal.com?subject=Support Request&body=Hello Team,";
            }, 200);
            break;
          case "Calling Support":
            window.location.href = "tel:+91 9326870893";
            break;
          case "Skype Support":
            window.open("skype:live:.cid.sample1234?call", "_self");
            break;
          case "Remote Desk Support":
            Swal.fire("Remote Desk", "Our technician will connect via AnyDesk / TeamViewer shortly.", "success");
            break;
          case "Visit Our Office":
            Swal.fire("Office Location", "You can visit us at: \nNew Delhi, India", "info");
            break;
          default:
            break;
        }
      }
    });
  };

  const getIcon = (title) => {
    const option = supportOptions.find(opt => opt.title === title);
    return option ? option.icon : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <SEO
        title="Support - vTech Software Solutions"
        description="Need help? Contact our support team via WhatsApp, Email, Chat, Phone, Skype, Remote Desk or Visit our office."
      
        keywords="vTech support, ERP software help, CRM software support, HRMS software support"
        
        jsonLD={jsonLD}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-cyan-200 text-sm font-medium mb-6 border border-white/20">
              24/7 Customer Support
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We're Here to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Help You
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Our dedicated support team is always ready to assist you through multiple channels. Choose the support option that suits you best.
          </motion.p>

          {/* Support Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { number: "< 1hr", label: "Response Time" },
              { number: "24/7", label: "Availability" },
              { number: "99%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                <p className="text-2xl font-bold text-white">{stat.number}</p>
                <p className="text-sm text-blue-200">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 -mt-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* IMAGE SECTION */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex items-center justify-center"
              >
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                      backgroundSize: '15px 15px'
                    }}
                  />
                </div>
                
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <FaHeadset className="text-6xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Premium Support</h3>
                  <p className="text-blue-200">We're just a click away</p>
                  
                  {/* Feature List */}
                  <div className="mt-8 space-y-3 text-left">
                    {[
                      "Instant Response",
                      "Expert Team",
                      "Multiple Channels",
                      "Happy Customers"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center gap-2 text-white"
                      >
                        <FaCheckCircle className="text-cyan-300" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl" />
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl" />
              </motion.div>

              {/* RIGHT SECTION - Support Options */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-8 lg:p-12"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Get Support
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose your preferred way to reach us
                </p>

                {/* Support Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {supportOptions.map((option, index) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      onClick={() => handleSupportClick(option.title)}
                      className={`
                        group flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-100 
                        ${option.hoverColor} cursor-pointer transition-all duration-300
                      `}
                    >
                      <div className={`
                        w-14 h-14 rounded-xl bg-gradient-to-br ${option.color} 
                        flex items-center justify-center text-white text-xl
                        shadow-lg group-hover:scale-110 transition-transform duration-300
                      `}>
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {option.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {option.subtitle}
                        </p>
                      </div>
                      <FaArrowRight className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </motion.div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaEnvelope className="text-blue-600" />
                      </div>
                      <span>vtechsoftwarevishal@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <FaPhone className="text-green-600" />
                      </div>
                      <span>+91 9326870893</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FaClock className="text-purple-600" />
                      </div>
                      <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What are your support hours?",
                a: "Our support team is available 24/7 for critical issues, and standard hours are Mon-Sat 9:00 AM to 7:00 PM."
              },
              {
                q: "How can I track my support ticket?",
                a: "You can track your ticket status by logging into your account dashboard or by using the ticket ID sent to your email."
              },
              {
                q: "Do you offer remote support?",
                a: "Yes, we provide remote desktop support via AnyDesk or TeamViewer for quick issue resolution."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-gray-800 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
