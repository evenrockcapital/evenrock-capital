import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSubstackPost,
  getAllSubstackSlugs,
} from "@/lib/substack";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSubstackSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSubstackPost(slug);
  if (!post) return { title: "Post not found — Evenrock Capital" };

  return {
    title: `${post.title} — Evenrock Capital`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function WritingPost({ params }: Props) {
  const { slug } = await params;
  const post = await getSubstackPost(slug);
  if (!post) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-[#0a2e17] text-[#f4eed5]">
      <article className="w-full pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-3xl mx-auto px-8">
          {/* Back link */}
          <Link
            href="/#writing"
            className="inline-block text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors mb-12"
          >
            &larr; Back to writing
          </Link>

          {/* Header */}
          <p className="text-[12px] tracking-wide text-white/50 mb-4">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-[family-name:var(--font-eb-garamond)] text-4xl sm:text-5xl font-normal italic tracking-tight leading-[1.15] text-[#f4eed5]">
            {post.title}
          </h1>
          <div className="mt-4 h-[2px] w-[60px] bg-[#d4a843]" />

          {/* Article content */}
          <div
            className="mt-12 prose-substack"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <Link
              href="/#writing"
              className="text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors"
            >
              &larr; All posts
            </Link>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.15em] uppercase text-white/40 hover:text-white/60 transition-colors"
            >
              View on Substack &rarr;
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
