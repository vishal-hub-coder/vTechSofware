import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaCogs,
  FaMobileAlt,
  FaCloud,
  FaSync,
  FaWrench,
  FaDatabase,
  FaPlug,
  FaRocket,
  FaExchangeAlt,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaChartLine,
  FaBullseye,
  FaShieldAlt,
  FaRobot,
  FaLayerGroup,
  FaBolt,
  FaBrain,
  FaInfinity,
  FaLightbulb,
  FaChevronRight,
} from "react-icons/fa";

import crmImage from "../assets/crm-mangement.svg";
import whyCrmImage from "../assets/why-crm.svg";

/* =========================================================
   CRM MODULES
========================================================= */

const crmModules = [
  {
    title: "CRM Module Development",
    description:
      "Design and integrate powerful CRM modules for KPI tracking, performance analysis, task management and business workflows.",
    icon: FaCogs,
    color: "from-violet-500 to-purple-600",
    light: "bg-violet-50 text-violet-600",
  },
  {
    title: "CRM Mobile Applications",
    description:
      "Give your team access to customer data, leads, tasks and reports from anywhere through modern mobile CRM applications.",
    icon: FaMobileAlt,
    color: "from-blue-500 to-cyan-500",
    light: "bg-blue-50 text-blue-600",
  },
  {
    title: "Cloud CRM Software",
    description:
      "Build scalable cloud CRM platforms that allow your teams to securely access business data from anywhere.",
    icon: FaCloud,
    color: "from-cyan-500 to-blue-600",
    light: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "CRM Maintenance & Upgrades",
    description:
      "Keep your CRM secure, optimized and up-to-date with continuous maintenance, performance improvements and upgrades.",
    icon: FaSync,
    color: "from-emerald-500 to-teal-600",
    light: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "CRM Customization",
    description:
      "Customize your existing CRM around your actual business processes, teams, workflows and reporting requirements.",
    icon: FaWrench,
    color: "from-orange-500 to-red-500",
    light: "bg-orange-50 text-orange-600",
  },
  {
    title: "CRM Database Management",
    description:
      "Organize customer information, documents, records and databases with secure and efficient data management.",
    icon: FaDatabase,
    color: "from-indigo-500 to-violet-600",
    light: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "CRM System Integration",
    description:
      "Connect CRM with accounting, ERP, email, communication, payment and third-party business systems.",
    icon: FaPlug,
    color: "from-pink-500 to-rose-600",
    light: "bg-pink-50 text-pink-600",
  },
  {
    title: "CRM Implementation",
    description:
      "Deploy your CRM with a structured implementation process focused on usability, security and business productivity.",
    icon: FaRocket,
    color: "from-yellow-500 to-orange-600",
    light: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "CRM Migration",
    description:
      "Move your existing customer and business data to a modern CRM platform with minimal disruption.",
    icon: FaExchangeAlt,
    color: "from-fuchsia-500 to-purple-600",
    light: "bg-fuchsia-50 text-fuchsia-600",
  },
];

/* =========================================================
   CRM TYPES
========================================================= */

const crmTypes = [
  {
    title: "Analytical CRM",
    desc: "Turn customer information into actionable insights using reporting, analytics and performance intelligence.",
    icon: FaChartLine,
  },
  {
    title: "Strategic CRM",
    desc: "Build long-term customer relationships by understanding customer needs, behavior and business value.",
    icon: FaBullseye,
  },
  {
    title: "Collaborative CRM",
    desc: "Connect teams, communication channels and customer information to create a unified business workflow.",
    icon: FaUsers,
  },
  {
    title: "Operational CRM",
    desc: "Automate sales, marketing and support processes so your team can focus on customers instead of repetitive work.",
    icon: FaBolt,
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    number: "360°",
    label: "Customer Visibility",
    icon: FaUsers,
  },
  {
    number: "24/7",
    label: "Cloud Accessibility",
    icon: FaCloud,
  },
  {
    number: "100%",
    label: "Customizable",
    icon: FaCogs,
  },
  {
    number: "∞",
    label: "Scalable Architecture",
    icon: FaInfinity,
  },
];

