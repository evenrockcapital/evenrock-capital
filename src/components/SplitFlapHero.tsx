"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function SplitFlapHero({
  children,
}: {
  children?: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion() ?? false;

  const fade = (delay: number) => ({
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: reducedMotion ? 0 : delay },
  });

  return (
    <div className="flex-1 max-w-2xl">
      <motion.p
        className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#d4a843] mb-4 sm:mb-6"
        {...fade(0.1)}
      >
        Founder &middot; Builder &middot; Advisor
      </motion.p>

      <h1 className="sr-only">Alex Evenson</h1>

      {/* Name */}
      <motion.div {...fade(0.2)}>
        <p
          className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold italic tracking-tight text-[#f4eed5] leading-[1.1] whitespace-nowrap"
        >
          Alex Evenson
        </p>
      </motion.div>

      {/* Gold rule */}
      <motion.div
        className="mt-5 sm:mt-7 h-[2px]"
        {...fade(0.4)}
      >
        <div className="w-[60px] h-full bg-[#d4a843]" />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="font-[family-name:var(--font-cormorant)] mt-5 sm:mt-7 text-xl leading-relaxed text-[#f4eed5]/60 font-light italic"
        {...fade(0.5)}
      >
        Living life like a 3-1 count.
      </motion.p>

      <motion.p
        className="mt-4 text-sm leading-relaxed text-white/50 font-light"
        {...fade(0.6)}
      >
        Kirkland, Washington — USA
      </motion.p>

      {/* Social links + email */}
      <motion.div className="mt-8" {...fade(0.7)}>
        {children}
      </motion.div>
    </div>
  );
}
