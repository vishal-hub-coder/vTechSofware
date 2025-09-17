import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaGlobe, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/mainLogo.png";

const NavigationSection = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 h-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
       
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-[92px] w-[120px]" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 font-semibold text-gray-800 relative">
            <Link to="/" className="hover:text-blue-600 transition">
              Products
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              Industries
            </Link>
            <Link
              to="/explore-our-services"
              className="hover:text-blue-600 transition"
            >
              Features
            </Link>
            <Link to="/pricing" className="hover:text-blue-600 transition">
              Pricing
            </Link>
            <Link to="/customers" className="hover:text-blue-600 transition">Customers</Link>

            <Link to="/support" className="hover:text-blue-600 transition">
              Supports
            </Link>
   </div>

          <div className="flex items-center space-x-4">
        
            <div className="relative">
              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FaSearch className="text-gray-700 w-4 h-4" />
              </button>
              {showSearch && (
                <input
                  ref={searchRef}
                  onBlur={() => setShowSearch(false)}
                  type="text"
                  placeholder="Search..."
                  className="absolute right-0 top-10 w-[300px] px-6 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              )}
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full transition hidden sm:flex">
              <FaGlobe className="text-gray-700 w-4 h-4" />
            </button>






        <a
  href="https://sapeagleerp.com/adminlogin.aspx"
 
  rel="noopener noreferrer"
  className="flex items-center hover:text-blue-600"
  onClick={toggleMenu}
>
  <FaUser className="mr-2" /> Login
</a>








            <button className="hidden sm:block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition">
              <Link to="/book-demo-section">Book Demo</Link>
            </button>




















            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200 flex flex-col space-y-4 px-6 py-4">
          <Link to="/" className="hover:text-blue-600" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/about" className="hover:text-blue-600" onClick={toggleMenu}>
            Industries
          </Link>
          <Link
            to="/explore-our-services"
            className="hover:text-blue-600"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link to="/pricing" className="hover:text-blue-600" onClick={toggleMenu}>
            Pricing
          </Link>
          <a href="#" className="hover:text-blue-600" onClick={toggleMenu}>
            Customers
          </a>
          <a href="#" className="hover:text-blue-600" onClick={toggleMenu}>
            Supports
          </a>

          {/* Divider */}
          <hr />

          {/* Actions in Mobile Menu */}
          <Link
            to="/login"
            className="flex items-center hover:text-blue-600"
            onClick={toggleMenu}
          >
            <FaUser className="mr-2" /> Login
          </Link>
          <Link
            to="/book-demo-section"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold shadow-md text-center"
            onClick={toggleMenu}
          >
            Book Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavigationSection;
