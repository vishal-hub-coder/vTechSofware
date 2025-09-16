import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaComments, FaEnvelope, FaPhone, FaSkype, FaDesktop, FaMapMarkerAlt } from "react-icons/fa";
import supportImage from "../assets/supportImage.jpg"
const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full grid md:grid-cols-2 gap-8 p-8"
      >
       
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

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-extrabold text-blue-700">
            We’re Here to Help You
          </h2>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist you through
            multiple channels. Choose the support option that suits you best:
          </p>

          <div className="space-y-4">
            <SupportItem icon={<FaWhatsapp />} title="WhatsApp Support" />
            <SupportItem icon={<FaComments />} title="Chat with Experts" />
            <SupportItem icon={<FaEnvelope />} title="Email Support" />
            <SupportItem icon={<FaPhone />} title="Calling Support" />
            <SupportItem icon={<FaSkype />} title="Skype Support" />
            <SupportItem icon={<FaDesktop />} title="Remote Desk Support" />
            <SupportItem icon={<FaMapMarkerAlt />} title="Visit Support" />
          </div>

          <div className="mt-6 space-y-2">
            <h3 className="text-lg font-semibold text-blue-600">
              Contact Emails:
            </h3>
            <p className="text-gray-700">
              sales@sapeangleerp.com, support@sapeangleerp.com, admin@sapeangleerp.com, info@sapeangleerp.com
            </p>
            <h3 className="text-lg font-semibold text-blue-600">
              Phone Numbers:
            </h3>
            <p className="text-gray-700">+91 9958790809, +91 8882260922</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const SupportItem = ({ icon, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-center space-x-4 p-3 bg-gray-100 rounded-xl shadow hover:shadow-md transition cursor-pointer"
    >
      <div className="text-blue-600 text-xl">{icon}</div>
      <p className="text-gray-700 font-medium">{title}</p>
    </motion.div>
  );
};

export default SupportPage;
