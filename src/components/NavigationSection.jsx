import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaGlobe, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/mainLogo.png";
import searchItems from "../data/searchItems";

const NavigationSection = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showMap, setShowMap] = useState(false); // New state for map overlay
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showSearch]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.length > 0) {
      const filtered = searchItems.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (path) => {
    setShowSearch(false);
    setQuery("");
    setResults([]);
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 h-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* LOGO */}
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-[92px] w-[120px]" />
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-8 font-semibold text-gray-800 relative">
            <Link to="/" className="hover:text-blue-600">Products</Link>
            <Link to="/industories" className="hover:text-blue-600">Industries</Link>
            <Link to="/explore-our-services" className="hover:text-blue-600">Features</Link>
            <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
            <Link to="/customers" className="hover:text-blue-600">Customers</Link>
            <Link to="/support" className="hover:text-blue-600">Supports</Link>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center space-x-4">

            {/* SEARCH BUTTON */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FaSearch className="text-gray-700 w-4 h-4" />
              </button>
            </div>

            {/* LANGUAGE / MAP ICON */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition hidden sm:flex"
              onClick={() => setShowMap(true)} // Show map overlay on click
            >
              <FaGlobe className="text-gray-700 w-4 h-4" />
            </button>

            {/* LOGIN */}
            <a
              href="https://sapeagleerp.com/adminlogin.aspx"
              rel="noopener noreferrer"
              className="flex items-center hover:text-blue-600"
            >
              <FaUser className="mr-2" /> Login
            </a>

            {/* BOOK DEMO */}
            <button className="hidden sm:block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition">
              <Link to="/book-demo-section">Book Demo</Link>
            </button>

            {/* MOBILE MENU ICON */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* =================== FULL WIDTH SEARCH OVERLAY =================== */}
      {showSearch && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center">
          {/* Background blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={() => setShowSearch(false)}
          ></div>

          {/* Search box */}
          <div className="relative w-full max-w-3xl mt-20 px-6">
            <div className="relative">
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search here..."
                className="w-full px-6 py-3 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg bg-white"
              />

              {/* Close button inside search box */}
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
              >
                X
              </button>
            </div>

            {/* Results */}
            <div className="w-full mt-4">
              {results.length > 0 && (
                <ul className="border rounded-lg shadow max-h-80 bg-white overflow-y-auto">
                  {results.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => handleSelect(item.path)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}

              {query && results.length === 0 && (
                <p className="text-gray-500 mt-4 text-center text-lg">
                  No results found
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* =================== MAP OVERLAY =================== */}
      {showMap && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Background blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
            onClick={() => setShowMap(false)}
          ></div>

          {/* Map container */}
          <div className="relative w-full max-w-4xl h-[80vh] px-6">
            {/* Close button */}
            <button
              onClick={() => setShowMap(false)}
              className="absolute top-2 right-2 px-3 py-1 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition z-10"
            >
              X
            </button>

            {/* Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902988654204!2d90.398197!3d23.780887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c38b4e1f27%3A0xa4e2a22712345678!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-lg shadow-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}

      {/* ====================== MOBILE SLIDE MENU (RIGHT SIDE) ======================= */}
      <div
        className={`fixed top-0 right-0 w-[75%] h-full bg-white shadow-2xl z-[9998] 
        transform transition-all duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            size={22}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="flex flex-col space-y-6 px-6 mt-6 text-lg">
          <Link to="/" onClick={toggleMenu}>Products</Link>
          <Link to="/industories" onClick={toggleMenu}>Industries</Link>
          <Link to="/explore-our-services" onClick={toggleMenu}>Features</Link>
          <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
          <Link to="/customers" onClick={toggleMenu}>Customers</Link>
          <Link to="/support" onClick={toggleMenu}>Supports</Link>

          <hr />

          <Link to="/login" onClick={toggleMenu}>
            <FaUser className="mr-2 inline" /> Login
          </Link>

          <Link
            to="/book-demo-section"
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold text-center"
            onClick={toggleMenu}
          >
            Book Demo
          </Link>

          <div className="mt-6">
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
              alt="Promo"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationSection;
