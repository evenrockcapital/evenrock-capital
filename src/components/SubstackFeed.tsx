import Link from "next/link";
import { getSubstackPosts, SUBSTACK_SUBDOMAIN } from "@/lib/substack";

export default async function SubstackFeed() {
  const posts = await getSubstackPosts(5);

  if (posts.length === 0) {
    return (
      <div className="mt-12 border border-white/10 rounded-2xl bg-white/5 p-12 sm:p-16 text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-[#f4eed5]/50 text-lg font-light italic">
          First post coming soon.
        </p>
        <a
          href={`https://${SUBSTACK_SUBDOMAIN}.substack.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[12px] tracking-[0.15em] uppercase text-[#d4a843] hover:text-[#d4a843]/80 transition-colors"
        >
          Subscribe on Substack &rarr;
        </a>
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col gap-6">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className="group block border-l-2 border-[#d4a843]/20 pl-6 py-2 hover:border-[#d4a843] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(212,168,67,0.06)] transition-all duration-300"
        >
          <p className="text-[12px] tracking-wide text-white/50 mb-1">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="font-[family-name:var(--font-eb-garamond)] text-xl font-normal italic tracking-tight text-[#f4eed5] group-hover:text-[#d4a843] transition-colors duration-300">
            {post.title}
          </h3>
          <p className="font-[family-name:var(--font-cormorant)] mt-2 text-base leading-relaxed text-[#f4eed5]/60 font-light italic">
            {post.excerpt}
          </p>
        </Link>
      ))}
    </div>
  );
}
