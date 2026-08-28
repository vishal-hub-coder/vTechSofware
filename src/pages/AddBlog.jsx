
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaCalendarAlt,
  FaArrowRight,
  FaNewspaper,
  FaClock,
  FaUser,
  FaTag,
  FaFire,
  FaChevronRight,
  FaRegNewspaper,
  FaTimes,
} from "react-icons/fa";
import SEO from "../layout/SEO";

const API_BASE = "https://vtechsoftwareerp/api/News";
const newPath = "www.vtechsoftware/imgs";

const slugify = (text = "") =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-");

const stripHtml = (html = "") =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (text = "", length = 150) =>
  text.length > length ? `${text.slice(0, length)}...` : text;

const getImageUrl = (image) => {
  if (!image) return null;

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${newPath}${image}`;
};

const formatDate = (date) => {
  if (!date) return "Recent";

  try {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchBlogs = async () => {
    setLoading(true);

    try {
      const res = await axios.get(`${API_BASE}/getAll`);

      const allBlogs = Array.isArray(res.data) ? res.data : [];

      const employeeBlogs = allBlogs.filter(
        (blog) => Number(blog.empId) === 171
      );

      setBlogs(employeeBlogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        blogs
          .map((blog) => blog.categoryId)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return blogs.filter((blog) => {
      const matchesSearch =
        !search ||
        blog.title?.toLowerCase().includes(search) ||
        blog.keywords?.toLowerCase().includes(search) ||
        stripHtml(blog.content || "")
          .toLowerCase()
          .includes(search);

      const matchesCategory =
        selectedCategory === "All" ||
        blog.categoryId === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchTerm, selectedCategory]);

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <SEO
        title="News & Insights - vTech Software Solutions"
        description="Explore the latest ERP insights, technology trends, business updates, and software solutions from vTech Software."
      />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-[620px] flex items-center overflow-hidden bg-slate-950">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-blue-600/20 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -70, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[130px]"
          />

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-28 right-[12%] hidden lg:flex w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 items-center justify-center text-blue-300"
        >
          <FaNewspaper />
        </motion.div>

        <motion.div
          animate={{ y: [0, 18, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-[10%] hidden lg:flex w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 items-center justify-center text-purple-300"
        >
          <FaTag />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
          <div className="max-w-4xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-cyan-300 text-sm font-semibold shadow-xl">
                <FaFire className="text-orange-400" />
                Latest News & Technology Insights
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.75 }}
              className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]"
            >
              Insights That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                Move Business Forward
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-7 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Discover practical insights, ERP innovations, business
              strategies, technology trends, and the latest updates from
              vTech Software Solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-3"
            >
              <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white">
                <span className="font-bold">{blogs.length}+</span>
                <span className="ml-2 text-slate-400">Articles</span>
              </div>

              <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white">
                <span className="font-bold">{categories.length - 1}+</span>
                <span className="ml-2 text-slate-400">Categories</span>
              </div>

              <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white">
                <span className="font-bold">ERP</span>
                <span className="ml-2 text-slate-400">Focused</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SEARCH / FILTER PANEL
      ========================================================= */}
      <section className="relative z-20 -mt-14 px-5">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="relative bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-[0_25px_70px_rgba(15,23,42,0.15)] p-5 md:p-7"
          >
            <div className="flex flex-col lg:flex-row gap-5">

              {/* Search */}
              <div className="relative flex-1">
                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles, topics, ERP insights..."
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />

                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-500 transition"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                )}
              </div>

              {/* Result count */}
              <div className="hidden md:flex items-center px-5 rounded-2xl bg-slate-50 border border-slate-200">
                <FaRegNewspaper className="text-blue-500 mr-3" />
                <div>
                  <p className="text-xs text-slate-400">Showing</p>
                  <p className="font-bold text-slate-800">
                    {filteredBlogs.length} Articles
                  </p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <FaTag className="text-blue-500 text-sm" />
                <span className="text-sm font-bold text-slate-700">
                  Explore Categories
                </span>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => {
                  const active = selectedCategory === category;

                  return (
                    <motion.button
                      key={category}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        active
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {category === "All" ? "All Articles" : category}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="max-w-7xl mx-auto px-5 py-20">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"
        >
          <div>
            <span className="text-blue-600 text-sm font-bold uppercase tracking-[0.2em]">
              Our Latest
            </span>

            <h2 className="mt-2 text-4xl md:text-5xl font-black text-slate-900">
              News & Insights
            </h2>

            <div className="mt-4 w-20 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          </div>

          {(searchTerm || selectedCategory !== "All") && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={clearFilters}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              Clear Filters
              <FaTimes />
            </motion.button>
          )}
        </motion.div>

        {/* =====================================================
            LOADING SKELETON
        ===================================================== */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <div className="h-60 bg-slate-200 animate-pulse" />

                <div className="p-6 space-y-4">
                  <div className="w-24 h-6 bg-slate-200 rounded-full animate-pulse" />
                  <div className="h-7 bg-slate-200 rounded animate-pulse" />
                  <div className="h-4 bg-slate-200 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-slate-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =====================================================
            FEATURED ARTICLE
        ===================================================== */}
        {!loading && featuredBlog && (
          <motion.a
            href={`/blog/${featuredBlog.id}/${slugify(featuredBlog.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block mb-14"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">

              <div className="grid lg:grid-cols-2">

                {/* Image */}
                <div className="relative min-h-[350px] lg:min-h-[470px] overflow-hidden">
                  {getImageUrl(featuredBlog.image1) ? (
                    <img
                      src={getImageUrl(featuredBlog.image1)}
                      alt={featuredBlog.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-800 flex items-center justify-center">
                      <FaNewspaper className="text-white/30 text-8xl" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/70" />

                  <div className="absolute top-6 left-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-blue-700 text-xs font-bold">
                      <FaFire className="text-orange-500" />
                      Featured Article
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">

                  {featuredBlog.categoryId && (
                    <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">
                      {featuredBlog.categoryId}
                    </span>
                  )}

                  <h3 className="mt-4 text-3xl md:text-4xl font-black text-white leading-tight group-hover:text-cyan-300 transition-colors">
                    {featuredBlog.title}
                  </h3>

                  <p className="mt-5 text-slate-300 leading-relaxed text-base md:text-lg">
                    {truncate(
                      stripHtml(featuredBlog.content || ""),
                      220
                    )}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-400" />
                      {formatDate(featuredBlog.date)}
                    </span>

                    <span className="flex items-center gap-2">
                      <FaUser className="text-cyan-400" />
                      vTech Team
                    </span>
                  </div>

                  <div className="mt-9 inline-flex items-center gap-3 text-white font-bold">
                    Read Featured Article
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* =====================================================
            BLOG GRID
        ===================================================== */}
        {!loading && remainingBlogs.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {remainingBlogs.map((blog) => (
              <motion.a
                key={blog.id}
                variants={cardVariants}
                href={`/blog/${blog.id}/${slugify(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-[0_25px_60px_rgba(15,23,42,0.14)] transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-slate-100">

                  {getImageUrl(blog.image1) ? (
                    <img
                      src={getImageUrl(blog.image1)}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
                      <FaNewspaper className="text-6xl text-white/30" />
                    </div>
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

                  {blog.categoryId && (
                    <span className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur text-blue-700 text-xs font-bold shadow-lg">
                      {blog.categoryId}
                    </span>
                  )}

                  <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white text-xs font-medium">
                    <FaClock />
                    {formatDate(blog.date)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {truncate(
                      stripHtml(blog.content || ""),
                      155
                    )}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <FaUser />
                      vTech Team
                    </span>

                    <span className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:gap-3 transition-all">
                      Read More
                      <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>

                {/* Bottom hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}
        {!loading && filteredBlogs.length === 0 && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-24 text-center"
            >
              <div className="relative w-28 h-28 mx-auto mb-7">
                <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse" />
                <div className="relative w-full h-full rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center">
                  <FaNewspaper className="text-4xl text-slate-300" />
                </div>
              </div>

              <h3 className="text-3xl font-black text-slate-800">
                No Articles Found
              </h3>

              <p className="mt-3 text-slate-500 max-w-md mx-auto">
                We couldn't find any article matching your search or selected
                category. Try another keyword.
              </p>

              <button
                onClick={clearFilters}
                className="mt-7 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
              >
                View All Articles
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* =========================================================
          INSIGHTS STRIP
      ========================================================= */}
      {!loading && blogs.length > 0 && (
        <section className="relative py-20 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-5">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-cyan-400 text-sm font-bold uppercase tracking-[0.2em]">
                Technology • Business • Innovation
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
                Stay Ahead of the Curve
              </h2>

              <p className="mt-5 text-slate-400 text-lg leading-relaxed">
                Technology is changing fast. Keep your business informed with
                useful ideas, practical strategies and the latest ERP
                developments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

              {[
                {
                  number: blogs.length,
                  label: "Published Articles",
                  icon: <FaNewspaper />,
                },
                {
                  number: Math.max(categories.length - 1, 0),
                  label: "Topics Covered",
                  icon: <FaTag />,
                },
                {
                  number: "24/7",
                  label: "Business Insights",
                  icon: <FaClock />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 mb-4">
                    {stat.icon}
                  </div>

                  <div className="text-3xl font-black text-white">
                    {stat.number}
                  </div>

                  <p className="mt-1 text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          NEWSLETTER
      ========================================================= */}
      <section className="relative py-24 px-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 overflow-hidden">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-20 w-[450px] h-[450px] rounded-full bg-purple-300/20 blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold">
              <FaRegNewspaper />
              vTech Newsletter
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-black text-white">
              Get the Latest Insights
              <span className="block text-blue-200">
                Straight to Your Inbox
              </span>
            </h2>

            <p className="mt-5 text-blue-100 text-lg max-w-2xl mx-auto">
              Stay updated with ERP trends, business technology, product
              updates, and useful insights from our team.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl bg-white text-slate-800 placeholder:text-slate-400 outline-none focus:ring-4 focus:ring-white/20 shadow-xl"
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-4 rounded-2xl bg-slate-950 text-white font-bold shadow-xl hover:bg-slate-900 transition"
              >
                Subscribe
              </motion.button>
            </div>

            <p className="mt-4 text-xs text-blue-200/70">
              No spam. Only useful technology and business updates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BACK TO TOP
      ========================================================= */}
      <motion.button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-slate-900 text-white shadow-2xl flex items-center justify-center hover:bg-blue-600 transition-colors"
        aria-label="Back to top"
      >
        <FaChevronRight className="-rotate-90" />
      </motion.button>
    </div>
  );
};

export default AddBlog;

