import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_BASE = "https://api.metasolution.in/api/News";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/getAll`);
      const allBlogs = res.data.data || [];
      const selectedBlog = allBlogs.find((b) => b.id === parseInt(id));
      setBlog(selectedBlog || null);
    } catch (err) {
      console.error(err);
      setBlog(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!blog)
    return (
      <div className="text-center mt-10">
        <h6 className="text-3xl font-bold mb-4">Blog not found!</h6>
        {/* <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Blogs
        </Link> */}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <Link
        to="/"
        className="mb-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        ← Back
      </Link>
      {blog.image1 && (
        <img
          src={blog.image1}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-md mb-6"
        />
      )}
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      {blog.descr && <p className="text-gray-600 mb-4">{blog.descr}</p>}
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <p className="text-xs text-gray-500 mt-4">
        📅 {blog.date ? blog.date.split("T")[0] : "N/A"} | Category:{" "}
        {blog.categoryId || "N/A"}
      </p>
      {blog.keywords && (
        <p className="text-xs text-gray-500 mt-1">🔖 Keywords: {blog.keywords}</p>
      )}
    </div>
  );
};

export default BlogDetail;
