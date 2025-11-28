import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/logo.jpeg";

const LOGIN_API = "https://erp.sapeagleerp.com/login";

const Footer = () => {
  return (
    <footer className="bg-[#1c1f26] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <Link to="/">
            <img
              src={logo}
              alt="SAPEAGLE ERP Logo"
              className="h-[62px] w-[150px] mb-2"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            <span className="font-bold">Address:</span> RZ-D-49, Gali No-6,
            Syndicate Enclave, Raghu, Dabri, New Delhi South West 110045
          </p>
          <p className="text-sm">
            <span className="font-bold">Phone:</span> +91 9910680809
          </p>
          <p className="text-sm">
            <span className="font-bold">Email:</span> info@sapeagleerp.com
          </p>
        </div>

        {/* Core Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Core Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/crm-feature-section"
                className="hover:text-white transition"
              >
                › CRM
              </Link>
            </li>
            <li>
              <Link
                to="/erp-feature-section"
                className="hover:text-white transition"
              >
                › ERP
              </Link>
            </li>
            <li>
              <Link
                to="/menufecturing-management"
                className="hover:text-white transition"
              >
                › Manufacturing
              </Link>
            </li>
            <li>
              <Link
                to="/sales-management"
                className="hover:text-white transition"
              >
                › Sales Management
              </Link>
            </li>
            {/* Add Blog Button */}
            <li>
              <Link
                to="/add-blog"
                className="inline-block mt-2 bg-blue-500 text-white font-semibold px-4 py-1 rounded-md hover:bg-green-500 transition"
              >
                Add Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Additional Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                to="/payroll-management"
                className="hover:text-white transition"
              >
                › Payroll Management
              </Link>
            </li>
            <li>
              <Link
                to="/services-mnagement"
                className="hover:text-white transition"
              >
                › Service Management
              </Link>
            </li>
            <li>
              <Link
                to="/cloud-solutions"
                className="hover:text-white transition"
              >
                › AMC Management
              </Link>
            </li>
            <li>
              <Link
                to="/inventory-management"
                className="hover:text-white transition"
              >
                › Inventory Management
              </Link>
            </li>
            <li>
              <Link
                to="/account-management"
                className="hover:text-white transition"
              >
                › Accounting
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <p className="text-xs text-gray-400 mb-4">
            Follow us for updates, insights, and inspiration delivered
            straight to your feed
          </p>
          <div className="flex gap-4 mb-6">
            <a
              target="_blank"
              href="https://x.com/sapeagleerp"
              className="border border-gray-500 rounded-full p-2 hover:bg-gray-700 transition"
            >
              <FaXTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/sapeagle.erp"
              className="border border-gray-500 rounded-full p-2 hover:bg-gray-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/sapeagleerp/"
              className="border border-gray-500 rounded-full p-2 hover:bg-gray-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sapeangleerp-498493383"
              className="border border-gray-500 rounded-full p-2 hover:bg-gray-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <Link
            to={LOGIN_API}
            className="inline-block bg-blue-500 text-[#1c1f26] font-semibold px-7 py-2 rounded-md hover:bg-green-500 transition"
          >
            New Login
          </Link>
        </div>
      </div>

      {/* Bottom Copyright */}
<div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
  © {new Date().getFullYear()}{" "}
  <span className="text-white font-semibold">SAPEAGLEERP</span> | All
  Rights Reserved
</div>

    </footer>
  );
};

export default Footer;
