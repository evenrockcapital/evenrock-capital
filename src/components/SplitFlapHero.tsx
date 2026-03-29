"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ── Fenway Park scoreboard animation ──
// Cream cells with Sox red letters. Morse code stripe. Steel grain.
// Plates slide up from below like an operator pushing them into slots.

const BASE_STAGGER = 320;
const STAGGER_JITTER = 120;
const GAP_DURATION = 250;
const DROP_DURATION = 180;
const SETTLE_DURATION = 100;

function ScoreboardChar({
  target,
  delay,
  reducedMotion,
  skipToEnd,
}: {
  target: string;
  delay: number;
  reducedMotion: boolean;
  skipToEnd: boolean;
}) {
  const [phase, setPhase] = useState<
    "empty" | "dropping" | "settling" | "settled"
  >(reducedMotion ? "settled" : "empty");
  const [settled, setSettled] = useState(reducedMotion);
  const letter = target.toUpperCase();

  useEffect(() => {
    if (skipToEnd && !settled) {
      setPhase("settled");
      setSettled(true);
    }
  }, [skipToEnd, settled]);

  useEffect(() => {
    if (reducedMotion || skipToEnd) {
      setPhase("settled");
      setSettled(true);
      return;
    }

    const timeouts: NodeJS.Timeout[] = [];

    timeouts.push(
      setTimeout(() => setPhase("dropping"), delay + GAP_DURATION)
    );
    timeouts.push(
      setTimeout(
        () => setPhase("settling"),
        delay + GAP_DURATION + DROP_DURATION
      )
    );
    timeouts.push(
      setTimeout(() => {
        setPhase("settled");
        setSettled(true);
      }, delay + GAP_DURATION + DROP_DURATION + SETTLE_DURATION)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [target, delay, reducedMotion, skipToEnd]);

  const getStyles = useCallback((): {
    transform: string;
    opacity: number;
    transition: string;
  } => {
    switch (phase) {
      case "empty":
        return {
          transform: "translateY(105%)",
          opacity: 0,
          transition: "none",
        };
      case "dropping":
        return {
          transform: "translateY(-2px)",
          opacity: 1,
          transition: `transform ${DROP_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${DROP_DURATION * 0.6}ms ease-out`,
        };
      case "settling":
        return {
          transform: "translateY(0)",
          opacity: 1,
          transition: `transform ${SETTLE_DURATION}ms ease-out`,
        };
      case "settled":
        return {
          transform: "translateY(0)",
          opacity: 1,
          transition: "none",
        };
    }
  }, [phase]);

  const styles = getStyles();

  const settleRotation = useRef((Math.random() - 0.5) * 0.5);

  const finalTransform =
    phase === "settled"
      ? `translateY(0) rotate(${settleRotation.current}deg)`
      : styles.transform;

  return (
    <span
      className="relative inline-flex items-center justify-center overflow-hidden
        w-[2.8rem] h-[3.6rem]
        sm:w-[3.4rem] sm:h-[4.4rem]
        lg:w-[4rem] lg:h-[5rem]"
      style={{
        backgroundColor: "#0a1f12",
        boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)",
      }}
    >
      {/* Cream plate with Sox red text */}
      <span
        className="absolute inset-0 flex items-center justify-center
          text-2xl sm:text-3xl lg:text-4xl
          font-bold tracking-wide"
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontVariantNumeric: "tabular-nums",
          backgroundColor: "#f4eed5",
          color: "#BD3039",
          transform: finalTransform,
          opacity: styles.opacity,
          transition: styles.transition,
          willChange: "transform, opacity",
          boxShadow:
            phase === "settled" || phase === "settling"
              ? "inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.2)"
              : "none",
        }}
      >
        {letter}
      </span>
    </span>
  );
}

// Rivet dot
function Rivet() {
  return (
    <span
      className="block w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full shrink-0"
      style={{
        backgroundColor: "#2a5436",
        boxShadow:
          "inset 0 1px 1px rgba(255,255,255,0.1), 0 1px 1px rgba(0,0,0,0.3)",
      }}
    />
  );
}

// Morse code stripe — AE (A = ·— E = ·)
function MorseStripe() {
  return (
    <div
      className="flex flex-col items-center justify-center w-[12px] sm:w-[14px] rounded-[1px] gap-[3px]"
      style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
      title="AE in Morse code"
    >
      {/* A: dot dash */}
      <span className="block w-[3px] h-[3px] rounded-full bg-white/40" />
      <span className="block w-[3px] h-[8px] rounded-[1.5px] bg-white/40" />
      {/* gap */}
      <span className="block h-[5px]" />
      {/* E: dot */}
      <span className="block w-[3px] h-[3px] rounded-full bg-white/40" />
    </div>
  );
}

function getStaggerDelays(count: number): number[] {
  const delays: number[] = [];
  let cumulative = 0;
  for (let i = 0; i < count; i++) {
    delays.push(cumulative);
    const jitter = Math.random() * STAGGER_JITTER;
    cumulative += BASE_STAGGER + jitter;
  }
  return delays;
}

