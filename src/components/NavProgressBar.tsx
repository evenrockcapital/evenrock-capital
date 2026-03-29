"use client";

import { motion, useScroll, useReducedMotion } from "framer-motion";

export default function NavProgressBar() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-[#d4a843] origin-left z-[60]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
