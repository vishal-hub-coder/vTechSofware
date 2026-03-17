import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaCalendarAlt, FaFolder, FaTag, FaArrowRight, FaNewspaper, FaClock, FaUser } from "react-icons/fa";
import SEO from "../layout/SEO";

const API_BASE = "https://api.metasolution.in/api/News";
const newPath = "http://erp.metasolution.in/Uploads/";

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-");

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/getAll`);
      const allBlogs = res.data || [];
      const empBlogs = allBlogs.filter((blog) => blog.empId === 171);
      setBlogs(empBlogs);
      setFilteredBlogs(empBlogs);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "" && selectedCategory === "All") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(
        (blog) =>
          (blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.keywords?.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedCategory === "All" || blog.categoryId === selectedCategory)
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, selectedCategory, blogs]);

  // Get unique categories
  const categories = ["All", ...new Set(blogs.map(blog => blog.categoryId).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <SEO
        title="News & Updates - vTech Software Solutions"
        description="Read the latest news, articles, and updates from vTech Software"
        canonical="https://sapeagleerp.com/blog"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-6 border border-white/20">
              📰 Latest News & Updates
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stay Informed with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              vTech News
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover the latest insights, trends, and updates from the world of ERP and business technology.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-10 px-6 -mt-10 relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6"
          >
            {/* Search Input */}
            <div className="relative mb-6">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search for news, articles, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category === "All" ? "All Posts" : category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full"
              />
            </div>
          )}

          {/* Blog Cards */}
          {!loading && filteredBlogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.a
                  key={blog.id}
                  href={`/blog/${blog.id}/${slugify(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group"
                >
                  {/* Image */}
                  {blog.image1 && (
                    <div className="relative overflow-hidden">
                      <img
                        src={`${newPath}${blog.image1}`}
                        alt={blog.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Category Badge */}
                    {blog.categoryId && (
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-3">
                        {blog.categoryId}
                      </span>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
                      {blog.title}
                    </h3>

                    {/* Content Preview */}
                    <div
                      className="text-gray-600 text-sm line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: blog.content?.slice(0, 120) + "...",
                      }}
                    />

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaClock className="text-xs" />
                        <span>{blog.date ? blog.date.split("T")[0] : "Recent"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-500 font-medium text-sm group-hover:translate-x-1 transition-transform">
                        Read More <FaArrowRight className="text-xs" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading && filteredBlogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaNewspaper className="text-4xl text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No Posts Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-blue-100 mb-8">Get the latest updates delivered directly to your inbox.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AddBlog;
