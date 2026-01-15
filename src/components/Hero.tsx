"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadToast = () => toast.success("Download started...");

  return (
    <div
      id="top"
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6"
    >
      <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] bg-purple-600/30 blur-[150px] rounded-full animate-pulse pointer-events-none" />

      <h1
        className="
          mt-4 text-4xl md:text-6xl font-bold tracking-tight
          cursor-default
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:text-purple-400
          opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]
        "
        style={{ animationDelay: "0.3s" }}
      >
        Kapil Yadav
      </h1>

      <p className="mt-2 text-base md:text-lg text-gray-400 max-w-md">
        Full-Stack Developer • MERN • TypeScript • Next.js • WordPress Plugins
      </p>

      <p className="mt-2 text-sm md:text-base text-gray-500 italic">
        Based in Sydney • Open to Full-Time
      </p>

      <div className="mt-7 flex gap-4 justify-center">
        <button
          onClick={() => scrollTo("#projects")}
          className="order-1 cursor-pointer px-5 py-2 md:px-6 md:py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-sm md:text-base"
        >
          View Projects
        </button>

        <a
          href="/projects/Kapil_Yadav_Junior_FullStack_Developer.pdf"
          download="Kapil_Yadav_Resume.pdf"
          onClick={downloadToast}
          className="order-2 cursor-pointer px-5 py-2 md:px-6 md:py-3 border border-gray-600 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-600/10 transition rounded-lg text-sm md:text-base inline-block"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
