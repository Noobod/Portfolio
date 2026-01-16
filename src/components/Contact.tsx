"use client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("ykapil086@gmail.com");
    toast.success("Email copied!");
    setTimeout(() => {
      window.location.href = "mailto:ykapil086@gmail.com";
    }, 400);
  };
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-16 pb-32 text-white text-center max-w-3xl mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Contact
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-gray-400 text-sm md:text-base leading-relaxed mb-10"
      >
        I'm open to full-time & part-time developer roles, freelance work or
        any collaboration that brings ideas to life.
      </motion.p>

      {/* Email Button */}
      <motion.a
        href="mailto:ykapil086@gmail.com"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="inline-block px-7 md:px-10 py-3 md:py-4 bg-purple-600 hover:bg-purple-700 transition rounded-xl text-base md:text-lg shadow-lg hover:shadow-purple-500/30"
      >
        📩 Email Me
      </motion.a>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center gap-6"
      >
        <a
          href="https://github.com/Noobod"
          target="_blank"
          className="hover:text-purple-400 transition text-xl"
        >
          🧠 GitHub
        </a>

        <a
          href="https://linkedin.com/in/yadav-kapil"
          target="_blank"
          className="hover:text-purple-400 transition text-xl"
        >
          🔗 LinkedIn
        </a>
      </motion.div>

      {/* Small mini caption */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className="mt-6 text-gray-500 text-xs"
      >
        Response time: usually within 24 hours ⏳
      </motion.p>
    </section>
  );
}
