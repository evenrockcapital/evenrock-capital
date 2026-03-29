import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Dugout Sports — Evenrock Capital",
  description:
    "Live scores. Deep stats. Every conference. Every team. The college baseball platform fans deserve.",
  openGraph: {
    title: "Dugout Sports — Evenrock Capital",
    description:
      "Live scores. Deep stats. Every conference. Every team. The college baseball platform fans deserve.",
    type: "article",
  },
};

const conferences = [
  "SEC",
  "ACC",
  "Big 12",
  "Big Ten",
  "Pac-12",
  "AAC",
  "Sun Belt",
  "Mountain West",
  "Conference USA",
  "Missouri Valley",
];

const features = [
  {
    label: "Live Scores",
    description:
      "Real-time scoring across every NCAA D1 conference. No delays, no refreshing. The game moves fast and so does Dugout.",
  },
  {
    label: "10,000+ Player Profiles",
    description:
      "Every roster, every stat line. Search any player across Division 1 college baseball and get the full picture instantly.",
  },
  {
    label: "Dugout Power Index",
    description:
      "Our proprietary ranking system that goes beyond wins and losses. A single number that captures strength of schedule, run differential, and momentum.",
  },
  {
    label: "Standings & Rankings",
    description:
      "Conference standings updated in real time. National rankings from every major poll. One place to see where every team sits.",
  },
];

export default function DugoutSportsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a2e17] text-[#f4eed5]">
      {/* Back nav */}
      <div className="w-full pt-32 sm:pt-40">
        <div className="max-w-3xl mx-auto px-8">
          <Link
            href="/#now"
            className="inline-block text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors mb-12"
          >
            &larr; Back to now
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border border-[#d4a843]/20 text-[#d4a843]/60">
                Active
              </span>
              <span className="text-[12px] tracking-wide text-white/50">
                Updated March 2026
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-eb-garamond)] text-5xl sm:text-6xl lg:text-7xl font-normal italic tracking-tight leading-[1.08] text-[#f4eed5]">
              Dugout Sports
            </h1>
            <p className="mt-6 text-xl sm:text-2xl leading-relaxed text-[#f4eed5]/50 font-light max-w-2xl">
              The Scoreboard Your Team Deserves
            </p>
            <div className="mt-6 h-[2px] w-[60px] bg-[#d4a843]" />
          </ScrollReveal>
        </div>
      </section>

      {/* Intro — Apple-style short paragraphs */}
      <section className="w-full py-20 sm:py-28 bg-[#0f3d22]">
        <div className="max-w-3xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-lg sm:text-xl leading-[1.8] text-[#f4eed5]/75 font-light">
              College baseball has the most passionate fans in sports. But the
              tools available to them are stuck in the past: clunky score apps,
              scattered stat sites, and coverage that treats the sport like an
              afterthought.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-lg sm:text-xl leading-[1.8] text-[#f4eed5]/75 font-light">
              Dugout Sports is building the platform college baseball deserves.
              Live scores. Deep stats. Every conference. Every team. One place
              that finally matches the intensity fans actually feel.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a
              href="https://dugoutsports.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 text-[13px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors"
            >
              Visit dugoutsports.io &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="w-full py-16 sm:py-20 border-y border-white/5">
        <div className="max-w-3xl mx-auto px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              {[
                { number: "10,000+", label: "Player Profiles" },
                { number: "300+", label: "D1 Teams" },
                { number: "30+", label: "Conferences" },
                { number: "Live", label: "Score Updates" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic text-[#d4a843]">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-[12px] tracking-[0.15em] uppercase text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features — one per block, Apple newsroom style */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-4">
              What we&apos;re building
            </p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
              Built for real fans
            </h2>
          </ScrollReveal>
          <div className="mt-12 space-y-12">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.label} delay={0.1 * (i + 1)}>
                <div className="border-l-2 border-[#d4a843]/20 pl-6 py-1">
                  <h3 className="font-[family-name:var(--font-eb-garamond)] text-xl sm:text-2xl font-normal italic text-[#f4eed5] mb-3">
                    {feature.label}
                  </h3>
                  <p className="text-base leading-[1.8] text-[#f4eed5]/60 font-light max-w-xl">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="w-full py-20 sm:py-28 bg-[#0f3d22]">
        <div className="max-w-3xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-4">
              Coverage
            </p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
              Every conference. Every team.
            </h2>
            <p className="mt-6 text-lg leading-[1.8] text-[#f4eed5]/60 font-light max-w-2xl">
              From the SEC to the Sun Belt, Dugout Sports covers all of Division
              1 college baseball. No gaps. No blind spots.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {conferences.map((conf) => (
                <span
                  key={conf}
                  className="text-[12px] tracking-[0.1em] uppercase px-4 py-2 rounded-full border border-white/10 text-white/50"
                >
                  {conf}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Vision */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-4">
              The Vision
            </p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
              Close the gap
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8 space-y-6">
              <p className="text-lg leading-[1.8] text-[#f4eed5]/75 font-light">
                The gap between how much college baseball fans care and how well
                they&apos;re served is massive. MLB fans have ESPN, The Athletic,
                and a dozen stat apps fighting for their attention. College
                baseball fans have... not much.
              </p>
              <p className="text-lg leading-[1.8] text-[#f4eed5]/75 font-light">
                That&apos;s the opportunity. Build the thing that should exist.
                Make it fast, make it beautiful, and make it the first place fans
                go when they want to know what&apos;s happening in college
                baseball.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <blockquote className="mt-10 border-l-2 border-[#d4a843]/30 pl-6">
              <p className="font-[family-name:var(--font-eb-garamond)] text-xl sm:text-2xl italic leading-relaxed text-[#f4eed5]/50">
                &ldquo;The best products are built by people who are building for
                themselves. We&apos;re fans first.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 bg-[#0f3d22]">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <ScrollReveal>
            <p className="text-lg text-[#f4eed5]/60 font-light mb-6">
              Dugout Sports is live and in active development.
            </p>
            <a
              href="https://dugoutsports.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#d4a843] text-[#0a2e17] text-[13px] tracking-[0.1em] uppercase font-medium hover:bg-[#d4a843]/90 transition-colors"
            >
              Visit dugoutsports.io
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer nav */}
      <div className="w-full py-12">
        <div className="max-w-3xl mx-auto px-8 pt-8 border-t border-white/10">
          <Link
            href="/#now"
            className="text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors"
          >
            &larr; What I&apos;m working on
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
