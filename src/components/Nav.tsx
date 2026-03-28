"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Writing", href: "/#writing" },
  { label: "Now", href: "/#now" },
  { label: "About", href: "/#about" },
  { label: "Advisory", href: "/advisory" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.2em] uppercase text-stone-900"
        >
          Evenrock Capital
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10 text-[13px] tracking-wide text-stone-400">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-stone-900 transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-stone-900 transition-all duration-300 ${
              open ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone-900 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone-900 transition-all duration-300 ${
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
              className="text-[13px] tracking-wide text-stone-400 hover:text-stone-900 transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <div className="h-px bg-stone-200" />
      </div>
    </nav>
  );
}
