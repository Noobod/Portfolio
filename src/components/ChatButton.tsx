"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{ y: open ? 10 : 0 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-5 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center shadow-xl text-xl md:text-2xl cursor-pointer transition z-[999]"
      >
        💬
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="fixed bottom-24 right-4 md:right-6 w-72 md:w-80 h-80 md:h-96 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-4 flex flex-col text-white z-[9999]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-sm md:text-base">Ask About Me</p>
              <button
                className="text-gray-400 hover:text-white text-lg"
                onClick={() => setOpen(false)}
              >
                ✖
              </button>
            </div>

            {/* Suggestions */}
            <div className="flex-1 overflow-y-auto text-xs md:text-sm text-gray-300 p-2 rounded-lg border border-white/10 leading-relaxed">
              👋 Hi! Ask anything like:
              <br /><br />
              • What skills does Kapil know?<br />
              • Show me his best projects<br />
              • What experience does he have?<br />
              • Can I download his resume?<br /><br />
              (AI feature coming soon...)
            </div>

            {/* Disabled Input */}
            <input
              type="text"
              disabled
              placeholder="AI Mode Coming Soon..."
              className="mt-3 px-3 py-2 w-full rounded-md bg-white/10 text-gray-400 border border-white/20 text-xs md:text-sm cursor-not-allowed"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
