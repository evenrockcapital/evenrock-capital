import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { nowItems, getNowItem, nowUpdated } from "@/data/now";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return nowItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNowItem(slug);
  if (!item) return { title: "Not found — Evenrock Capital" };

  return {
    title: `${item.title} — Evenrock Capital`,
    description: item.text,
  };
}

export default async function NowProjectPage({ params }: Props) {
  const { slug } = await params;
  const item = getNowItem(slug);
  if (!item) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-[#0a2e17] text-[#f4eed5]">
      <article className="w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl mx-auto px-8">
          {/* Back link */}
          <Link
            href="/#now"
            className="inline-block text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors mb-12"
          >
            &larr; Back to now
          </Link>

          {/* Header */}
          <div className="flex items-baseline gap-4 mb-4">
            <p className="text-[12px] tracking-wide text-white/50">
              Updated {nowUpdated}
            </p>
            <span className="text-[11px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border border-[#d4a843]/20 text-[#d4a843]/60">
              {item.status}
            </span>
          </div>
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
              href="/#now"
              className="text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors"
            >
              &larr; What I&apos;m working on
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
