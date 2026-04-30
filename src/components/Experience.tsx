"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-16 text-white text-center max-w-3xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-12"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-purple-500/30 pl-6 space-y-14">
        
        {/* Softlabs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[12px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

          <h3 className="text-lg md:text-xl font-semibold">
            Softlabs — Software Developer Intern
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Nov 2025 — Jan 2026 • Sydney
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Built a production-grade WordPress plugin to streamline community request 
            management, replacing email-based workflows with structured submissions, 
            admin tracking, and file uploads. Implemented backend logic using PHP and 
            WordPress APIs, and integrated an AI chatbot to improve user interaction. 
            Worked in an Agile environment contributing to feature development and 
            iterative improvements.
          </p>
        </motion.div>

        {/* XFlyve */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[12px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

          <h3 className="text-lg md:text-xl font-semibold">
            XFlyve Logistics — Automation Developer
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Oct 2024 — Aug 2025 • Sydney
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Independently designed and built a full-stack logistics automation platform 
            using React, Node.js, and MongoDB to replace spreadsheet-based workflows. 
            Implemented job assignment, driver coordination, and proof-of-delivery uploads 
            with role-based access and JWT authentication. Structured backend using MVC 
            architecture and scalable REST APIs. Reduced manual operational workload by{" "}
            <span className="text-purple-400 font-semibold">~70%</span> and improved 
            process efficiency.
          </p>
        </motion.div>

        {/* A-Star Infotech */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[12px] top-1 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

          <h3 className="text-lg md:text-xl font-semibold">
            A-Star Infotech — Web Developer
          </h3>

          <p className="text-gray-400 text-xs md:text-sm mt-1">
            Mar 2022 — Apr 2023 • Jaipur, India
          </p>

          <p className="text-gray-300 text-sm md:text-base mt-2">
            Developed and maintained responsive client websites using HTML, CSS, 
            JavaScript, PHP, and MySQL. Built database-driven features, improved UI 
            responsiveness, fixed bugs, and optimized performance to deliver reliable 
            client-ready web solutions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}