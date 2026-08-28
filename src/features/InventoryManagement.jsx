import React from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Package,
  Boxes,
  Warehouse,
  TrendingUp,
  BarChart3,
  RefreshCw,
  Search,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Truck,
  ClipboardList,
  AlertTriangle,
  Layers3,
} from "lucide-react";

import features from "../data/features";
import inventoyImage from "../assets/inventoyImage.jpg";
import webDevServicesImage from "../assets/webDevServicesImage.jpg";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const inventoryFunctions = [
  {
    title: "Stock Tracking",
    description:
      "Monitor available stock, reserved items, incoming goods and outgoing products in real time.",
    icon: Package,
  },
  {
    title: "Reorder Point",
    description:
      "Automatically identify when stock reaches the minimum threshold and needs replenishment.",
    icon: RefreshCw,
  },
  {
    title: "Warehouse Management",
    description:
      "Organize products across warehouses, racks, locations and storage zones efficiently.",
    icon: Warehouse,
  },
  {
    title: "Demand Forecasting",
    description:
      "Use historical sales data to estimate future demand and maintain optimal inventory levels.",
    icon: TrendingUp,
  },
  {
    title: "Inventory Valuation",
    description:
      "Maintain accurate inventory valuation and understand the financial value of your stock.",
    icon: BarChart3,
  },
  {
    title: "Purchase Planning",
    description:
      "Plan purchasing activities according to demand, stock availability and supplier lead times.",
    icon: ClipboardList,
  },
  {
    title: "Stock Alerts",
    description:
      "Get timely alerts for low stock, excess inventory, slow-moving products and shortages.",
    icon: AlertTriangle,
  },
  {
    title: "Inventory Reports",
    description:
      "Generate detailed reports for stock movement, valuation, availability and inventory performance.",
    icon: Layers3,
  },
];

