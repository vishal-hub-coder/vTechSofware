import React from "react";
import BlogDetail from "./BlogDetail";

const BlogDetailStandalone = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      <header className="bg-white shadow p-4 text-center text-2xl font-bold">
        📰 My Blog
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto p-6">
        <BlogDetail />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 My Blog. All Rights Reserved.
      </footer>
    </div>
  );
};

export default BlogDetailStandalone;
