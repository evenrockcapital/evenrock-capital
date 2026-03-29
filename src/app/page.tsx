import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/data/socials";
import { nowItems, nowUpdated } from "@/data/now";
import { aboutItems } from "@/data/about";
import SubstackFeed from "@/components/SubstackFeed";
import SubstackFeedSkeleton from "@/components/SubstackFeedSkeleton";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SplitFlapHero from "@/components/SplitFlapHero";
import ScrollReveal from "@/components/ScrollReveal";
import FadeIn from "@/components/FadeIn";
import RivetedSeam from "@/components/RivetedSeam";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a2e17] text-[#f4eed5]">
      {/* Hero */}
      <section className="w-full pt-16 pb-12 sm:pt-40 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24">
            {/* Headshot */}
            <FadeIn delay={0.1} className="shrink-0">
              <div className="w-40 h-52 sm:w-64 sm:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden border border-[#d4a843]/20 relative">
                <Image
                  src="/headshot.jpg"
                  alt="Alex Evenson"
                  fill
                  sizes="(min-width: 1024px) 288px, (min-width: 640px) 256px, 160px"
                  className="object-cover object-[center_20%]"
                  style={{
                    filter: "grayscale(100%) sepia(40%) hue-rotate(70deg) saturate(50%) brightness(0.85) contrast(1.1)",
                  }}
                  priority
                />
              </div>
            </FadeIn>
            <SplitFlapHero>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#d4a843] hover:border-[#d4a843]/40 hover:shadow-[0_0_12px_rgba(212,168,67,0.15)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a843]"
                    title={s.name}
                    aria-label={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </SplitFlapHero>
          </div>
        </div>
      </section>

      <RivetedSeam />

      {/* Writing — TOP of page, the centerpiece */}
      <section id="writing" className="w-full py-16 sm:py-36 bg-[#0f3d22]">
        <div className="max-w-6xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-4">
              01 — Writing
            </p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
              Thoughts &amp; essays
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] mt-6 text-lg text-[#f4eed5]/60 font-light italic max-w-2xl">
              On building, investing, and the things worth paying attention to.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Suspense fallback={<SubstackFeedSkeleton />}>
              <SubstackFeed />
            </Suspense>
          </ScrollReveal>
        </div>
      </section>

      <RivetedSeam />

      {/* Now */}
      <section id="now" className="w-full py-16 sm:py-36">
        <div className="max-w-6xl mx-auto px-8">
          <ScrollReveal>
            <div className="flex items-baseline justify-between mb-4">
              <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60">
                02 — Now
              </p>
              <p className="text-[12px] tracking-wide text-white/40">
                Updated {nowUpdated}
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
              What I&apos;m working on
            </h2>
          </ScrollReveal>
          <div className="mt-12 flex flex-col gap-6">
            {nowItems.map((item, i) => (
              <ScrollReveal key={item.slug} delay={0.1 * (i + 1)}>
                <Link
                  href={`/now/${item.slug}`}
                  className="group flex items-start gap-4 border-l-2 border-[#d4a843]/20 pl-6 py-1 hover:border-[#d4a843] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[#f4eed5]/60 font-light italic group-hover:text-[#f4eed5]/80 transition-colors duration-300">
                      {item.text}
                    </p>
                    <span className="inline-block mt-2 text-[11px] tracking-[0.15em] uppercase text-[#d4a843]/25 group-hover:text-[#d4a843]/60 transition-colors duration-300">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <RivetedSeam className="bg-[#0f3d22]" />

      {/* About */}
      <section id="about" className="w-full py-16 sm:py-36 bg-[#0f3d22]">
        <div className="max-w-6xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-4">
              03 — About
            </p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
              A bit more
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-[family-name:var(--font-cormorant)] mt-6 text-lg text-[#f4eed5]/60 font-light italic max-w-2xl">
              Builder, writer, and someone who cares about making great things
              accessible to everyone.
            </p>
          </ScrollReveal>
          <div className="mt-12 flex flex-col gap-6">
            {aboutItems.map((item, i) => (
              <ScrollReveal key={item.slug} delay={0.1 * (i + 1)}>
                <Link
                  href={`/about/${item.slug}`}
                  className="group flex items-start gap-4 border-l-2 border-[#d4a843]/20 pl-6 py-1 hover:border-[#d4a843] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[#f4eed5]/60 font-light italic group-hover:text-[#f4eed5]/80 transition-colors duration-300">
                      {item.text}
                    </p>
                    <span className="inline-block mt-2 text-[11px] tracking-[0.15em] uppercase text-[#d4a843]/25 group-hover:text-[#d4a843]/60 transition-colors duration-300">
                      Read more &rarr;
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
            <ScrollReveal delay={0.1 * (aboutItems.length + 1)}>
              <a
                href="https://www.linkedin.com/in/alex-evenson-347147133/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block ml-6 text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors mt-2"
              >
                Full background on LinkedIn &rarr;
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <RivetedSeam />

      {/* Contact */}
      <section id="contact" className="w-full py-16 sm:py-36">
        <div className="max-w-6xl mx-auto px-8">
          <ScrollReveal>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-4">
              04 — Contact
            </p>
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
              Let&apos;s talk
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] mt-6 text-lg text-[#f4eed5]/60 font-light italic max-w-2xl">
              Want to work together? Tell me what you&apos;re building.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
