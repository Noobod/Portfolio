"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Modal({ open, onClose, title, children }: any) {
  
  // Close modal on ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-[1000]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Click outside
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#111] border border-white/10 rounded-xl p-6 md:p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto text-white relative"
            onClick={(e) => e.stopPropagation()} // prevent close from content clicks
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-5 text-gray-400 hover:text-white text-xl cursor-pointer transition"
              onClick={onClose}
            >
              ✖
            </button>

            {/* Title */}
            <h2 className="text-lg md:text-2xl font-semibold mb-4">
              {title}
            </h2>

            {/* Content */}
            <div className="text-gray-300 text-sm md:text-base leading-relaxed">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
