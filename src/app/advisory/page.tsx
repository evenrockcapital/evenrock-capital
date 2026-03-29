import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advisory — Evenrock Capital",
  description:
    "Helping peers think clearly about financial planning and their futures.",
};

export default function AdvisoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a2e17] text-[#f4eed5]">
      <section className="w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-6xl mx-auto px-8">
          <p className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-4">
            Advisory
          </p>
          <h1 className="font-[family-name:var(--font-eb-garamond)] text-4xl sm:text-5xl font-normal italic tracking-tight text-[#f4eed5] max-w-2xl">
            Helping people I know think clearly about money.
          </h1>
          <div className="mt-12 max-w-2xl space-y-6">
            <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[#f4eed5]/55 font-light italic">
              Most people my age don&apos;t have anyone to talk to about
              financial planning. Not a sales pitch, not a product — just
              someone who&apos;s done the work to understand how it actually
              works.
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-[#f4eed5]/55 font-light italic">
              I have a strong background in financial planning from my work
              experience. I&apos;m not a licensed representative and I
              don&apos;t hold SEC credentials — but I use what I&apos;ve
              learned to help my peers navigate their finances and think
              seriously about their futures.
            </p>
          </div>

          <div className="mt-16 border-t border-white/10 pt-16">
            <h2 className="font-[family-name:var(--font-eb-garamond)] text-2xl font-normal italic tracking-tight text-[#f4eed5]">
              What I help with
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-3">
                  Financial Planning
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-[#f4eed5]/50 font-light italic">
                  Understanding where you stand today, where you want to be,
                  and how to build a plan that actually gets you there.
                </p>
              </div>
              <div>
                <h3 className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-3">
                  Thinking Long-Term
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-[#f4eed5]/50 font-light italic">
                  Retirement, wealth building, and making decisions today that
                  your future self will thank you for.
                </p>
              </div>
              <div>
                <h3 className="text-[12px] tracking-[0.2em] uppercase text-[#d4a843]/60 mb-3">
                  Getting Organized
                </h3>
                <p className="font-[family-name:var(--font-cormorant)] text-base leading-relaxed text-[#f4eed5]/50 font-light italic">
                  Cutting through the noise, understanding what matters, and
                  building real clarity around your financial picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-28 sm:py-36 bg-[#0f3d22]">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="font-[family-name:var(--font-eb-garamond)] text-3xl sm:text-4xl font-normal italic tracking-tight text-[#f4eed5]">
            Get in touch
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] mt-6 text-lg text-[#f4eed5]/50 font-light italic max-w-2xl">
            Want to talk about your financial future? Reach out.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
