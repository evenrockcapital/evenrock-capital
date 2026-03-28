import { socials } from "@/data/socials";
import { nowItems, nowUpdated } from "@/data/now";
import SubstackFeed from "@/components/SubstackFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-stone-900 font-sans">
      {/* Hero */}
      <section className="w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            {/* Headshot placeholder */}
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-300 text-xs tracking-widest uppercase shrink-0">
              Photo
            </div>
            <div className="flex-1 max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-light tracking-tight leading-[1.1] text-stone-900">
                Alex Evenson
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-stone-500 font-light">
                I believe the best products are the ones nobody thought were
                possible at that price point. I&apos;m building two of them
                right now.
              </p>
              <p className="mt-4 text-base leading-relaxed text-stone-400 font-light">
                Founder. Builder. Advisor. Based in the Midwest, building for
                everywhere.
              </p>
              {/* Social links */}
              <div className="mt-8 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-amber-800 hover:border-amber-700/40 transition-all duration-300"
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writing — TOP of page, the centerpiece */}
      <section id="writing" className="w-full py-28 sm:py-36 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60 mb-4">
            01 — Writing
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            Thoughts &amp; essays
          </h2>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl">
            On building, investing, and the things worth paying attention to.
          </p>
          <SubstackFeed />
        </div>
      </section>

      {/* Now */}
      <section id="now" className="w-full py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-baseline justify-between mb-4">
            <p className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60">
              02 — Now
            </p>
            <p className="text-[13px] tracking-wide text-stone-300">
              Updated {nowUpdated}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            What I&apos;m working on
          </h2>
          <div className="mt-12 flex flex-col gap-6">
            {nowItems.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 border-l-2 border-stone-200 pl-6 py-1"
              >
                <p className="text-lg leading-relaxed text-stone-600 font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="w-full py-28 sm:py-36 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60 mb-4">
            03 — About
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            A bit more
          </h2>
          <div className="mt-8 max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed text-stone-500 font-light">
              I&apos;m Alex Evenson. I build companies, advise founders, and
              write about what I&apos;m learning along the way.
            </p>
            <p className="text-lg leading-relaxed text-stone-500 font-light">
              Right now I&apos;m building FlipFlap — a split-flap display
              that costs 1/50th of a Vestaboard — and Dugout Sports, a
              platform for the future of sports engagement. Through Evenrock
              Capital, I advise early-stage founders on go-to-market, product,
              and growth.
            </p>
            <p className="text-lg leading-relaxed text-stone-500 font-light">
              I believe in building in public, obsessing over craft, and
              making beautiful products accessible to everyone.
            </p>
            <a
              href="https://www.linkedin.com/in/alex-evenson-347147133/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[13px] tracking-[0.15em] uppercase text-amber-800 hover:text-amber-900 transition-colors mt-2"
            >
              Full background on LinkedIn &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60 mb-4">
            04 — Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            Let&apos;s talk
          </h2>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl">
            Want to work together? Tell me what you&apos;re building.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