/* =========================================================
   WHY CRM
========================================================= */

const whyFeatures = [
  {
    icon: FaShieldAlt,
    title: "Enterprise Security",
    desc: "Protect sensitive customer and business data with secure architecture.",
  },
  {
    icon: FaRobot,
    title: "Smart Automation",
    desc: "Automate repetitive tasks, reminders, workflows and follow-ups.",
  },
  {
    icon: FaChartLine,
    title: "Actionable Analytics",
    desc: "Monitor performance and discover opportunities through real-time insights.",
  },
  {
    icon: FaLayerGroup,
    title: "Scalable Platform",
    desc: "Expand your CRM as your customers, teams and business requirements grow.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Understand",
    desc: "We understand your business processes, customers, teams and operational challenges.",
  },
  {
    number: "02",
    title: "Design",
    desc: "We create a CRM architecture and user experience around your real business requirements.",
  },
  {
    number: "03",
    title: "Develop",
    desc: "Our team builds scalable CRM modules, integrations, automation and dashboards.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    desc: "After deployment, we continuously improve your CRM as your business grows.",
  },
];

/* =========================================================
   TILT CARD
========================================================= */

const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [7, -7]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   REVEAL COMPONENT
========================================================= */

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const directions = {
    up: { y: 45, x: 0 },
    down: { y: -45, x: 0 },
    left: { y: 0, x: -55 },
    right: { y: 0, x: 55 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Crm = () => {
  const [activeModule, setActiveModule] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F8FAFC] text-slate-900">

      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Purple Aurora */}

        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-200/50 blur-[120px]"
        />

        {/* Blue Aurora */}

        <motion.div
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-[350px] h-[550px] w-[550px] rounded-full bg-sky-200/40 blur-[130px]"
        />

        {/* Soft Grid */}

        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,116,139,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,116,139,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative z-10 px-5 pb-20 pt-16 sm:px-8 lg:px-16 lg:pt-20">

        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-violet-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-600" />

              </span>

              <span className="text-sm font-semibold text-violet-700">
                Intelligent CRM Solutions
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl font-black leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[76px]"
            >
              Transform Your

              <span className="relative block bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">

                Customer Relationships

                <motion.span
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="absolute -bottom-2 left-0 h-1 w-32 origin-left rounded-full bg-gradient-to-r from-violet-500 to-sky-400"
                />

              </span>

              <span className="block text-slate-950">
                Into Growth.
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.8,
              }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              Build smarter customer relationships with a powerful CRM
              platform designed to manage leads, automate workflows,
              centralize data and accelerate your business growth.
            </motion.p>

            {/* Feature Pills */}

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Lead Management",
                "Workflow Automation",
                "Real-Time Analytics",
                "Cloud CRM",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.65 + index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-xl"
                >
                  <FaCheckCircle className="text-violet-500" />
                  {item}
                </motion.div>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow:
                    "0 20px 45px -15px rgba(124,58,237,0.45)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-200"
              >

                <span className="relative z-10 flex items-center gap-3">
                  Explore CRM Solutions

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                <motion.span
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="absolute inset-y-0 w-20 skew-x-12 bg-white/20 blur-md"
                />

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50"
              >
                Talk to CRM Experts
              </motion.button>

            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.75,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-h-[550px] items-center justify-center"
          >

            {/* Ambient Glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute h-80 w-80 rounded-full bg-violet-300/40 blur-[100px]"
            />

            {/* Orbit */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[450px] w-[450px] rounded-full border border-violet-200/80"
            >

              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -right-2 top-1/2 h-4 w-4 rounded-full bg-violet-500 shadow-[0_0_25px_rgba(139,92,246,0.5)]"
              />

              <span className="absolute left-1/2 -top-2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.5)]" />

            </motion.div>

            {/* Second Orbit */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[365px] w-[365px] rounded-full border border-dashed border-sky-200"
            />

            {/* Dashboard */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[500px] rounded-[28px] border border-slate-200/80 bg-white/90 p-3 shadow-[0_35px_90px_-25px_rgba(79,70,229,0.25)] backdrop-blur-2xl"
            >

              <div className="rounded-[22px] border border-slate-100 bg-white p-6 shadow-sm">

                {/* Dashboard Header */}

                <div className="mb-7 flex items-center justify-between">

                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      CRM Dashboard
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      Business Overview
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 text-white shadow-lg shadow-violet-200"
                  >
                    <FaRobot />
                  </motion.div>

                </div>

                {/* Mini Stats */}

                <div className="grid grid-cols-2 gap-4">

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-shadow hover:shadow-lg"
                  >

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-400">
                        Customers
                      </span>

                      <FaUsers className="text-violet-500" />
                    </div>

                    <p className="mt-2 text-2xl font-black text-slate-900">
                      12,480
                    </p>

                    <p className="mt-1 text-xs font-semibold text-emerald-500">
                      +18.4%
                    </p>

                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-shadow hover:shadow-lg"
                  >

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-400">
                        Revenue
                      </span>

                      <FaChartLine className="text-sky-500" />
                    </div>

                    <p className="mt-2 text-2xl font-black text-slate-900">
                      ₹48.2L
                    </p>

                    <p className="mt-1 text-xs font-semibold text-emerald-500">
                      +24.8%
                    </p>

                  </motion.div>

                </div>

                {/* Graph */}

                <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/70 p-5">

                  <div className="mb-5 flex items-center justify-between">

                    <span className="text-sm font-medium text-slate-500">
                      Customer Growth
                    </span>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
                      +32.8%
                    </span>

                  </div>

                  <div className="flex h-28 items-end gap-2">

                    {[35, 50, 42, 65, 55, 78, 68, 92, 82, 100].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            height: 0,
                          }}
                          whileInView={{
                            height: `${height}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay: 0.3 + index * 0.07,
                            duration: 0.65,
                            ease: "easeOut",
                          }}
                          className="flex-1 rounded-t-lg bg-gradient-to-t from-violet-600 to-sky-400 opacity-80"
                        />
                      )
                    )}

                  </div>

                </div>

                {/* AI Automation */}

                <motion.div
                  animate={{
                    borderColor: [
                      "rgba(139,92,246,0.15)",
                      "rgba(139,92,246,0.35)",
                      "rgba(139,92,246,0.15)",
                    ],
                    boxShadow: [
                      "0 0 0 rgba(139,92,246,0)",
                      "0 10px 35px rgba(139,92,246,0.12)",
                      "0 0 0 rgba(139,92,246,0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="mt-5 flex items-center gap-3 rounded-2xl border bg-violet-50/60 p-4"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    <FaBrain />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      AI Workflow Active
                    </p>

                    <p className="text-xs text-slate-400">
                      24 tasks automated today
                    </p>
                  </div>

                  <div className="ml-auto h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-lg shadow-emerald-300" />

                </motion.div>

              </div>
            </motion.div>

            {/* Floating Lead Card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-2 top-24 z-20 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:-left-10"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
                  <FaCheckCircle />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Lead Converted
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    +24 Today
                  </p>
                </div>

              </div>

            </motion.div>

            {/* Floating Cloud Card */}

            <motion.div
              animate={{
                y: [0, 14, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 bottom-24 z-20 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:-right-10"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-500">
                  <FaCloud />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Cloud Status
                  </p>

                  <p className="text-sm font-bold text-emerald-500">
                    Operational
                  </p>
                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative z-10 px-5 pb-20 sm:px-8">

        <Reveal>

          <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.2)] sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    backgroundColor: "#fafafa",
                    y: -3,
                  }}
                  className="group border-b border-r border-slate-100 p-7 text-center last:border-r-0 lg:border-b-0"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-lg text-violet-600"
                  >
                    <Icon />
                  </motion.div>

                  <h3 className="text-3xl font-black text-slate-900">
                    {stat.number}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-slate-400">
                    {stat.label}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </Reveal>

      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative z-10 px-5 py-28 sm:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* Content */}

          <Reveal direction="left">

            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-violet-600">
              <span className="h-px w-8 bg-violet-500" />
              Custom CRM Development
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">

              Your Business.

              <span className="block bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                Your CRM.
              </span>

              Your Workflow.

            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Custom CRM software brings your customer data, sales,
              communication, support and business operations together
              inside one intelligent platform.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Centralized customer information",
                "Automated sales and business workflows",
                "Real-time reports and analytics",
                "Secure and scalable architecture",
              ].map((item, index) => (

                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <FaCheckCircle />
                  </div>

                  <span className="font-medium text-slate-600">
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>

          </Reveal>

          {/* Image */}

          <Reveal direction="right">

            <div className="relative flex justify-center">

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute h-80 w-80 rounded-full bg-violet-200 blur-[90px]"
              />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[400px] w-[400px] rounded-full border border-dashed border-violet-200"
              />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 rounded-[3rem] border border-slate-200 bg-white/90 p-8 shadow-[0_30px_80px_-30px_rgba(79,70,229,0.3)] backdrop-blur-xl"
              >

                <img
                  src={crmImage}
                  alt="Custom CRM Software Development"
                  className="w-full max-w-[430px]"
                />

              </motion.div>

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          MODULES
      ===================================================== */}

      <section className="relative z-10 px-5 py-28 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                Powerful Capabilities
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">

                Everything Your CRM

                <span className="block bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                  Needs to Scale
                </span>

              </h2>

              <p className="mt-5 leading-7 text-slate-500">
                Flexible CRM services designed around your business,
                customers and operational requirements.
              </p>

            </div>

          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {crmModules.map((module, index) => {

              const Icon = module.icon;

              return (
                <TiltCard
                  key={module.title}
                  className="group"
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onMouseEnter={() =>
                      setActiveModule(index)
                    }
                    onMouseLeave={() =>
                      setActiveModule(null)
                    }
                    className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_12px_45px_-25px_rgba(15,23,42,0.25)] transition-all duration-500 hover:border-violet-200 hover:shadow-[0_25px_65px_-30px_rgba(79,70,229,0.3)]"
                  >

                    {/* Hover Gradient */}

                    <motion.div
                      animate={
                        activeModule === index
                          ? {
                              scale: 1.4,
                              opacity: 0.5,
                            }
                          : {
                              scale: 1,
                              opacity: 0,
                            }
                      }
                      className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${module.color} blur-3xl`}
                    />

                    {/* Top Line */}

                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                      }}
                      className={`absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r ${module.color}`}
                    />

                    <div className="relative">

                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: -5,
                        }}
                        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${module.light} text-xl shadow-sm`}
                      >
                        <Icon />
                      </motion.div>

                      <h3 className="text-xl font-bold text-slate-900">
                        {module.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {module.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-violet-600">

                        Explore capability

                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />

                      </div>

                    </div>

                  </motion.div>

                </TiltCard>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          CRM TYPES
      ===================================================== */}

      <section className="relative z-10 px-5 py-28 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <Reveal>

            <div className="mb-14 text-center">

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                CRM Architecture
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">

                Choose the Right

                <span className="block bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
                  CRM Strategy
                </span>

              </h2>

            </div>

          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {crmTypes.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_15px_45px_-30px_rgba(15,23,42,0.25)] transition-shadow hover:shadow-[0_30px_65px_-30px_rgba(79,70,229,0.3)]"
                >

                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-100/60 blur-3xl transition-all duration-500 group-hover:bg-sky-100" />

                  <div className="relative">

                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xl text-violet-600"
                    >
                      <Icon />
                    </motion.div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CRM
      ===================================================== */}

      <section className="relative z-10 px-5 py-28 sm:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          {/* IMAGE */}

          <Reveal direction="left">

            <div className="relative flex justify-center">

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute h-80 w-80 rounded-full bg-sky-200/50 blur-[100px]"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative"
              >

                <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-violet-200/60 to-sky-200/60 blur-xl" />

                <div className="relative rounded-[3rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-30px_rgba(79,70,229,0.25)]">

                  <img
                    src={whyCrmImage}
                    alt="Why Choose CRM Solutions"
                    className="w-full max-w-[500px]"
                  />

                </div>

              </motion.div>

            </div>

          </Reveal>

          {/* CONTENT */}

          <Reveal direction="right">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-sky-600">
              Why Choose CRM
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl">

              Turn Customer Data

              <span className="block bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                Into Business Intelligence
              </span>

            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              A modern CRM gives your organization one centralized
              environment for understanding customers, managing sales,
              automating repetitive processes and making better decisions.
            </p>

            <div className="mt-9 space-y-5">

              {whyFeatures.map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      x: 7,
                    }}
                    className="group flex gap-4"
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-violet-600 shadow-sm transition group-hover:border-violet-200 group-hover:bg-violet-50"
                    >
                      <Icon />
                    </motion.div>

                    <div>

                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.desc}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative z-10 px-5 py-28 sm:px-8">

        <div className="mx-auto max-w-6xl">

          <Reveal>

            <div className="text-center">

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-600">
                Our Process
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">

                From Idea to

                <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                  {" "}Intelligent CRM
                </span>

              </h2>

            </div>

          </Reveal>

          <div className="relative mt-16">

            {/* Animated Line */}

            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="absolute left-5 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-violet-500 via-sky-400 to-transparent md:left-1/2 md:block"
            />

            {processSteps.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative mb-12 flex items-center md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >

                {/* Timeline Dot */}

                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.3 + index * 0.12,
                    type: "spring",
                  }}
                  className={`absolute hidden h-4 w-4 rounded-full border-4 border-white bg-violet-600 shadow-lg shadow-violet-200 md:block ${
                    index % 2 === 0
                      ? "-right-[8px]"
                      : "-left-[8px]"
                  }`}
                />

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="w-full rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_15px_45px_-30px_rgba(15,23,42,0.3)] transition-shadow hover:shadow-[0_25px_60px_-30px_rgba(79,70,229,0.3)]"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-sm font-black text-violet-600">
                      {item.number}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.desc}
                  </p>

                </motion.div>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative z-10 px-5 py-28 sm:px-8">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-violet-200 bg-white p-10 text-center shadow-[0_30px_90px_-35px_rgba(79,70,229,0.3)] sm:p-16"
        >

          {/* Aurora */}

          <motion.div
            animate={{
              x: ["-30%", "100%", "-30%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-full w-72 bg-gradient-to-r from-transparent via-violet-200/50 to-transparent blur-3xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/60 blur-[90px]"
          />

          <div className="relative z-10">

            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-sky-500 text-2xl text-white shadow-xl shadow-violet-200"
            >
              <FaRocket />
            </motion.div>

            <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">

              Ready to Build a

              <span className="block bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                Smarter CRM?
              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-500">
              Let's build a CRM platform that matches your workflow,
              simplifies operations and creates better customer
              experiences.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow:
                  "0 25px 50px -20px rgba(124,58,237,0.5)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group mt-9 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-sky-500 px-8 py-4 font-bold text-white shadow-xl shadow-violet-200"
            >

              Start Your CRM Project

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

            </motion.button>

          </div>

        </motion.div>

      </section>

    </main>
  );
};

export default Crm;