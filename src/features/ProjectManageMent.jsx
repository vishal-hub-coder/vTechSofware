
import React from "react";
import { motion } from "framer-motion";
import {
  FaTasks,
  FaProjectDiagram,
  FaChartLine,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaRocket,
  FaLayerGroup,
  FaArrowRight,
  FaBullseye,
  FaCogs,
} from "react-icons/fa";

// =========================
// Animation Variants
// =========================

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
      staggerChildren: 0.12,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// =========================
// Feature Data
// =========================

const features = [
  {
    title: "Project Planning",
    desc: "Define project scope, objectives, milestones, timelines and deliverables from one centralized workspace.",
    icon: <FaProjectDiagram />,
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    number: "01",
  },
  {
    title: "Task Allocation",
    desc: "Assign tasks to the right team members, define priorities and keep workloads balanced.",
    icon: <FaTasks />,
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85",
    number: "02",
  },
  {
    title: "Milestone Tracking",
    desc: "Monitor important milestones and instantly identify whether projects are on schedule.",
    icon: <FaBullseye />,
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
    number: "03",
  },
  {
    title: "Resource Management",
    desc: "Optimize people, budgets, time and other resources to improve project efficiency.",
    icon: <FaLayerGroup />,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85",
    number: "04",
  },
  {
    title: "Team Collaboration",
    desc: "Bring teams together with shared dashboards, task updates, documents and project communication.",
    icon: <FaUsers />,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",
    number: "05",
  },
  {
    title: "Reports & Analytics",
    desc: "Generate powerful project reports and use real-time analytics to make smarter decisions.",
    icon: <FaChartLine />,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    number: "06",
  },
];

// =========================
// Workflow
// =========================

const workflow = [
  {
    title: "Plan",
    desc: "Define objectives, scope and project roadmap.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Assign",
    desc: "Allocate tasks, responsibilities and resources.",
    icon: <FaUsers />,
  },
  {
    title: "Execute",
    desc: "Teams work together and complete assigned tasks.",
    icon: <FaCogs />,
  },
  {
    title: "Monitor",
    desc: "Track milestones, deadlines and project progress.",
    icon: <FaClock />,
  },
  {
    title: "Deliver",
    desc: "Complete the project and measure final performance.",
    icon: <FaCheckCircle />,
  },
];

// =========================
// Stats
// =========================

const stats = [
  {
    value: "100%",
    label: "Project Visibility",
    icon: <FaChartLine />,
  },
  {
    value: "24/7",
    label: "Team Collaboration",
    icon: <FaUsers />,
  },
  {
    value: "Real-Time",
    label: "Progress Tracking",
    icon: <FaRocket />,
  },
];

// =========================
// Component
// =========================

