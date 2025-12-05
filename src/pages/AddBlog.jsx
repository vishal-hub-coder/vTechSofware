import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://api.metasolution.in/api/News";
const newPath = "http://erp.metasolution.in/Uploads/";

// Function to create URL-friendly slugs
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
    if (searchTerm.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter(
        (blog) =>
          blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.keywords?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, blogs]);

  return (
    <div className="w-full bg-gray-100 min-h-screen pb-10">

      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 shadow-sm">
        <h6 className="text-center text-4xl font-extrabold text-gray-800 tracking-wide">
          📰 Latest News & Updates
        </h6>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">

        {/* Search Box */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search for news, blogs, topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-2/3 lg:w-1/2 px-5 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
          />
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center h-32">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Blog Cards */}
        {!loading && filteredBlogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <a
                key={blog.id}
                href={`/blog/${blog.id}/${slugify(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all"
              >
                {blog.image1 && (
                  <img
                    src={`${newPath}${blog.image1}`}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
                    {blog.title}
                  </h3>

                  <div
                    className="text-sm text-gray-600 mt-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.content?.slice(0, 150) + "...",
                    }}
                  />

                  {/* <div className="mt-5 text-xs text-gray-500 space-y-1">
                    <p>📅 {blog.date ? blog.date.split("T")[0] : "N/A"}</p>
                    <p>📂 Category: {blog.categoryId || "N/A"}</p>
                    {blog.keywords && <p>🔖 {blog.keywords}</p>}
                  </div> */}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* No Blogs Found */}
        {!loading && filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 mt-20 text-lg">
            No blogs match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default AddBlog;
