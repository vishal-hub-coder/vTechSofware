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
} from "react-icons/fa";

import supportImage from "../assets/supportImage.jpg";
import SEO from "../layout/SEO";

const SupportPage = () => {
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SAPEAGLE ERP - Support Page",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "url": "https://sapeagleerp.com/support",
    "description": "SAPEAGLE ERP Support — Contact us for help regarding CRM, HRMS, Payroll, Accounting, Inventory & Sales Management software.",
    "image": "https://sapeagleerp.com/assets/support-og-image.png",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "INR",
      "url": "https://sapeagleerp.com/book-demo-section"
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
            window.open("https://wa.me/919958790809", "_blank");
            break;
          case "Chat with Experts":
            Swal.fire("Chat Support", "Live chat expert will connect shortly...", "info");
            break;
          case "Email Support":
            Swal.fire({
              title: "Choose Email Address",
              html: `
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <button id="mail1" class="swal2-confirm swal2-styled" style="background:#2563eb;">sales@sapeagleerp.com</button>
                  <button id="mail2" class="swal2-confirm swal2-styled" style="background:#2563eb;">support@sapeagleerp.com</button>
                  <button id="mail3" class="swal2-confirm swal2-styled" style="background:#2563eb;">admin@sapeagleerp.com</button>
                  <button id="mail4" class="swal2-confirm swal2-styled" style="background:#2563eb;">info@sapeagleerp.com</button>
                </div>
              `,
              showConfirmButton: false,
              showCancelButton: true,
              cancelButtonText: "Close",
            });
            setTimeout(() => {
              document.getElementById("mail1").onclick = () =>
                window.location.href = "mailto:sales@sapeagleerp.com?subject=Support Request&body=Hello Team,";
              document.getElementById("mail2").onclick = () =>
                window.location.href = "mailto:support@sapeagleerp.com?subject=Support Request&body=Hello Team,";
              document.getElementById("mail3").onclick = () =>
                window.location.href = "mailto:admin@sapeagleerp.com?subject=Support Request&body=Hello Team,";
              document.getElementById("mail4").onclick = () =>
                window.location.href = "mailto:info@sapeagleerp.com?subject=Support Request&body=Hello Team,";
            }, 200);
            break;
          case "Calling Support":
            window.location.href = "tel:+919958790809";
            break;
          case "Skype Support":
            window.open("skype:live:.cid.sample1234?call", "_self");
            break;
          case "Remote Desk Support":
            Swal.fire("Remote Desk", "Our technician will connect via AnyDesk / TeamViewer shortly.", "success");
            break;
          case "Visit Support":
            Swal.fire("Office Location", "You can visit us at: \nNew Delhi, India", "info");
            break;
          default:
            break;
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4 py-10">
     
      <SEO
        title="Support Page - SAPEAGLE ERP | Contact & Help"
        description="Need help with SAPEAGLE ERP? Contact our support team via WhatsApp, Email, Chat, Phone, Skype, Remote Desk or Visit our office."
        canonical="https://sapeagleerp.com/support"
        keywords="SAPEAGLE ERP support, ERP software help, CRM software support, HRMS software support, Payroll software help, Accounting software support, Inventory support"
        ogImage="https://sapeagleerp.com/logo.jpeg"
        jsonLD={jsonLD}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full grid md:grid-cols-2 gap-8 p-8"
      >
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <img
            src={supportImage}
            alt="Support"
            className="rounded-2xl shadow-lg w-3/4"
          />
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-extrabold text-blue-700">We’re Here to Help You</h2>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist you through multiple channels. Choose the support option that suits you best:
          </p>

          {/* ALL SUPPORT BUTTONS */}
          <div className="space-y-4">
            {["WhatsApp Support","Chat with Experts","Email Support","Calling Support","Skype Support","Remote Desk Support","Visit Support"].map(item => (
              <SupportItem key={item} title={item} icon={getIcon(item)} onClick={handleSupportClick} />
            ))}
          </div>

          {/* CONTACT SECTION */}
          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-semibold text-blue-600">Contact Emails:</h3>
            <p className="text-gray-700">
              sales@sapeagleerp.com, support@sapeagleerp.com, admin@sapeagleerp.com, info@sapeagleerp.com
            </p>
            <h3 className="text-lg font-semibold text-blue-600">Phone Numbers:</h3>
            <p className="text-gray-700">+91 9958790809, +91 9910680809</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// ==== REUSABLE SUPPORT ITEM ====
const SupportItem = ({ icon, title, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    onClick={() => onClick(title)}
    className="flex items-center space-x-4 p-3 bg-gray-100 rounded-xl shadow hover:shadow-md transition cursor-pointer"
  >
    <div className="text-blue-600 text-xl">{icon}</div>
    <p className="text-gray-700 font-medium">{title}</p>
  </motion.div>
);

// ==== ICON MAPPER ====
const getIcon = (title) => {
  switch (title) {
    case "WhatsApp Support": return <FaWhatsapp />;
    case "Chat with Experts": return <FaComments />;
    case "Email Support": return <FaEnvelope />;
    case "Calling Support": return <FaPhone />;
    case "Skype Support": return <FaSkype />;
    case "Remote Desk Support": return <FaDesktop />;
    case "Visit Support": return <FaMapMarkerAlt />;
    default: return null;
  }
};

export default SupportPage;
