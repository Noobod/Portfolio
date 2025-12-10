"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 md:px-10 py-4 flex justify-between items-center z-50 transition-all duration-300 backdrop-blur-xl 
      ${
        scrolled
          ? "dark:bg-white/10 dark:border-white/20 bg-black/5 border-black/10"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <button
        onClick={scrollToTop}
        className="text-lg font-semibold cursor-pointer hover:text-purple-400 transition"
      >
        Kapil Yadav
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-sm text-gray-300 items-center">
        <a href="#top" className="hover:text-purple-400 transition">Home</a>
        <a href="#about" className="hover:text-purple-400 transition">About Me</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        {/* <a href="#skills" className="hover:text-purple-400 transition">Skills</a> */}
        <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
        {/* <a href="/education" className="hover:text-purple-400 transition">Education</a> */}
        <a href="/blog" className="hover:text-purple-400 transition">Blog</a>

        <a
          href="#contact"
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition"
        >
          Contact
        </a>

        {/* Social Icons */}
        <div className="flex gap-4 ml-4">
          <a href="https://github.com/Noobod" target="_blank">
            <svg className="w-6 h-6 fill-gray-400 hover:fill-white transition" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2.06c-3.2.7-3.87-1.4-3.87-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17A10.7 10.7 0 0 1 12 6.8c.97.01 1.94.13 2.85.38 2.2-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.16 1.82 1.16 3.07 0 4.41-2.7 5.36-5.27 5.65.43.37.81 1.1.81 2.23v3.31c0 .32.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a href="https://linkedin.com/in/yadav-kapil" target="_blank">
            <svg className="w-6 h-6 fill-gray-400 hover:fill-white transition" viewBox="0 0 24 24">
              <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5zM3 9.75h4v11H3v-11zm7 0h3.6v1.7h.05c.5-.9 1.7-1.85 3.5-1.85 3.7 0 4.4 2.45 4.4 5.65v5.5h-4V15c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1v5.9h-4v-11z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-xl text-gray-300 hover:text-white transition"
      >
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-0 right-0 w-64 h-screen bg-black/90 backdrop-blur-xl px-8 py-10 flex flex-col gap-6 text-lg md:hidden">
          <button className="self-end text-2xl" onClick={() => setOpen(false)}>✖</button>

          <a href="#top" onClick={() => setOpen(false)} className="hover:text-purple-400">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-purple-400">About Me</a>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-purple-400">Projects</a>
          {/* <a href="#skills" onClick={() => setOpen(false)} className="hover:text-purple-400">Skills</a> */}
          <a href="#experience" onClick={() => setOpen(false)} className="hover:text-purple-400">Experience</a>
          {/* <a href="#education" onClick={() => setOpen(false)} className="hover:text-purple-400">Education</a> */}
          <a href="/blog" onClick={() => setOpen(false)} className="hover:text-purple-400">Blog</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-purple-400">Contact</a>
        </div>
      )}
    </header>
  );
}
