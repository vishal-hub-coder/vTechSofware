import React, { useEffect, useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const API_BASE = "https://api.metasolution.in/api/News";

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loader
  const [saving, setSaving] = useState(false); // Submit loader
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    Id: "",
    Title: "",
    Content: "",
    CategoryId: "1",
    Date: new Date().toISOString().split("T")[0],
    Image1: "",
  });

  // Fetch Blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/getAll`);
      setBlogs(res.data || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await axios.post(`${API_BASE}/save`, formData);
      setIsModalOpen(false);
      fetchBlogs(); // refresh
    } catch (err) {
      console.error(err);
    }

    setSaving(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Add Blog Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-green-500 transition"
        >
          Add Blog
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="border-4 border-gray-300 border-t-blue-500 w-10 h-10 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Blogs List */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((item) => (
            <div
              key={item.Id || item.id}
              className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition"
            >
              {item.Image1 && (
                <img
                  src={item.Image1}
                  alt={item.Title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{item.Title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {item.Content?.slice(0, 150)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-md relative shadow-lg">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-4">Add Blog</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">Title</label>
                <input
                  type="text"
                  name="Title"
                  value={formData.Title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Content</label>
                <textarea
                  name="Content"
                  value={formData.Content}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Image URL</label>
                <input
                  type="text"
                  name="Image1"
                  value={formData.Image1}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-green-500 transition flex items-center justify-center"
              >
                {saving ? (
                  <div className="border-2 border-white border-t-transparent w-5 h-5 rounded-full animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBlog;
