"use client";
import toast from "react-hot-toast";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openCV = () => {
    window.open("/Kapil_Yadav_Resume.pdf", "_blank");
    toast.success("Opening resume...");
  };

  return (
    <div
      id="top"
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6"
    >
      <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] bg-purple-600/30 blur-[150px] rounded-full animate-pulse pointer-events-none" />

      <h1
        className="mt-4 text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] transition-all duration-500 hover:text-purple-400 hover:tracking-wider cursor-default"
        style={{ animationDelay: "0.3s" }}
      >
        Kapil Yadav
      </h1>

      <p className="mt-2 text-base md:text-lg text-gray-400 max-w-md relative group">
        Full-Stack Developer • MERN • TypeScript • Next.js • WordPress Plugins
        <span className="block h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full mx-auto mt-1"></span>
      </p>

      <p className="mt-2 text-sm md:text-base text-gray-500 italic">
        Based in Sydney • Open to Full-Time
      </p>

      <div className="mt-7 flex flex-wrap gap-4 justify-center">
        
        {/* View Projects */}
        <button
          onClick={() => scrollTo("#projects")}
          className="px-5 py-2 md:px-6 md:py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg cursor-pointer text-sm md:text-base"
        >
          View Projects
        </button>

        {/* Download CV */}
        <button
          onClick={openCV}
          className="px-5 py-2 md:px-6 md:py-3 border border-gray-600 hover:border-purple-500 hover:text-purple-300 hover:bg-white/5 transition rounded-lg cursor-pointer text-sm md:text-base"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
