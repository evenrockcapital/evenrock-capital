import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { aboutItems, getAboutItem } from "@/data/about";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return aboutItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getAboutItem(slug);
  if (!item) return { title: "Not found — Evenrock Capital" };

  return {
    title: `${item.title} — Evenrock Capital`,
    description: item.text,
  };
}

export default async function AboutDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getAboutItem(slug);
  if (!item) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-[#0a2e17] text-[#f4eed5]">
      <article className="w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl mx-auto px-8">
          {/* Back link */}
          <Link
            href="/#about"
            className="inline-block text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors mb-12"
          >
            &larr; Back to about
          </Link>

          {/* Header */}
          <h1 className="font-[family-name:var(--font-eb-garamond)] text-4xl sm:text-5xl font-normal italic tracking-tight leading-[1.15] text-[#f4eed5]">
            {item.title}
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] mt-6 text-lg leading-relaxed text-[#f4eed5]/60 font-light italic max-w-2xl">
            {item.text}
          </p>
          <div className="mt-6 h-[2px] w-[60px] bg-[#d4a843]" />

          {/* Content */}
          <div
            className="mt-12 prose-substack"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/#about"
              className="text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors"
            >
              &larr; A bit more
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
