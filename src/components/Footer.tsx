export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black/40 backdrop-blur-xl border-t border-white/10 text-center py-4 text-gray-400 text-xs md:text-sm z-[999]">
      © {new Date().getFullYear()} 
      <span className="text-purple-400 font-medium"> Kapil Yadav </span>
      — Portfolio
    </footer>
  );
}
