"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 text-center py-5 text-gray-400 text-xs md:text-sm mt-12">
      © {new Date().getFullYear()}
      <span className="text-purple-400 font-medium"> Kapil Yadav </span>
      — Portfolio
    </footer>
  );
}
