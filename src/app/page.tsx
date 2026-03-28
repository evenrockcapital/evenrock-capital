const socials = [
  {
    name: "X",
    href: "https://x.com/evenson_alex",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-evenson-347147133/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alex__evenson/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
      </svg>
    ),
  },
  {
    name: "Substack",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.56-5.39L20.58 24V10.812H1.46zm21.08-8.648H1.46V0h21.08v2.164z" />
      </svg>
    ),
  },
];

const ventures = [
  {
    name: "FlipFlap",
    tagline: "Split-flap displays for everyone",
    description:
      "The Vestaboard alternative at 1/50th the cost. Beautiful, mechanical split-flap displays that bring warmth and character to any space.",
  },
  {
    name: "Dugout Sports",
    tagline: "The future of sports engagement",
    description:
      "Building tools and experiences that connect fans to the sports they love.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-stone-900 font-sans">
      {/* Nav */}
      <nav className="w-full sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-8 py-6">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-stone-900">
            Evenrock Capital
          </span>
          <div className="hidden md:flex items-center gap-10 text-[13px] tracking-wide text-stone-400">
            <a href="#about" className="hover:text-stone-900 transition-colors duration-300">About</a>
            <a href="#advisory" className="hover:text-stone-900 transition-colors duration-300">Advisory</a>
            <a href="#ventures" className="hover:text-stone-900 transition-colors duration-300">Ventures</a>
            <a href="#writing" className="hover:text-stone-900 transition-colors duration-300">Writing</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors duration-300">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-8">
          <div className="h-px bg-stone-200" />
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="w-full pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            {/* Headshot placeholder */}
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-300 text-xs tracking-widest uppercase shrink-0">
              Photo
            </div>
            <div className="flex-1 max-w-2xl">
              <p className="text-[13px] tracking-[0.15em] uppercase text-stone-400 mb-4">
                Founder &amp; Advisor
              </p>
              <h1 className="text-5xl sm:text-6xl font-light tracking-tight leading-[1.1] text-stone-900">
                Alex Evenson
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-stone-500 font-light">
                Builder, investor, and advisor helping companies go from zero to one.
                Based in the Midwest, building for everywhere.
              </p>
              {/* Social links */}
              <div className="mt-10 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-400 transition-all duration-300"
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

      {/* Advisory */}
      <section id="advisory" className="w-full py-28 sm:py-36 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-stone-400 mb-4">
            01 — Advisory
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            Evenrock Capital
          </h2>
          <div className="mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-stone-500 font-light">
              We advise early-stage companies on go-to-market strategy,
              product development, and growth. We partner with founders who
              obsess over building products people genuinely love.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-stone-500 font-light">
              Our approach is hands-on — working alongside founders, not
              from the sidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="w-full py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-stone-400 mb-4">
            02 — Ventures
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            What we&apos;re building
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {ventures.map((v) => (
              <div
                key={v.name}
                className="group border border-stone-200 rounded-2xl p-8 sm:p-10 hover:border-stone-300 transition-all duration-300"
              >
                <p className="text-[13px] tracking-[0.15em] uppercase text-stone-400 mb-3">
                  {v.tagline}
                </p>
                <h3 className="text-2xl font-light tracking-tight text-stone-900">
                  {v.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone-500 font-light">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing / Substack */}
      <section id="writing" className="w-full py-28 sm:py-36 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-stone-400 mb-4">
            03 — Writing
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            Thoughts &amp; essays
          </h2>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl">
            On building, investing, and the things worth paying attention to.
          </p>
          <div className="mt-12 border border-stone-200 rounded-2xl bg-white p-12 sm:p-16 text-center">
            <p className="text-stone-300 text-sm tracking-widest uppercase">
              Coming soon
            </p>
            <p className="mt-3 text-stone-400 text-sm font-light">
              Substack posts will appear here
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full py-28 sm:py-36">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-stone-400 mb-4">
            04 — Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            Get in touch
          </h2>
          <form className="mt-12 max-w-lg flex flex-col gap-5">
            <div>
              <label className="block text-[13px] tracking-wide text-stone-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full border-b border-stone-200 pb-3 text-base outline-none focus:border-stone-900 transition-colors duration-300 bg-transparent placeholder:text-stone-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[13px] tracking-wide text-stone-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full border-b border-stone-200 pb-3 text-base outline-none focus:border-stone-900 transition-colors duration-300 bg-transparent placeholder:text-stone-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-[13px] tracking-wide text-stone-400 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full border-b border-stone-200 pb-3 text-base outline-none focus:border-stone-900 transition-colors duration-300 bg-transparent resize-none placeholder:text-stone-300"
                placeholder="What's on your mind?"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-fit text-[13px] tracking-[0.15em] uppercase border border-stone-900 px-8 py-3 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[13px] tracking-wide text-stone-300">
            &copy; {new Date().getFullYear()} Evenrock Capital
          </span>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-stone-900 transition-colors duration-300"
                title={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
