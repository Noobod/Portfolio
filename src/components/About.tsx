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
          I'm a developer who enjoys building things that make everyday work
          easier. I’ve always loved taking messy, manual processes and turning
          them into clean, automated systems that actually save time.
        </p>

        <p>
          Most of my work has been with the
          <span className="text-purple-400 font-semibold"> MERN stack, TypeScript, Next.js, and MongoDB
          </span>
          , and I’ve recently been doing a lot with <span className="text-purple-400 font-semibold"> WordPress custom plugins and backend automation
          </span> during my internship.
        </p>

        <p>
          One of my favourite projects is a
          <span className="text-purple-400 font-semibold"> logistics automation platform (XFlyve)
          </span> that replaced spreadsheets, manual updates, and phone calls — reducing
          admin effort by
          <span className="text-purple-400 font-semibold"> 70%</span>. I also
          built <span className="text-purple-400 font-semibold">Meetify</span>{" "}
          (a real-time WebRTC meeting app),
          <span className="text-purple-400 font-semibold">TradeTrack</span> (a
          trading dashboard clone), and a{" "}
          <span className="text-purple-400 font-semibold">
            job aggregation engine (JobPilot)
          </span>{" "}
          I'm still working on.
        </p>

        <p>
          I care a lot about clean architecture, reusable components, and
          writing code that other developers can understand easily. I enjoy
          solving real business problems and turning requirements into reliable
          features.
        </p>

        <p>
          I’m currently in Sydney and open to a
          <span className="text-purple-400 font-semibold"> full-time developer role
          </span>
          . I want to be part of a team where I can learn from experienced
          engineers, contribute to meaningful projects, and keep improving as a
          full-stack developer.
        </p>
      </motion.div>
    </section>
  );
}
