"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Writing", href: "/#writing", sectionId: "writing" },
  { label: "Now", href: "/#now", sectionId: "now" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Advisory", href: "/advisory", sectionId: null },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = links
      .map((l) => l.sectionId)
      .filter((id): id is string => id !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with the highest intersection ratio
          const top = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full sticky top-0 bg-[#0a2e17]/95 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#d4a843]"
        >
          Evenrock Capital
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-light tracking-wide">
          {links.map((l) => {
            const isActive = activeSection && l.sectionId === activeSection;
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`relative pb-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a843] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a2e17] rounded-sm ${
                  isActive
                    ? "text-[#f4eed5]"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#BD3039]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-px bg-[#f4eed5] transition-all duration-300 ${
              open ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#f4eed5] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#f4eed5] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[13px] tracking-wide transition-colors duration-300 ${
                activeSection && l.sectionId === activeSection
                  ? "text-[#d4a843]"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-white/10" />
      </div>
    </nav>
  );
}
