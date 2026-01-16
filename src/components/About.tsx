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
          I’m a developer who enjoys turning messy, manual workflows into clean
          systems that save time. I like building practical software that helps
          people work faster and with fewer mistakes.
        </p>

        <p>
          Most of my work has been with{" "}
          <span className="text-purple-400 font-semibold">
            React, Node.js, TypeScript, Next.js, and MongoDB
          </span>
          . Recently, during my internship, I’ve been building{" "}
          <span className="text-purple-400 font-semibold">
            WordPress custom plugins and backend automation
          </span>{" "}
          for real production requirements.
        </p>

        <p>
          One of my favourite projects is{" "}
          <span className="text-purple-400 font-semibold">
            XFlyve (logistics automation)
          </span>
          , which replaced spreadsheet-heavy coordination and reduced daily
          admin effort by{" "}
          <span className="text-purple-400 font-semibold">~70%</span>. I’ve also
          built{" "}
          <span className="text-purple-400 font-semibold">Wanderlust</span> (a
          full-stack accommodation booking platform),{" "}
          <span className="text-purple-400 font-semibold">TradeTrack</span> (a
          trading dashboard simulation), and{" "}
          <span className="text-purple-400 font-semibold">Meetify</span> (a
          real-time WebRTC meeting app).{" "}
          <span className="text-purple-400 font-semibold">JobPilot</span> is a
          planned project I’m designing to automate parts of the job search
          process.
        </p>

        <p>
          I focus on clean architecture, reusable components, and writing code
          that’s easy to maintain. I’m comfortable working in Agile teams and
          turning requirements into reliable features.
        </p>

        <p>
          I'm based in Sydney with full Australian work rights and currently seeking a{" "}
          <span className="text-purple-400 font-semibold">
            full-time developer role
          </span> starting February 2026
          . I’m looking for a team where I can learn from strong engineers,
          contribute to real projects, and keep growing as a full-stack
          developer.
        </p>
      </motion.div>
    </section>
  );
}
