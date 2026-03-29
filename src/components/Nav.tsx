"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "Writing", href: "/#writing", sectionId: "writing", path: null },
  { label: "Now", href: "/#now", sectionId: "now", path: null },
  { label: "About", href: "/#about", sectionId: "about", path: null },
  // { label: "Advisory", href: "/advisory", sectionId: null, path: "/advisory" },
  { label: "Contact", href: "/#contact", sectionId: "contact", path: null },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setActiveSection(null);
      return;
    }

    const sectionIds = links
      .map((l) => l.sectionId)
      .filter((id): id is string => id !== null);

    const visibilityMap = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });
        let bestId: string | null = null;
        let bestRatio = 0;
        visibilityMap.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        if (bestId) setActiveSection(bestId);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

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
            const isActive = l.path
              ? pathname === l.path
              : activeSection && l.sectionId === activeSection;
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
                (l.path ? pathname === l.path : activeSection && l.sectionId === activeSection)
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