export default function SplitFlapHero({
  children,
}: {
  children?: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion() ?? false;
  const firstName = "Alex";
  const lastName = "Evenson";
  const heroRef = useRef<HTMLDivElement>(null);
  const [skipToEnd, setSkipToEnd] = useState(false);
  const [animationDone, setAnimationDone] = useState(reducedMotion);

  const delaysRef = useRef<number[]>(
    getStaggerDelays(firstName.length + lastName.length)
  );
  const delays = delaysRef.current;

  const totalChars = firstName.length + lastName.length;
  const totalCycleDuration =
    delays[totalChars - 1] +
    GAP_DURATION +
    DROP_DURATION +
    SETTLE_DURATION +
    300;

  useEffect(() => {
    if (reducedMotion || animationDone) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setSkipToEnd(true);
          setAnimationDone(true);
        }
      },
      { threshold: 0 }
    );

    const el = heroRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, animationDone]);

  useEffect(() => {
    if (reducedMotion || skipToEnd) {
      setAnimationDone(true);
      return;
    }

    const timer = setTimeout(() => setAnimationDone(true), totalCycleDuration);
    return () => clearTimeout(timer);
  }, [reducedMotion, skipToEnd, totalCycleDuration]);

  const revealDelay =
    reducedMotion || skipToEnd ? 0 : (totalCycleDuration + 200) / 1000;

  return (
    <div ref={heroRef} className="flex-1 max-w-2xl">
      <h1 className="sr-only">Alex Evenson</h1>

      <motion.p
        className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843] mb-5"
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: reducedMotion ? 0 : 0.2 }}
      >
        Founder &middot; Builder &middot; Advisor
      </motion.p>

      {/* ── Fenway-style scoreboard panel ── */}
      <div
        className="inline-flex rounded-[3px] overflow-hidden"
        aria-hidden="true"
        style={{
          backgroundColor: "#1e4d2b",
          border: "2px solid #163d22",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.3)",
          // Steel grain texture
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 4px)",
        }}
      >
        <div className="flex flex-col">
          {/* Top rivet row */}
          <div className="flex items-center gap-[10px] sm:gap-3 px-2.5 sm:px-3 py-1.5">
            <Rivet /><Rivet /><Rivet /><Rivet /><Rivet />
            <Rivet /><Rivet /><Rivet /><Rivet />
          </div>

          <div className="flex items-stretch">
            {/* Cells */}
            <div className="flex flex-col gap-[2px] sm:gap-[3px] px-2.5 sm:px-3">
              {/* Row 1: ALEX */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                {firstName.split("").map((char, i) => (
                  <ScoreboardChar
                    key={`first-${i}`}
                    target={char}
                    delay={delays[i]}
                    reducedMotion={reducedMotion}
                    skipToEnd={skipToEnd}
                  />
                ))}
              </div>
              {/* Row 2: EVENSON */}
              <div className="flex gap-[2px] sm:gap-[3px]">
                {lastName.split("").map((char, i) => (
                  <ScoreboardChar
                    key={`last-${i}`}
                    target={char}
                    delay={delays[firstName.length + i]}
                    reducedMotion={reducedMotion}
                    skipToEnd={skipToEnd}
                  />
                ))}
              </div>
            </div>

            {/* Morse code stripe — AE initials */}
            <div className="pr-2 sm:pr-2.5 flex items-stretch">
              <MorseStripe />
            </div>
          </div>

          {/* Bottom rivet row with 37 marker */}
          <div className="flex items-center gap-[10px] sm:gap-3 px-2.5 sm:px-3 py-1.5 relative">
            <span
              className="absolute left-2.5 sm:left-3 font-[family-name:var(--font-eb-garamond)] italic text-[11px]"
              style={{ color: "rgba(244,238,213,0.1)" }}
              title="Height of the Green Monster: 37 feet"
            >
              37
            </span>
            <span className="ml-5 sm:ml-6" />
            <Rivet /><Rivet /><Rivet /><Rivet />
            <Rivet /><Rivet /><Rivet /><Rivet />
          </div>
        </div>
      </div>

      {/* Gold rule */}
      <div className="mt-6 h-[2px]">
        <motion.div
          className="h-full bg-[#d4a843]"
          initial={reducedMotion ? { width: 60 } : { width: 0 }}
          animate={{ width: 60 }}
          transition={{
            duration: 0.4,
            delay: revealDelay,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Tagline */}
      <div className="mt-6 min-h-[3.5rem]">
        <motion.p
          className="font-[family-name:var(--font-cormorant)] text-xl leading-relaxed text-[#f4eed5]/60 font-light italic"
          initial={
            reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: revealDelay + 0.2,
          }}
        >
          I believe the best products are the ones nobody thought were possible
          at that price point. I&apos;m building two of them right now.
        </motion.p>
      </div>

      <motion.p
        className="mt-4 text-sm leading-relaxed text-white/50 font-light"
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: revealDelay + 0.4,
        }}
      >
        Based in the Midwest, building for everywhere.
      </motion.p>

      {/* Social links */}
      <motion.div
        className="mt-8"
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: revealDelay + 0.6,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
