"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define message type for full TS safety
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const chatRef = useRef<HTMLDivElement>(null);
  const bodyOverflowRef = useRef<string>("");

  // 🔒 Lock/unlock body scroll when chat opens/closes
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (open) {
      bodyOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = bodyOverflowRef.current || "";
    }

    return () => {
      document.body.style.overflow = bodyOverflowRef.current || "";
    };
  }, [open]);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 100);
  };

  // Load saved chat
  useEffect(() => {
    const saved = localStorage.getItem("kapil-ai-chat");
    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  // Save chat + scroll
  useEffect(() => {
    localStorage.setItem("kapil-ai-chat", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  // Send message
  const sendMessage = async (text: string = "") => {
    const msgToSend = text || input;
    if (!msgToSend.trim()) return;

    const userMsg: ChatMessage = { role: "user", content: msgToSend };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: msgToSend }),
      });

      const data = await res.json();

      const botMsg: ChatMessage = {
        role: "assistant",
        content: data.reply || "I couldn't process that, try again!",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Error: Unable to connect to Kapil AI.",
        },
      ]);
    }

    setLoading(false);
  };

  const suggestions = [
    "What skills does Kapil know?",
    "Show me Kapil's best projects",
    "Tell me about XFlyve TMS",
    "What experience does Kapil have?",
    "Can I see his resume?",
    "Is Kapil available full-time?",
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{ y: open ? 10 : 0 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-20 right-5 md:right-6 w-12 h-12 md:w-14 md:h-14 
                   rounded-full bg-purple-600 hover:bg-purple-700 text-white 
                   flex items-center justify-center shadow-xl 
                   text-xl md:text-2xl cursor-pointer transition z-[999]"
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
            className="fixed inset-0 z-[9999] flex items-end justify-end 
                       pointer-events-none"
          >
            {/* Click blocker for the rest of the page */}
            <div className="absolute inset-0 bg-black/40 pointer-events-auto" />

            {/* Chat window */}
            <div className="relative bottom-6 right-4 md:right-6 pointer-events-auto">
              <div
                className="w-72 md:w-80 h-[420px] md:h-[500px]
                           bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl 
                           shadow-xl p-4 flex flex-col text-white"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <p className="font-semibold text-sm md:text-base">
                    Kapil AI Assistant
                  </p>

                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => {
                        localStorage.removeItem("kapil-ai-chat");
                        setMessages([]);
                      }}
                      className="text-gray-300 hover:text-white text-xs cursor-pointer"
                    >
                      Clear
                    </button>

                    <button
                      className="text-gray-400 hover:text-white text-lg cursor-pointer"
                      onClick={() => setOpen(false)}
                    >
                      ✖
                    </button>
                  </div>
                </div>

                {/* Scrollable area: suggestions + messages + typing */}
                <div
                  ref={chatRef}
                  className="flex-1 overflow-y-auto overscroll-contain space-y-3 text-xs md:text-sm 
                             p-2 rounded-lg border border-white/10"
                >
                  {/* Suggestions */}
                  {messages.length === 0 && (
                    <div className="text-gray-300">
                      <p className="font-semibold mb-2">Try asking:</p>

                      <div className="flex flex-wrap gap-2">
                        {suggestions.map((q) => (
                          <button
                            key={q}
                            onClick={() => sendMessage(q)}
                            className="px-2 py-1 bg-white/10 border border-white/20 
                                       rounded-md hover:bg-purple-600/30 transition text-gray-200"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Messages */}
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`p-2 rounded-lg max-w-[85%] leading-relaxed ${
                        msg.role === "user"
                          ? "ml-auto bg-purple-600 text-white"
                          : "bg-white/10 text-gray-200"
                      }`}
                    >
                      {msg.content}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {loading && (
                    <div className="bg-white/10 text-gray-300 p-2 rounded-lg inline-block">
                      ✨ Kapil AI is thinking…
                    </div>
                  )}
                </div>

                {/* Input Box */}
                <div className="mt-3 flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    placeholder="Ask me something..."
                    className="flex-1 px-3 py-2 rounded-md bg-white/10 
                               border border-white/20 text-white outline-none"
                  />
                  <button
                    onClick={() => sendMessage()}
                    className="px-3 py-2 bg-purple-600 hover:bg-purple-700 
                               rounded-md text-xs md:text-sm"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
