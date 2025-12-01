"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    "Frontend": ["React", "Next.js", "Redux", "TypeScript", "JavaScript", "TailwindCSS", "Material-UI"],
    "Backend": ["Node.js", "Express", "REST APIs", "JWT Auth", "PHP (Plugins)", "WordPress Custom Plugins"],
    "Databases": ["MongoDB", "Mongoose", "SQL"],
    "DevOps & Cloud": ["Docker", "GitHub Actions", "CI/CD", "AWS (Basic)", "Vercel", "Render"],
    "Architecture & Patterns": ["MVC", "Modular Design", "Reusable Components", "SaaS Patterns"],
    "Tools": ["Jest", "Postman", "Agile / Scrum", "Git", "VS Code"]
  };

  return (
    <section id="skills" className="px-6 md:px-10 py-16 text-white text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Skills
      </motion.h2>

      {/* Skill groups */}
      <div className="space-y-10 max-w-3xl mx-auto">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-purple-300">
              {category}
            </h3>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm bg-white/5 border border-purple-500/20 rounded-lg text-gray-300 hover:bg-purple-600/30 hover:border-purple-500/40 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
