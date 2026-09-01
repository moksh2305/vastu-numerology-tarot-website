"use client";

import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
