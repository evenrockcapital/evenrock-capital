import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advisory — Evenrock Capital",
  description:
    "Hands-on advisory for early-stage founders on go-to-market, product, and growth.",
};

export default function AdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-stone-900 font-sans">
      <section className="w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60 mb-4">
            Advisory
          </p>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-stone-900 max-w-2xl">
            I advise founders who are building things people actually want.
          </h1>
          <div className="mt-12 max-w-2xl space-y-6">
            <p className="text-lg leading-relaxed text-stone-500 font-light">
              Most advisors give you frameworks. I give you the thing I wish
              someone had told me when I was stuck on the exact same problem
              last month.
            </p>
            <p className="text-lg leading-relaxed text-stone-500 font-light">
              I work hands-on with early-stage founders on go-to-market
              strategy, product development, and growth. My approach is
              simple: I&apos;m building companies right now too, so the
              advice comes from the trenches, not from the sidelines.
            </p>
          </div>

          <div className="mt-16 border-t border-stone-200 pt-16">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">
              How I work
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60 mb-3">
                  Go-to-market
                </h3>
                <p className="text-base leading-relaxed text-stone-500 font-light">
                  Finding your first customers, positioning, pricing, and
                  the unglamorous work of getting people to care.
                </p>
              </div>
              <div>
                <h3 className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60 mb-3">
                  Product
                </h3>
                <p className="text-base leading-relaxed text-stone-500 font-light">
                  What to build, what to cut, and how to make something
                  people genuinely love using.
                </p>
              </div>
              <div>
                <h3 className="text-[13px] tracking-[0.15em] uppercase text-amber-800/60 mb-3">
                  Growth
                </h3>
                <p className="text-base leading-relaxed text-stone-500 font-light">
                  Scaling what works, killing what doesn&apos;t, and
                  staying focused when everything feels urgent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-28 sm:py-36 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-900">
            Get in touch
          </h2>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl">
            Tell me what you&apos;re building and where you&apos;re stuck.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
