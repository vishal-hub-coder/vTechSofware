import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaRocket,
  FaCircleCheck,
  FaHeart,
  FaPaperPlane
} from "react-icons/fa6";
import logo from "../assets/vTechSoftware.png";

// const LOGIN_API = "https://vtechsoftwareerp.com/login";
const LOGIN_API = `{}`;


const footerLinks = {
  coreServices: [
    { name: "CRM", path: "/crm-feature-section" },
    { name: "ERP", path: "/erp-feature-section" },
    { name: "Manufacturing", path: "/menufecturing-management" },
    { name: "Sales Management", path: "/sales-management" },
    { name: "Payroll Management", path: "/payroll-management" },
  ],
  additionalServices: [
    { name: "Service Management", path: "/services-mnagement" },
    { name: "AMC Management", path: "/cloud-solutions" },
    { name: "Inventory Management", path: "/inventory-management" },
    { name: "Accounting", path: "/account-management" },
    { name: "Project Management", path: "/project-management" },
  ],
};

const socialLinks = [
  { icon: <FaXTwitter />, href: "https://x.com/", color: "hover:bg-gray-800" },
  { icon: <FaFacebookF />, href: "https://www.facebook.com/", color: "hover:bg-blue-600" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/", color: "hover:bg-pink-600" },
  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/", color: "hover:bg-blue-700" },
  { icon: <FaYoutube />, href: "https://youtube.com", color: "hover:bg-red-600" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-gray-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-block mb-4">
                <img
                  src={logo}
                  alt="vTech Software Logo"
                  className="h-20 w-auto"
                />
              </Link>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-sm leading-relaxed max-w-sm"
            >
              Empowering businesses with cutting-edge ERP solutions. Streamline operations, boost productivity, and drive growth with vTech Software.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                  <FaLocationDot />
                </div>
                <p className="text-sm text-gray-400">
                  uttam nagar east near metro station new delhi 110059
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0">
                  <FaPhone />
                </div>
                <p className="text-sm">+91 9326870893</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <p className="text-sm">vtechsoftwarevishal@gmail.com</p>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <p className="text-white font-semibold mb-3">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
                >
                  <FaPaperPlane />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FaRocket className="text-blue-400" />
              Core Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.coreServices.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                    {link.name}
                    <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <FaCircleCheck className="text-green-400" />
              Additional Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.additionalServices.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-purple-400 transition flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors"></span>
                    {link.name}
                    <FaArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-xs" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Follow Us & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <p className="text-xs text-gray-400 mb-4">
                Stay connected for updates, insights, and latest news
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all hover:border-transparent"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={LOGIN_API}
                  className="block text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition"
                >
                  ERP Login
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/add-blog"
                  className="block text-center bg-white/5 border border-white/10 text-white font-semibold py-3.5 rounded-xl hover:bg-white/10 transition"
                >
                  Add Blog
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-6 mb-12 border border-white/5"
        >
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { number: "5000+", label: "Happy Customers" },
              { number: "15+", label: "Years Experience" },
              { number: "99%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <span className="text-blue-400 font-bold">{stat.number}</span>
                </div>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="relative border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm text-gray-500 flex items-center gap-1"
            >
              © {currentYear} <span className="text-white font-semibold">vTech Software</span> | All Rights Reserved
              <span className="mx-2">•</span>
              Made with <FaHeart className="text-red-500 mx-1 text-xs" /> by Vishal Chaubey
            </motion.p>

            {/* Quick Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-white transition">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-500 hover:text-white transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