const inventoryStats = [
  {
    value: "24/7",
    label: "Stock Visibility",
    icon: Search,
  },
  {
    value: "100%",
    label: "Centralized Data",
    icon: Boxes,
  },
  {
    value: "Real-Time",
    label: "Inventory Updates",
    icon: RefreshCw,
  },
  {
    value: "Smart",
    label: "Demand Planning",
    icon: TrendingUp,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Track Stock",
    description:
      "Monitor every product entering and leaving your business.",
  },
  {
    number: "02",
    title: "Analyze Demand",
    description:
      "Understand customer demand using historical inventory and sales data.",
  },
  {
    number: "03",
    title: "Automate Reorder",
    description:
      "Receive alerts when stock reaches the predefined reorder level.",
  },
  {
    number: "04",
    title: "Optimize Warehouse",
    description:
      "Organize products and storage locations for faster operations.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const InventoryManagement = () => {
  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[720px] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <Motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >

              {/* Badge */}

              <Motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-md"
              >
                <Sparkles className="h-4 w-4 text-cyan-300" />

                Smart Inventory Management

              </Motion.div>

              {/* Heading */}

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white">

                Take Control of

                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Your Inventory
                </span>

              </h1>

              {/* Description */}

              <p className="max-w-2xl text-lg sm:text-xl leading-8 text-blue-100/80">

                Manage stock, warehouses, purchases and demand from one
                centralized platform. Get real-time visibility and make
                smarter inventory decisions with confidence.

              </p>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-900 shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Get Started

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                </Link>

                <a
                  href="#inventory-features"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  Explore Features
                </a>

              </div>

              {/* Trust Points */}

              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-3 text-sm text-blue-100/80">

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  Real-time visibility
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  Smart automation
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  Better decisions
                </span>

              </div>

            </Motion.div>

            {/* RIGHT IMAGE */}

            <Motion.div
              variants={fadeRight}
              initial="hidden"
              animate="show"
              className="relative"
            >

              {/* Glow */}

              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-3xl" />

              <Motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >

                <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">

                  <img
                    src={inventoyImage}
                    alt="Inventory Management Dashboard"
                    className="h-[460px] w-full rounded-[1.5rem] object-cover"
                  />

                </div>

                {/* Floating Card */}

                <Motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:block"
                >

                  <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-blue-100 p-3">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-gray-500">
                        Inventory Status
                      </p>

                      <p className="text-lg font-bold text-gray-900">
                        Optimized
                      </p>
                    </div>

                  </div>

                </Motion.div>

                {/* Floating Alert */}

                <Motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute -right-5 top-10 hidden rounded-xl border border-white/20 bg-white/95 px-4 py-3 shadow-2xl sm:block"
                >

                  <div className="flex items-center gap-2">

                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                    <span className="text-sm font-semibold text-gray-800">
                      Stock Updated
                    </span>

                  </div>

                </Motion.div>

              </Motion.div>

            </Motion.div>

          </div>

        </div>

        {/* Bottom Curve */}

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white [clip-path:ellipse(70%_100%_at_50%_100%)]" />

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <Motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >

              <span className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                INVENTORY MANAGEMENT
              </span>

              <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">

                Keep the right stock,

                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  at the right time.
                </span>

              </h2>

              <div className="mt-7 space-y-5 text-lg leading-8 text-gray-600">

                <p>
                  Inventory management is the process of ordering, storing,
                  tracking and controlling a company's inventory.
                </p>

                <p>
                  It covers everything from raw materials and components to
                  finished products, helping businesses maintain the right
                  quantity of stock without unnecessary costs.
                </p>

                <p>
                  With a centralized inventory system, businesses can improve
                  visibility, reduce shortages, minimize excess stock and
                  respond faster to customer demand.
                </p>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                {[
                  "Centralized inventory",
                  "Automated alerts",
                  "Warehouse visibility",
                  "Demand planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3 text-sm font-semibold text-gray-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    {item}
                  </div>
                ))}

              </div>

            </Motion.div>

            <Motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >

              <div className="absolute -inset-5 rounded-[3rem] bg-blue-100/60 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-3 shadow-2xl">

                <img
                  src={webDevServicesImage}
                  alt="Inventory Operations"
                  className="h-[480px] w-full rounded-[1.5rem] object-cover"
                />

              </div>

            </Motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >

            {inventoryStats.map((stat) => {

              const Icon = stat.icon;

              return (
                <Motion.div
                  key={stat.label}
                  variants={cardAnimation}
                  whileHover={{
                    y: -8,
                  }}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl"
                >

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">

                    <Icon className="h-6 w-6" />

                  </div>

                  <h3 className="text-3xl font-black text-gray-900">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-gray-500">
                    {stat.label}
                  </p>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section
        id="inventory-features"
        className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-24"
      >

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              POWERFUL CAPABILITIES
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900">

              Everything you need to

              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                manage inventory
              </span>

            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              From stock tracking to demand forecasting, manage the entire
              inventory lifecycle from one intelligent platform.
            </p>

          </Motion.div>


          {/* Feature Grid */}

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >

            {inventoryFunctions.map((feature) => {

              const Icon = feature.icon;

              return (
                <Motion.div
                  key={feature.title}
                  variants={cardAnimation}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
                >

                  {/* Hover Background */}

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-[3]" />

                  <div className="relative z-10">

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">

                      <Icon className="h-7 w-7" />

                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {feature.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600">

                      Learn more

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                    </div>

                  </div>

                </Motion.div>
              );
            })}

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-slate-950 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >

            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300">
              HOW IT WORKS
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
              A smarter inventory workflow
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Connect inventory operations into one simple and intelligent
              workflow.
            </p>

          </Motion.div>


          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >

            {processSteps.map((step) => (
              <Motion.div
                key={step.number}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]"
              >

                <span className="text-5xl font-black text-blue-500/30 transition-colors duration-300 group-hover:text-blue-400/60">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {step.description}
                </p>

              </Motion.div>
            ))}

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          REAL WORLD EXAMPLE
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <Motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >

              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-blue-100 to-indigo-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl">

                <img
                  src={inventoyImage}
                  alt="Inventory Management Example"
                  className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />

              </div>

            </Motion.div>


            <Motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-7"
            >

              <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700">
                REAL-WORLD EXAMPLE
              </span>

              <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">

                From stock problems to

                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  predictable operations.
                </span>

              </h2>

              <p className="text-lg leading-8 text-gray-600">
                Imagine a clothing retailer preparing for its winter season.
                Instead of manually checking stock, the inventory system
                continuously monitors product quantities and identifies when
                replenishment is required.
              </p>

              <div className="space-y-4">

                {[
                  {
                    title: "Stock Levels",
                    text: "The system continuously tracks available coats by size, color and warehouse.",
                    icon: Package,
                  },
                  {
                    title: "Reorder Point",
                    text: "When stock falls below the defined threshold, the system alerts the purchasing team.",
                    icon: AlertTriangle,
                  },
                  {
                    title: "Demand Forecasting",
                    text: "Historical sales data helps estimate upcoming seasonal demand.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Warehouse Organization",
                    text: "Products are organized for quick picking, packing and dispatch.",
                    icon: Warehouse,
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <Motion.div
                      key={item.title}
                      whileHover={{ x: 6 }}
                      className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-300 hover:bg-white hover:shadow-lg"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

                        <Icon className="h-5 w-5" />

                      </div>

                      <div>

                        <h4 className="font-bold text-gray-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {item.text}
                        </p>

                      </div>

                    </Motion.div>
                  );
                })}

              </div>

            </Motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXISTING ERP FEATURES
      ===================================================== */}

      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              COMPLETE ERP ECOSYSTEM
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900">
              Explore other modules
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Connect inventory with sales, payroll, accounting, production
              and other business functions.
            </p>

          </Motion.div>


          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >

            {features.map((feature, index) => (
              <Motion.div
                key={`${feature.name}-${index}`}
                variants={cardAnimation}
                whileHover={{
                  y: -7,
                  scale: 1.02,
                }}
                className="group"
              >

                <Link
                  to={feature.link}
                  className="flex h-full items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">

                      <Boxes className="h-5 w-5" />

                    </div>

                    <span className="font-bold text-gray-800">
                      {feature.name}
                    </span>

                  </div>

                  <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600" />

                </Link>

              </Motion.div>
            ))}

          </Motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 py-24">

        <div className="absolute inset-0">

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        </div>

        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-md">

            <ShieldCheck className="h-8 w-8" />

          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Ready to transform your inventory?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Bring stock, warehouses, purchasing and demand planning together
            with a modern inventory management solution.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Talk to Our Team

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
            >
              Explore ERP
            </Link>

          </div>

        </Motion.div>

      </section>

    </main>
  );
};

export default InventoryManagement;