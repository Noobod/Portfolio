"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";
import Modal from "./Modal";

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="projects" className="px-6 md:px-10 py-16 md:py-20 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-14">Projects</h2>

      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.02 }}
          onClick={() => setActive(project.id)}
          className="cursor-pointer group flex flex-col md:flex-row items-center gap-6 md:gap-8 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg max-w-4xl md:max-w-5xl mx-auto hover:border-purple-500/40 hover:shadow-[0_0_35px_-10px_rgba(168,85,247,0.6)] transition-all duration-300 mb-8 md:mb-10"
        >
          {/* Screenshot / Placeholder */}
          <div className="w-full md:w-1/2 h-40 md:h-60 rounded-xl overflow-hidden bg-gradient-to-br from-purple-700/20 to-black border border-white/10 flex items-center justify-center text-gray-500 text-xs md:text-sm">
            Screenshot Coming Soon
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 text-sm md:text-base">{project.description}</p>

            {/* Tech Pills */}
            <div className="flex flex-wrap gap-2 justify-center text-xs md:text-sm">
              {project.tech.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md bg-purple-600/20 border border-purple-600/30 text-purple-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      {projects.map(
        (project) =>
          active === project.id && (
            <Modal
              key={project.id}
              open={true}
              title={project.title}
              onClose={() => setActive(null)}
            >
              <p className="whitespace-pre-line text-sm md:text-base leading-relaxed">
                {project.details}
              </p>

              <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
                <a
                  href={project.live}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition text-center"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="px-5 py-2 border border-white/20 hover:border-white transition rounded-lg text-center"
                >
                  GitHub
                </a>
              </div>
            </Modal>
          )
      )}
    </section>
  );
}
