"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const openCV = () => {
    window.open("/Kapil_Yadav_Resume.pdf", "_blank");
  };

  return (
    <div
      id="top"
      className="relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6"
    >
      {/* Background Glow */}
      <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] bg-purple-600/30 blur-[150px] rounded-full animate-pulse pointer-events-none" />

      {/* Profile Image */}
      <img
        src="/Linkedin.png"
        alt="Kapil Yadav"
        className="w-32 h-32 md:w-52 md:h-52 rounded-full border border-white/20 object-cover opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
        style={{ animationDelay: "0.1s" }}
      />

      {/* Name */}
      <h1
        className="mt-4 text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards] transition-all duration-500 hover:text-purple-400 cursor-default"
        style={{ animationDelay: "0.3s" }}
      >
        Kapil Yadav
      </h1>

      {/* Subtitle */}
      <p className="mt-2 text-base md:text-lg text-gray-400 max-w-md">
        Full-Stack Developer • TypeScript • AI • Next.js
      </p>

      {/* Buttons */}
      <div className="mt-7 flex flex-wrap gap-4 justify-center">
        <button
          className="px-5 py-2 md:px-6 md:py-3 bg-purple-600 hover:bg-purple-700 transition rounded-lg cursor-pointer text-sm md:text-base"
          onClick={() => scrollTo("#projects")}
        >
          View Projects
        </button>

        <button
          className="px-5 py-2 md:px-6 md:py-3 border border-gray-600 hover:border-white transition rounded-lg cursor-pointer text-sm md:text-base"
          onClick={() => scrollTo("#contact")}
        >
          Contact Me
        </button>

        <button
          className="px-5 py-2 md:px-6 md:py-3 border border-gray-600 hover:border-white transition rounded-lg cursor-pointer text-sm md:text-base"
          onClick={openCV}
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
