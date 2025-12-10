"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "Master of Information Technology",
    school: "Australia (2025)",
    details: "Focus on software engineering, cloud, and full-stack development."
  },
  {
    title: "Bachelor of Computer Applications",
    school: "India (2019)",
    details: "Learned fundamentals in programming, DBMS, and software development."
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-10 py-16 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 text-left backdrop-blur-xl shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-purple-300">
              {edu.title}
            </h3>

            <p className="text-gray-400 mt-1">{edu.school}</p>
            <p className="text-gray-400 mt-3 leading-relaxed">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
