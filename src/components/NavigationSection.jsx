import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaAngleRight,
  FaRocket,
  FaChartPie,
  FaCogs,
  FaBoxes,
  FaShoppingCart,
  FaProjectDiagram,
  FaUsers,
  FaFileInvoice,
  FaWarehouse,
  FaLaptopCode,
  FaCloud,
  FaArrowRight,
  FaCheckCircle,
  FaHeadset,
  FaGlobe,
} from "react-icons/fa";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import logo from "../assets/vTechSoftware.png";
import searchItems from "../data/searchItems";

const NavigationSection = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const searchRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  /* =========================================================
     NAVIGATION DATA
  ========================================================= */

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Industries",
      path: "/industories",
    },
    {
      name: "Features",
      path: "/explore-our-services",
      dropdown: [
        {
          name: "CRM",
          path: "/crm-feature-section",
          icon: <FaUsers />,
          desc: "Customer Management",
        },
        {
          name: "ERP",
          path: "/erp-feature-section",
          icon: <FaChartPie />,
          desc: "Enterprise Planning",
        },
        {
          name: "Sales Management",
          path: "/sales-management",
          icon: <FaShoppingCart />,
          desc: "Sales & Orders",
        },
        {
          name: "Payroll Management",
          path: "/payroll-management",
          icon: <FaFileInvoice />,
          desc: "Salary & HR",
        },
        {
          name: "Inventory",
          path: "/inventory-management",
          icon: <FaWarehouse />,
          desc: "Stock Management",
        },
        {
          name: "Accounting",
          path: "/account-management",
          icon: <FaBoxes />,
          desc: "Finance & GST",
        },
        {
          name: "AMC Management",
          path: "/cloud-solutions",
          icon: <FaCogs />,
          desc: "Asset Maintenance",
        },
        {
          name: "Manufacturing",
          path: "/manufacturing",
          icon: <FaProjectDiagram />,
          desc: "Production Planning",
        },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Customers",
      path: "/customers",
    },
    {
      name: "Support",
      path: "/support",
    },
  ];

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (menuOpen || showSearch || showMap) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, showSearch, showMap]);

  /* =========================================================
     ESC KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowSearch(false);
        setShowMap(false);
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =========================================================
     SEARCH AUTO FOCUS
  ========================================================= */

  useEffect(() => {
    if (showSearch) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 100);
    }
  }, [showSearch]);

  /* =========================================================
     SEARCH
  ========================================================= */

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();

    setQuery(value);

    if (value.trim().length > 0) {
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

  /* =========================================================
     MENU
  ========================================================= */

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  /* =========================================================
     ANIMATION SETTINGS
  ========================================================= */

  const fadeDown = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
  };

  return (
    <>
      {/* =====================================================
          TOP ANNOUNCEMENT / CONTACT BAR
      ===================================================== */}

      <div className="hidden lg:block relative z-[60] overflow-hidden bg-[#07111f] text-white">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-[15%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -top-20 right-[15%] w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        {/* Moving line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: ["-100%", "100%"],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "50%",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-11 flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-6 text-xs xl:text-sm">

              <a
                href="tel:+919326870893"
                className="group flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-400/10 group-hover:bg-blue-500/20">
                  <FaPhone className="text-blue-400 text-[10px]" />
                </span>

                <span>+91 9326870893</span>
              </a>

              <a
                href="mailto:vtechsoftwarevishal@gmail.com"
                className="group flex items-center gap-2 text-slate-300 hover:text-white transition"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-400/10 group-hover:bg-purple-500/20">
                  <FaEnvelope className="text-purple-400 text-[10px]" />
                </span>

                <span>vtechsoftwarevishal@gmail.com</span>
              </a>

            </div>

            {/* CENTER */}
            <div className="hidden xl:flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Enterprise ERP Solutions • Available 24/7</span>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-1.5">

              <a
                href="#"
                aria-label="Facebook"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-blue-500/20 transition"
              >
                <FaFacebook size={12} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-pink-500/20 transition"
              >
                <FaInstagram size={12} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-blue-500/20 transition"
              >
                <FaLinkedin size={12} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-sky-500/20 transition"
              >
                <FaTwitter size={12} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-red-500/20 transition"
              >
                <FaYoutube size={12} />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <motion.nav
        initial={shouldReduceMotion ? false : { y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          sticky top-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-2xl shadow-[0_12px_40px_rgba(15,23,42,0.10)] border-b border-slate-200/70"
              : "bg-white border-b border-slate-100 shadow-sm"
          }
        `}
      >
        {/* TOP GRADIENT LINE */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 via-purple-500 to-blue-500" />

        <div
          className={`
            max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
            transition-all duration-500
            ${scrolled ? "py-2" : "py-3"}
          `}
        >
          <div className="flex items-center justify-between gap-6">

            {/* =================================================
                LOGO
            ================================================= */}

            <motion.div
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.02,
                    }
              }
              className="shrink-0"
            >
              <Link
                to="/"
                onClick={closeAllMenus}
                className="flex items-center group"
              >
                <div className="relative">

                  <img
                    src={logo}
                    alt="vTech Software"
                    className={`
                      w-auto object-contain transition-all duration-500
                      ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-[72px]"}
                    `}
                  />

                  {/* Online indicator */}
                  <span className="absolute top-1 right-0 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* =================================================
                DESKTOP NAV
            ================================================= */}

            <div className="hidden xl:flex items-center gap-1 flex-1 justify-center">

              {navLinks.map((link, index) => {
                const active =
                  isActive(link.path) ||
                  (link.dropdown &&
                    link.dropdown.some((item) =>
                      isActive(item.path)
                    ));

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (link.dropdown) {
                        setActiveDropdown(index);
                      }
                    }}
                  >

                    {link.dropdown ? (
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === index
                              ? null
                              : index
                          )
                        }
                        className={`
                          relative flex items-center gap-2
                          px-4 py-3 rounded-xl
                          font-semibold text-[15px]
                          transition-all duration-300
                          ${
                            active
                              ? "text-blue-600 bg-blue-50"
                              : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                          }
                        `}
                      >
                        {link.name}

                        <motion.span
                          animate={{
                            rotate:
                              activeDropdown === index
                                ? 180
                                : 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                        >
                          <FaChevronDown className="text-[10px]" />
                        </motion.span>

                        {active && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={closeAllMenus}
                        className={`
                          relative flex items-center
                          px-4 py-3 rounded-xl
                          font-semibold text-[15px]
                          transition-all duration-300
                          ${
                            active
                              ? "text-blue-600 bg-blue-50"
                              : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                          }
                        `}
                      >
                        {link.name}

                        {active && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                          />
                        )}
                      </Link>
                    )}

                    {/* =================================================
                        MEGA MENU
                    ================================================= */}

                    <AnimatePresence>
                      {link.dropdown &&
                        activeDropdown === index && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 12,
                              scale: 0.97,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            exit={{
                              opacity: 0,
                              y: 12,
                              scale: 0.97,
                            }}
                            transition={{
                              duration: 0.22,
                            }}
                            onMouseLeave={() =>
                              setActiveDropdown(null)
                            }
                            className="
                              absolute
                              top-full
                              left-1/2
                              -translate-x-1/2
                              pt-4
                              w-[860px]
                              max-w-[calc(100vw-40px)]
                            "
                          >

                            <div className="relative overflow-hidden rounded-[28px] bg-white border border-slate-200 shadow-[0_25px_80px_rgba(15,23,42,0.18)]">

                              {/* Glow */}
                              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
                              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

                              {/* HEADER */}

                              <div className="relative px-7 py-6 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">

                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

                                <div className="relative flex items-center justify-between">

                                  <div className="flex items-center gap-4">

                                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 backdrop-blur flex items-center justify-center text-white shadow-lg">
                                      <FaRocket />
                                    </div>

                                    <div>
                                      <h3 className="text-white font-bold text-lg">
                                        Explore Our Features
                                      </h3>

                                      <p className="text-blue-200 text-sm mt-0.5">
                                        Powerful tools designed for modern businesses
                                      </p>
                                    </div>

                                  </div>

                                  <Link
                                    to="/explore-our-services"
                                    onClick={closeAllMenus}
                                    className="hidden sm:flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
                                  >
                                    View All
                                    <FaArrowRight className="text-xs" />
                                  </Link>

                                </div>
                              </div>

                              {/* FEATURE GRID */}

                              <div className="relative p-5 grid grid-cols-2 gap-3">

                                {link.dropdown.map(
                                  (item, idx) => {
                                    const itemActive =
                                      isActive(item.path);

                                    return (
                                      <motion.div
                                        key={item.name}
                                        initial={{
                                          opacity: 0,
                                          x: -15,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          x: 0,
                                        }}
                                        transition={{
                                          delay:
                                            idx * 0.035,
                                        }}
                                      >
                                        <Link
                                          to={item.path}
                                          onClick={closeAllMenus}
                                          className={`
                                            group relative
                                            flex items-center gap-4
                                            p-4
                                            rounded-2xl
                                            border
                                            transition-all duration-300
                                            ${
                                              itemActive
                                                ? "bg-blue-50 border-blue-200"
                                                : "border-transparent hover:border-blue-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                                            }
                                          `}
                                        >

                                          {/* ICON */}

                                          <div
                                            className={`
                                              shrink-0
                                              w-12 h-12
                                              rounded-2xl
                                              flex items-center justify-center
                                              text-white text-lg
                                              shadow-lg
                                              transition-all duration-300
                                              ${
                                                itemActive
                                                  ? "bg-gradient-to-br from-blue-600 to-indigo-600"
                                                  : "bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-110 group-hover:rotate-2"
                                              }
                                            `}
                                          >
                                            {item.icon}
                                          </div>

                                          {/* TEXT */}

                                          <div className="min-w-0">

                                            <h4
                                              className={`
                                                font-bold text-[15px]
                                                transition-colors
                                                ${
                                                  itemActive
                                                    ? "text-blue-600"
                                                    : "text-slate-800 group-hover:text-blue-600"
                                                }
                                              `}
                                            >
                                              {item.name}
                                            </h4>

                                            <p className="text-slate-500 text-xs mt-1">
                                              {item.desc}
                                            </p>

                                          </div>

                                          <FaAngleRight
                                            className="
                                              ml-auto
                                              shrink-0
                                              text-slate-300
                                              group-hover:text-blue-500
                                              group-hover:translate-x-1
                                              transition-all
                                            "
                                          />

                                        </Link>
                                      </motion.div>
                                    );
                                  }
                                )}

                              </div>

                              {/* FOOTER */}

                              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">

                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                  <FaCheckCircle className="text-emerald-500" />
                                  <span>
                                    Integrated business management
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                                  <FaCloud className="text-blue-500" />
                                  Cloud Ready
                                </div>

                              </div>

                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}

            <div className="flex items-center gap-2 sm:gap-3">

              {/* SEARCH */}

              <motion.button
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                      }
                }
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowSearch(true);
                  setMenuOpen(false);
                }}
                aria-label="Search"
                className="
                  relative
                  w-11 h-11
                  sm:w-12 sm:h-12
                  rounded-xl
                  flex items-center justify-center
                  text-slate-700
                  bg-slate-50
                  border border-slate-200
                  hover:bg-blue-50
                  hover:border-blue-200
                  hover:text-blue-600
                  transition-all
                "
              >
                <FaSearch />

                <span className="hidden sm:block absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white" />
              </motion.button>

              {/* MAP */}

              <motion.button
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.05,
                      }
                }
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowMap(true);
                  setMenuOpen(false);
                }}
                aria-label="Location"
                className="
                  hidden md:flex
                  w-11 h-11
                  sm:w-12 sm:h-12
                  rounded-xl
                  items-center justify-center
                  text-slate-700
                  bg-slate-50
                  border border-slate-200
                  hover:bg-blue-50
                  hover:border-blue-200
                  hover:text-blue-600
                  transition-all
                "
              >
                <FaMapMarkerAlt />
              </motion.button>

              {/* LOGIN */}

              <Link
                to="/login"
                onClick={closeAllMenus}
                className="
                  hidden lg:flex
                  items-center
                  gap-2
                  px-5
                  py-3
                  rounded-xl
                  border border-slate-200
                  bg-white
                  text-slate-700
                  font-bold
                  text-sm
                  hover:border-blue-300
                  hover:text-blue-600
                  hover:bg-blue-50
                  transition-all
                "
              >
                <FaUser className="text-sm" />
                Login
              </Link>

              {/* BOOK DEMO */}

              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -2,
                      }
                }
                whileTap={{ scale: 0.97 }}
                className="hidden sm:block"
              >
                <Link
                  to="/book-demo-section"
                  onClick={closeAllMenus}
                  className="
                    relative
                    overflow-hidden
                    flex items-center
                    gap-2
                    px-5 lg:px-6
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-600
                    to-purple-600
                    text-white
                    font-bold
                    text-sm
                    shadow-lg
                    shadow-blue-500/20
                    hover:shadow-xl
                    hover:shadow-blue-500/30
                    transition-all
                  "
                >
                  <span className="relative z-10">
                    Book Demo
                  </span>

                  <FaArrowRight className="relative z-10 text-xs group-hover:translate-x-1" />

                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full hover:translate-x-full transition-transform duration-700" />
                </Link>
              </motion.div>

              {/* MOBILE MENU */}

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={toggleMenu}
                aria-label={
                  menuOpen
                    ? "Close menu"
                    : "Open menu"
                }
                className="
                  xl:hidden
                  w-11 h-11
                  sm:w-12 sm:h-12
                  rounded-xl
                  flex items-center justify-center
                  bg-slate-900
                  text-white
                  shadow-lg
                "
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{
                        rotate: -90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        opacity: 0,
                      }}
                    >
                      <FaTimes size={19} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        rotate: 90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        opacity: 0,
                      }}
                    >
                      <FaBars size={19} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE DRAWER
        ===================================================== */}

        <AnimatePresence>
          {menuOpen && (
            <>
              {/* BACKDROP */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-0 bg-slate-950/60 backdrop-blur-md z-[998]"
                onClick={() => setMenuOpen(false)}
              />

              {/* DRAWER */}

              <motion.aside
                initial={{
                  x: "100%",
                }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: "100%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 32,
                }}
                className="
                  fixed
                  top-0
                  right-0
                  h-screen
                  w-full
                  max-w-[430px]
                  bg-white
                  z-[999]
                  shadow-2xl
                  overflow-y-auto
                "
              >

                {/* MOBILE HEADER */}

                <div className="relative overflow-hidden bg-[#07111f] px-6 pt-7 pb-8">

                  <div className="absolute -top-24 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />

                  <div className="absolute -bottom-32 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <Link
                        to="/"
                        onClick={closeAllMenus}
                      >
                        <img
                          src={logo}
                          alt="vTech Software"
                          className="h-14 w-auto"
                        />
                      </Link>

                      <button
                        onClick={() =>
                          setMenuOpen(false)
                        }
                        className="
                          w-11 h-11
                          rounded-xl
                          bg-white/10
                          border border-white/10
                          text-white
                          flex items-center justify-center
                          hover:bg-white/20
                          transition
                        "
                      >
                        <FaTimes />
                      </button>

                    </div>

                    <div className="mt-7">

                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/10 text-emerald-300 text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        ERP Solutions
                      </div>

                      <h2 className="text-white text-2xl font-bold mt-4">
                        vTech Software
                      </h2>

                      <p className="text-slate-400 text-sm mt-1">
                        Your trusted technology & ERP partner
                      </p>

                    </div>

                    {/* QUICK STATS */}

                    <div className="grid grid-cols-3 gap-2 mt-6">

                      <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                        <p className="text-white font-bold text-xl">
                          5000+
                        </p>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                          Customers
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                        <p className="text-white font-bold text-xl">
                          15+
                        </p>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                          Years
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/5 border border-white/10 p-3">
                        <p className="text-white font-bold text-xl">
                          24/7
                        </p>
                        <p className="text-slate-400 text-[10px] uppercase tracking-wide">
                          Support
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                {/* MOBILE LINKS */}

                <div className="p-4">

                  {navLinks.map((link, index) => {

                    const active =
                      isActive(link.path) ||
                      (link.dropdown &&
                        link.dropdown.some((item) =>
                          isActive(item.path)
                        ));

                    return (
                      <div
                        key={link.name}
                        className="mb-1"
                      >

                        {link.dropdown ? (
                          <>
                            <button
                              onClick={() =>
                                setActiveDropdown(
                                  activeDropdown === index
                                    ? null
                                    : index
                                )
                              }
                              className={`
                                w-full
                                flex items-center justify-between
                                px-5 py-4
                                rounded-xl
                                font-bold
                                text-[16px]
                                transition-all
                                ${
                                  active
                                    ? "text-blue-600 bg-blue-50"
                                    : "text-slate-700 hover:bg-slate-50"
                                }
                              `}
                            >

                              <span className="flex items-center gap-3">
                                {link.name}

                                {active && (
                                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                )}
                              </span>

                              <motion.span
                                animate={{
                                  rotate:
                                    activeDropdown === index
                                      ? 180
                                      : 0,
                                }}
                              >
                                <FaChevronDown className="text-xs text-slate-400" />
                              </motion.span>

                            </button>

                            <AnimatePresence>
                              {activeDropdown === index && (
                                <motion.div
                                  initial={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  animate={{
                                    height: "auto",
                                    opacity: 1,
                                  }}
                                  exit={{
                                    height: 0,
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: 0.3,
                                  }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-3 mt-1 mb-2 pl-3 border-l-2 border-blue-100">

                                    {link.dropdown.map(
                                      (item) => {
                                        const itemActive =
                                          isActive(item.path);

                                        return (
                                          <Link
                                            key={item.name}
                                            to={item.path}
                                            onClick={
                                              closeAllMenus
                                            }
                                            className={`
                                              flex items-center gap-3
                                              p-3
                                              rounded-xl
                                              transition-all
                                              ${
                                                itemActive
                                                  ? "bg-blue-50 text-blue-600"
                                                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                              }
                                            `}
                                          >

                                            <div
                                              className={`
                                                w-10 h-10
                                                rounded-xl
                                                flex items-center justify-center
                                                shrink-0
                                                ${
                                                  itemActive
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-blue-50 text-blue-600"
                                                }
                                              `}
                                            >
                                              {item.icon}
                                            </div>

                                            <div className="min-w-0">
                                              <p className="font-semibold text-sm">
                                                {item.name}
                                              </p>

                                              <p className="text-[11px] text-slate-400 mt-0.5">
                                                {item.desc}
                                              </p>
                                            </div>

                                            <FaAngleRight className="ml-auto text-xs text-slate-300" />

                                          </Link>
                                        );
                                      }
                                    )}

                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={link.path}
                            onClick={closeAllMenus}
                            className={`
                              flex items-center justify-between
                              px-5 py-4
                              rounded-xl
                              font-bold
                              text-[16px]
                              transition-all
                              ${
                                active
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-slate-700 hover:bg-slate-50"
                              }
                            `}
                          >
                            <span>{link.name}</span>

                            {active && (
                              <span className="w-2 h-2 rounded-full bg-blue-500" />
                            )}
                          </Link>
                        )}

                      </div>
                    );
                  })}

                  {/* MOBILE ACTIONS */}

                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">

                    <Link
                      to="/login"
                      onClick={closeAllMenus}
                      className="
                        flex items-center justify-center gap-2
                        w-full
                        px-5 py-4
                        rounded-2xl
                        border border-slate-200
                        text-slate-700
                        font-bold
                        hover:border-blue-300
                        hover:text-blue-600
                        hover:bg-blue-50
                        transition-all
                      "
                    >
                      <FaUser />
                      Login
                    </Link>

                    <Link
                      to="/book-demo-section"
                      onClick={closeAllMenus}
                      className="
                        flex items-center justify-center gap-2
                        w-full
                        px-5 py-4
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-purple-600
                        text-white
                        font-bold
                        shadow-lg
                      "
                    >
                      <FaRocket />
                      Book Free Demo
                    </Link>

                  </div>

                  {/* CONTACT */}

                  <div className="mt-7 p-5 rounded-2xl bg-slate-50 border border-slate-100">

                    <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-4">
                      Need Help?
                    </p>

                    <div className="space-y-3">

                      <a
                        href="tel:+919326870893"
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <span className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                          <FaPhone size={12} />
                        </span>

                        +91 9326870893
                      </a>

                      <a
                        href="mailto:vtechsoftwarevishal@gmail.com"
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                          <FaEnvelope size={12} />
                        </span>

                        <span className="truncate">
                          vtechsoftwarevishal@gmail.com
                        </span>
                      </a>

                    </div>

                  </div>

                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* =====================================================
          SEARCH OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 sm:pt-28 px-4"
          >

            {/* BACKDROP */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
              onClick={() => setShowSearch(false)}
            />

            {/* SEARCH PANEL */}

            <motion.div
              initial={{
                opacity: 0,
                y: -40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -40,
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
              }}
              className="relative w-full max-w-3xl"
            >

              <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

                {/* SEARCH HEADER */}

                <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-5 sm:p-6">

                  <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-blue-500/20 blur-3xl" />

                  <div className="relative flex items-center gap-4">

                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
                      <FaSearch />
                    </div>

                    <div className="flex-1">

                      <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-1">
                        Search vTech
                      </p>

                      <input
                        ref={searchRef}
                        type="text"
                        value={query}
                        onChange={handleSearch}
                        placeholder="Search features, pages, modules..."
                        className="
                          w-full
                          bg-transparent
                          text-white
                          placeholder:text-slate-500
                          outline-none
                          text-base sm:text-lg
                          font-medium
                        "
                      />

                    </div>

                    <button
                      onClick={() => {
                        setShowSearch(false);
                        setQuery("");
                        setResults([]);
                      }}
                      className="
                        hidden sm:flex
                        items-center gap-2
                        px-3 py-2
                        rounded-xl
                        bg-white/10
                        border border-white/10
                        text-white/70
                        hover:text-white
                        hover:bg-white/20
                        transition
                        text-xs font-bold
                      "
                    >
                      ESC
                    </button>

                  </div>

                </div>

                {/* RESULTS */}

                <div className="max-h-[60vh] overflow-y-auto">

                  {!query && (
                    <div className="p-8 sm:p-10 text-center">

                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mx-auto mb-4">
                        <FaLaptopCode className="text-2xl" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-800">
                        What are you looking for?
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        Search our ERP modules, features and pages.
                      </p>

                      <div className="flex flex-wrap justify-center gap-2 mt-5">

                        {[
                          "CRM",
                          "ERP",
                          "Inventory",
                          "Accounting",
                          "Payroll",
                        ].map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              setQuery(tag.toLowerCase());

                              const filtered =
                                searchItems.filter(
                                  (item) =>
                                    item.name
                                      .toLowerCase()
                                      .includes(
                                        tag.toLowerCase()
                                      )
                                );

                              setResults(filtered);
                            }}
                            className="
                              px-3 py-1.5
                              rounded-full
                              bg-slate-50
                              border border-slate-200
                              text-xs
                              font-semibold
                              text-slate-600
                              hover:border-blue-200
                              hover:bg-blue-50
                              hover:text-blue-600
                              transition
                            "
                          >
                            {tag}
                          </button>
                        ))}

                      </div>

                    </div>
                  )}

                  {results.length > 0 && (
                    <div className="p-3 sm:p-4">

                      <div className="px-3 py-2 flex items-center justify-between">
                        <p className="text-xs uppercase tracking-wider font-bold text-slate-400">
                          Search Results
                        </p>

                        <span className="text-xs text-slate-400">
                          {results.length} found
                        </span>
                      </div>

                      <div className="space-y-1">

                        {results.map((item, index) => (
                          <motion.button
                            key={`${item.path}-${index}`}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: index * 0.03,
                            }}
                            onClick={() =>
                              handleSelect(item.path)
                            }
                            className="
                              w-full
                              flex items-center gap-4
                              p-4
                              rounded-2xl
                              text-left
                              hover:bg-blue-50
                              transition-all
                              group
                            "
                          >

                            <div className="
                              w-11 h-11
                              shrink-0
                              rounded-xl
                              bg-gradient-to-br
                              from-blue-500
                              to-purple-500
                              text-white
                              flex items-center justify-center
                              shadow-md
                              group-hover:scale-105
                              transition-transform
                            ">
                              <FaLaptopCode />
                            </div>

                            <div className="flex-1 min-w-0">

                              <p className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {item.name}
                              </p>

                              <p className="text-xs text-slate-400 mt-1">
                                Open this page
                              </p>

                            </div>

                            <FaAngleRight className="
                              text-slate-300
                              group-hover:text-blue-500
                              group-hover:translate-x-1
                              transition-all
                            " />

                          </motion.button>
                        ))}

                      </div>

                    </div>
                  )}

                  {query && results.length === 0 && (
                    <div className="p-12 text-center">

                      <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mx-auto mb-5">
                        <FaSearch className="text-slate-400 text-2xl" />
                      </div>

                      <h3 className="text-lg font-bold text-slate-800">
                        No results found
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        We couldn't find anything for{" "}
                        <span className="font-semibold text-slate-700">
                          "{query}"
                        </span>
                      </p>

                      <button
                        onClick={() => {
                          setQuery("");
                          setResults([]);
                        }}
                        className="mt-5 text-sm font-bold text-blue-600 hover:text-blue-700"
                      >
                        Clear Search
                      </button>

                    </div>
                  )}

                </div>

              </div>

              {/* SEARCH HINT */}

              <div className="hidden sm:flex justify-center mt-5">
                <p className="text-xs text-white/50">
                  Press{" "}
                  <span className="px-2 py-1 rounded-md bg-white/10 text-white/70">
                    ESC
                  </span>{" "}
                  to close
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MAP OVERLAY
      ===================================================== */}

      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
          >

            {/* BACKDROP */}

            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setShowMap(false)}
            />

            {/* MAP MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
              }}
              className="
                relative
                w-full
                max-w-6xl
                h-[85vh]
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-[0_30px_100px_rgba(0,0,0,0.4)]
              "
            >

              {/* MAP HEADER */}

              <div className="
                absolute
                top-0
                left-0
                right-0
                z-20
                flex items-center justify-between
                px-5 sm:px-6
                py-4
                bg-white/90
                backdrop-blur-xl
                border-b border-slate-200
              ">

                <div className="flex items-center gap-3">

                  <div className="
                    w-10 h-10
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    flex items-center justify-center
                  ">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800">
                      Find Us
                    </h3>

                    <p className="hidden sm:block text-xs text-slate-500">
                      vTech Software Solutions
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => setShowMap(false)}
                  className="
                    flex items-center gap-2
                    px-4 py-2.5
                    rounded-xl
                    bg-slate-900
                    text-white
                    font-bold
                    text-sm
                    hover:bg-slate-800
                    transition
                  "
                >
                  <FaTimes />
                  <span className="hidden sm:inline">
                    Close
                  </span>
                </button>

              </div>

              {/* MAP */}

              <iframe
                title="vTech Software Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902988654204!2d90.398197!3d23.780887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c38b4e1f27%3A0xa4e2a22712345678!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationSection;