import React from "react";
import { motion } from "framer-motion";

// Feature data with images (replace these URLs with real project-related images)
const features = [
  {
    title: "Project Planning",
    desc: "Define scope, set objectives, and create project roadmaps with clear milestones and deadlines.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Task Allocation",
    desc: "Assign tasks to team members, set priorities, and ensure workload is evenly distributed.",
    img: "https://images.unsplash.com/photo-1581091870627-3b5de7b9a2e5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Milestone Tracking",
    desc: "Track key milestones and monitor project progress to stay aligned with goals and deadlines.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Resource Management",
    desc: "Manage budgets, time, and resources effectively to maximize project efficiency and ROI.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Collaboration Tools",
    desc: "Enable team collaboration with shared dashboards, document management, and communication tools.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Reports & Analytics",
    desc: "Generate real-time reports, analyze performance, and make data-driven decisions with ease.",
    img: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b4?auto=format&fit=crop&w=800&q=80",
  },
];

const ProjectManageMent = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504691342899-9dccd845c88e?auto=format&fit=crop&w=1600&q=80')", // Website projects background
      }}
    >


        
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 p-8 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-white mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Project Management
        </motion.h1>

        <motion.p
          className="text-gray-200 text-lg mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Plan, execute, and monitor projects with ERP-powered project
          management tools. Ensure tasks are delivered on time, resources are
          optimized, and progress is transparent across teams.
        </motion.p>









        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManageMent;
