import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://api.metasolution.in/api/News";

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch blogs from API
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/getAll`);
      setBlogs(res.data || []);
      setFilteredBlogs(res.data || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs based on search term
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
    <div className="w-full bg-gray-50 min-h-screen pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-md">
        <h6 className="text-center text-4xl font-extrabold drop-shadow-lg">
          📰 Latest News & Updates
        </h6>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        {/* Search */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="border-4 border-gray-300 border-t-indigo-600 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        )}

        {/* Blog Grid */}
        {!loading && filteredBlogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <a
                key={blog.id}
                href={`/blog/${blog.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 cursor-pointer"
              >
                {blog.image1 && (
                  <img
                    src={blog.image1}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition">
                    {blog.title}
                  </h3>

                  {/* Short content */}
                  <div
                    className="text-sm text-gray-600 mt-3 max-h-24 overflow-hidden"
                    dangerouslySetInnerHTML={{
                      __html: blog.content?.slice(0, 150) + "...",
                    }}
                  />

                  <p className="text-xs text-gray-500 mt-4">
                    📅 {blog.date ? blog.date.split("T")[0] : "N/A"} | Category:{" "}
                    {blog.categoryId || "N/A"}
                  </p>
                  {blog.keywords && (
                    <p className="text-xs text-gray-500 mt-1">
                      🔖 Keywords: {blog.keywords}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* No Blogs */}
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
