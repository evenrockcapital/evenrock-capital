import Link from "next/link";

const socials = [
  { name: "X", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "Instagram", href: "#", icon: "IG" },
  { name: "Substack", href: "#", icon: "▲" },
];

const ventures = [
  {
    name: "FlipFlap",
    description:
      "The Vestaboard alternative at 1/50th the cost. Beautiful split-flap displays for everyone.",
    href: "#",
  },
  {
    name: "Dugout Sports",
    description:
      "Building the future of sports engagement.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-900">
      {/* Nav */}
      <nav className="w-full border-b border-zinc-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">
            Evenrock Capital
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-zinc-500">
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
            <a href="#advisory" className="hover:text-zinc-900 transition-colors">Advisory</a>
            <a href="#ventures" className="hover:text-zinc-900 transition-colors">Ventures</a>
            <a href="#writing" className="hover:text-zinc-900 transition-colors">Writing</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="w-full py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-12">
          {/* Headshot placeholder */}
          <div className="w-40 h-40 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400 text-sm shrink-0">
            Photo
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold tracking-tight">Alex Evenson</h1>
            <p className="mt-2 text-lg text-zinc-500">
              Founder &amp; Advisor
            </p>
            <p className="mt-4 max-w-lg text-zinc-600 leading-relaxed">
              {/* TODO: Replace with real bio */}
              Builder, investor, and advisor. Helping companies go from zero to one.
            </p>
            {/* Social links */}
            <div className="mt-6 flex items-center gap-4 justify-center sm:justify-start">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-sm text-zinc-500 hover:border-zinc-400 hover:text-zinc-900 transition-colors"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section id="advisory" className="w-full py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tight">Advisory</h2>
          <p className="mt-4 max-w-2xl text-zinc-600 leading-relaxed">
            {/* TODO: Replace with real advisory description */}
            Evenrock Capital advises early-stage companies on go-to-market strategy,
            product development, and growth. We partner with founders who are
            building products people love.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tight">Ventures</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {ventures.map((v) => (
              <div
                key={v.name}
                className="rounded-xl border border-zinc-200 p-6 hover:border-zinc-300 transition-colors"
              >
                <h3 className="text-lg font-semibold">{v.name}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing / Substack */}
      <section id="writing" className="w-full py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tight">Writing</h2>
          <p className="mt-4 text-zinc-600">
            Thoughts on building, investing, and the future.
          </p>
          {/* TODO: Embed Substack feed here */}
          <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-8 text-center text-zinc-400 text-sm">
            Substack posts will be embedded here
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
          <form className="mt-8 max-w-lg flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400 transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-zinc-400 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-fit rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-100 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Evenrock Capital. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
