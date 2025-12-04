"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section 
      id="about" 
      className="px-6 md:px-10 py-16 text-white text-center max-w-3xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed"
      >
        <p>
          I'm a <span className="text-purple-400 font-semibold">Full-Stack Developer</span> experienced in building 
          <span className="text-purple-400 font-semibold"> SaaS platforms, automation workflows, </span> 
          and production-ready applications.
        </p>

        <p>
          I enjoy working with modern JavaScript ecosystems — especially 
          <span className="text-purple-400 font-semibold"> MERN, TypeScript, Next.js, MongoDB </span> 
          and AI-powered features.
        </p>

        <p>
          Recently, I built a <span className="text-purple-400 font-semibold">logistics automation system </span> 
          that reduced manual workload by <span className="font-semibold text-purple-400">70%</span>, 
          and I'm now developing a <span className="text-purple-400 font-semibold">custom WordPress automation plugin </span> 
           with workflows, dashboard UI, and custom DB models.
        </p>

        <p>
          My focus is <span className="text-purple-400 font-semibold">scalable architecture, clean code, and real-world problem solving.</span>  
        </p>

        <p>
          I'm now looking for a <span className="text-purple-400 font-semibold">full-time developer role </span> 
          where I can contribute to meaningful products, grow alongside a skilled engineering team, 
          and continue building high-impact solutions.
        </p>
      </motion.div>
    </section>
  );
}
