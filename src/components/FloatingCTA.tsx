"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[999] flex flex-col items-end gap-3 pointer-events-auto"
        >
          <a
            href="#contact"
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-br from-[rgba(8,45,24,0.96)] to-[rgba(4,26,14,0.98)] border border-[rgba(201,168,76,0.45)] text-[var(--color-gold-light)] text-xs md:text-sm font-medium tracking-widest uppercase backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all hover:-translate-x-1 hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-gradient-to-br hover:from-[rgba(13,92,48,0.97)] hover:to-[rgba(8,45,24,1)] hover:shadow-[0_14px_44px_rgba(0,0,0,0.55)]"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse" />
            Book Free Consultation
          </a>
          
          <button
            onClick={scrollToTop}
            title="Back to top"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[rgba(8,45,24,0.92)] border border-[rgba(201,168,76,0.35)] flex items-center justify-center text-[var(--color-gold-light)] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all hover:bg-[rgba(13,92,48,0.95)] hover:border-[var(--color-gold)] hover:-translate-y-1 hover:shadow-[0_10px_32px_rgba(0,0,0,0.5)]"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