const ProjectManageMent = () => {
  return (
    <main className="overflow-hidden bg-white text-gray-900">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative min-h-[720px] flex items-center overflow-hidden bg-slate-950">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504691342899-9dccd845c88e?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/85" />

        {/* Gradient Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-[130px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/30 blur-[130px]" />

        {/* Floating circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 right-[10%] w-20 h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
        />

        <motion.div
          animate={{
            y: [0, 25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-28 left-[8%] w-14 h-14 rounded-full border border-blue-400/20 bg-blue-500/10"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Hero Content */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="show"
              className="text-white"
            >

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-semibold mb-7"
              >
                <FaProjectDiagram />

                Smart ERP Project Management
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                Manage Projects.
                <br />

                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Deliver Better.
                </span>
              </h1>

              <p className="mt-7 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                Plan, execute, monitor and deliver projects with powerful
                ERP-powered project management tools designed for modern
                businesses and high-performing teams.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(37,99,235,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-xl transition-all"
                >
                  Explore Features

                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold hover:bg-white/10 transition"
                >
                  View Workflow
                </motion.button>

              </div>

              {/* Mini Stats */}

              <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl">

                {stats.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.15 }}
                    className="border-l border-white/10 pl-4"
                  >
                    <div className="text-blue-400 mb-2">
                      {item.icon}
                    </div>

                    <div className="text-xl font-extrabold">
                      {item.value}
                    </div>

                    <div className="text-xs text-gray-400 mt-1">
                      {item.label}
                    </div>
                  </motion.div>
                ))}

              </div>
            </motion.div>

            {/* Dashboard Mockup */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="show"
              className="relative hidden lg:block"
            >

              <motion.div
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

                {/* Main Dashboard */}

                <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-4 shadow-2xl">

                  <div className="rounded-2xl bg-white overflow-hidden shadow-xl">

                    {/* Dashboard Header */}

                    <div className="flex items-center justify-between px-6 py-4 border-b">

                      <div>
                        <p className="text-xs text-gray-400">
                          PROJECT DASHBOARD
                        </p>

                        <h3 className="font-bold text-gray-900">
                          ERP Implementation
                        </h3>
                      </div>

                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white"
                          />
                        ))}
                      </div>

                    </div>

                    {/* Progress */}

                    <div className="p-6">

                      <div className="flex justify-between mb-3">

                        <span className="text-sm font-semibold">
                          Project Progress
                        </span>

                        <span className="text-sm font-bold text-blue-600">
                          78%
                        </span>

                      </div>

                      <div className="h-3 rounded-full bg-gray-100 overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "78%" }}
                          transition={{
                            delay: 1,
                            duration: 1.5,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                        />

                      </div>

                      {/* Dashboard Cards */}

                      <div className="grid grid-cols-2 gap-4 mt-6">

                        <div className="p-4 rounded-xl bg-blue-50">
                          <FaTasks className="text-blue-600 mb-2" />
                          <p className="text-xs text-gray-500">
                            Tasks
                          </p>
                          <p className="text-2xl font-bold">
                            126
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-green-50">
                          <FaCheckCircle className="text-green-600 mb-2" />
                          <p className="text-xs text-gray-500">
                            Completed
                          </p>
                          <p className="text-2xl font-bold">
                            98
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-purple-50">
                          <FaUsers className="text-purple-600 mb-2" />
                          <p className="text-xs text-gray-500">
                            Team
                          </p>
                          <p className="text-2xl font-bold">
                            24
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-orange-50">
                          <FaClock className="text-orange-600 mb-2" />
                          <p className="text-xs text-gray-500">
                            Deadline
                          </p>
                          <p className="text-2xl font-bold">
                            12d
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Floating Card */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-5 w-52"
                >

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                      <FaCheckCircle />
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Completed
                      </p>

                      <p className="font-bold text-gray-900">
                        Milestone
                      </p>
                    </div>

                  </div>

                </motion.div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="relative py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >

            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
              Powerful Project Control
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
              Everything You Need to
              <span className="text-blue-600"> Manage Projects</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              From project planning and task allocation to resource management,
              collaboration and analytics, our ERP-powered project management
              system gives your organization complete visibility and control
              over every project.
            </p>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">

        {/* Decorative background */}

        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >

            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Core Features
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-black text-gray-900">
              Complete Project
              <span className="text-blue-600"> Management Suite</span>
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Powerful tools that help teams plan smarter, collaborate better
              and deliver projects successfully.
            </p>

          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {features.map((item, index) => (

              <motion.article
                key={index}
                variants={cardAnimation}
                whileHover={{
                  y: -12,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >

                {/* Image */}

                <div className="relative h-56 overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Number */}

                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div className="absolute bottom-5 left-5 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl shadow-xl">
                    {item.icon}
                  </div>

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    Learn More
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </div>

                </div>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          WORKFLOW
      ====================================================== */}

      <section className="relative py-24 bg-slate-950 text-white overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >

            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
              Simple Workflow
            </span>

            <h2 className="mt-3 text-4xl md:text-5xl font-black">
              From Planning to
              <span className="text-blue-400"> Delivery</span>
            </h2>

            <p className="mt-5 text-gray-400 text-lg">
              A streamlined project workflow that keeps your teams aligned
              at every stage.
            </p>

          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16"
          >

            {/* Connecting line */}

            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-600/20 via-blue-500 to-blue-600/20" />

            {workflow.map((item, index) => (

              <motion.div
                key={index}
                variants={cardAnimation}
                whileHover={{
                  y: -10,
                }}
                className="relative z-10 text-center"
              >

                <div className="mx-auto w-24 h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-3xl text-blue-400 shadow-2xl">
                  {item.icon}
                </div>

                <div className="mt-5">

                  <span className="text-xs font-bold text-blue-400">
                    STEP {index + 1}
                  </span>

                  <h3 className="text-xl font-bold mt-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >

              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Why Project Management Matters
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Turn Complex Projects Into
                <span className="text-blue-600">
                  {" "}Clear, Measurable Results
                </span>
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                A centralized project management system eliminates scattered
                information and gives management complete visibility into
                project performance.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Centralized project information",
                  "Better team productivity",
                  "Real-time project visibility",
                  "Improved resource utilization",
                  "Faster decision making",
                  "Better deadline management",
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >

                    <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <FaCheckCircle />
                    </div>

                    <span className="font-semibold text-gray-700">
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

            {/* Visual */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >

              <div className="absolute -inset-5 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-[3rem] blur-2xl opacity-40" />

              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Project Management Team"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                <div className="absolute bottom-7 left-7 right-7 text-white">

                  <p className="text-blue-300 text-sm font-bold uppercase tracking-widest">
                    Smart Collaboration
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    One Platform. One Team. One Goal.
                  </h3>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >

            {[
              {
                number: "360°",
                title: "Project Visibility",
                desc: "Monitor every stage of your project.",
              },
              {
                number: "24/7",
                title: "Team Access",
                desc: "Keep teams connected from anywhere.",
              },
              {
                number: "100%",
                title: "Centralized Data",
                desc: "Everything available in one place.",
              },
            ].map((item, index) => (

              <motion.div
                key={index}
                variants={cardAnimation}
                className="text-center p-8 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl"
              >

                <div className="text-5xl font-black">
                  {item.number}
                </div>

                <h3 className="text-xl font-bold mt-3">
                  {item.title}
                </h3>

                <p className="text-blue-100 mt-2">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative py-28 bg-slate-950 overflow-hidden">

        <div className="absolute inset-0">

          <div className="absolute top-10 left-[20%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />

          <div className="absolute bottom-0 right-[15%] w-72 h-72 bg-indigo-600/20 rounded-full blur-[100px]" />

        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
        >

          <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl shadow-xl mb-7">
            <FaRocket />
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to Manage Your
            <span className="text-blue-400">
              {" "}Projects Smarter?
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Bring planning, tasks, resources, collaboration and analytics
            together with a modern ERP-powered project management solution.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 20px 50px rgba(37,99,235,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-lg flex items-center gap-3"
            >
              Get Started
              <FaArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 font-bold text-lg"
            >
              Contact Us
            </motion.button>

          </div>

        </motion.div>

      </section>

    </main>
  );
};

export default ProjectManageMent;

