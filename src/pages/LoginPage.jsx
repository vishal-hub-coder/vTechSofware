import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const LoginPage = () => {
  const [code, setCode] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!code || !userId || !password) {
      toast.error("Please fill all fields!", { transition: Bounce });
      return;
    }

    toast.success("✅ Login Successful!", { transition: Bounce });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 overflow-hidden">
     
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-tr from-blue-300 to-blue-600 rounded-full blur-3xl opacity-30 top-10 left-10"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-bl from-indigo-300 to-purple-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

     
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9, rotateY: 15 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
        whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="relative bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-12 w-full max-w-lg border border-blue-200 backdrop-blur-sm"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        
        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-blue-400 opacity-30 pointer-events-none shadow-[0_0_40px_rgba(59,130,246,0.4)]"></div>

        
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.6 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-10 -left-10"
        >
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-400 to-blue-700 rounded-full shadow-[0_15px_30px_rgba(59,130,246,0.5)] blur-[1px]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.6 }}
          animate={{ opacity: 0.8, x: 0, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute -bottom-12 -right-12"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-300 to-blue-500 rounded-3xl shadow-[0_15px_40px_rgba(59,130,246,0.45)] blur-[2px]"></div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-gradient-to-tr from-blue-400 to-blue-700 rounded-full p-4 shadow-[0_10px_30px_rgba(59,130,246,0.6)] border-4 border-white">
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#fff" />
              <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" fill="#3B82F6" />
              <path d="M2 20c0-3.866 4.03-7 9-7s9 3.134 9 7" fill="#3B82F6" />
            </svg>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="text-3xl font-extrabold text-blue-700 mb-6 text-center drop-shadow-lg"
        >
          Hello Welcome
        </motion.h2>

        
        <form onSubmit={handleLogin} className="space-y-6">
          <motion.input
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            type="number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Code"
            className="w-full px-4 py-3 border rounded-xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
          />

          <motion.input
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User ID"
            className="w-full px-4 py-3 border rounded-xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-4 py-3 border rounded-xl bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-3 text-gray-500 hover:text-blue-600 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </motion.div>

                 <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
                className="mr-2 accent-blue-600"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>

          </div>

          
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 30px rgba(59,130,246,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 rounded-xl shadow-[0_6px_18px_rgba(59,130,246,0.3)] transition"
          >
            Login
          </motion.button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/register-page"
            className="text-blue-600 hover:underline font-semibold"
          >
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
