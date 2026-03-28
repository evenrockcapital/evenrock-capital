import { getSubstackPosts } from "@/lib/substack";

// TODO: Replace with your actual Substack subdomain
const SUBSTACK_SUBDOMAIN = "alexevenson";

export default async function SubstackFeed() {
  const posts = await getSubstackPosts(SUBSTACK_SUBDOMAIN);

  if (posts.length === 0) {
    return (
      <div className="mt-12 border border-stone-200 rounded-2xl bg-white p-12 sm:p-16 text-center">
        <p className="text-stone-400 text-lg font-light">
          First post coming soon.
        </p>
        <a
          href={`https://${SUBSTACK_SUBDOMAIN}.substack.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[13px] tracking-[0.15em] uppercase text-amber-800 hover:text-amber-900 transition-colors"
        >
          Subscribe on Substack &rarr;
        </a>
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col gap-6">
      {posts.map((post) => (
        <a
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border-l-2 border-amber-700/30 pl-6 py-2 hover:border-amber-700 transition-colors duration-300"
        >
          <p className="text-[13px] tracking-wide text-stone-400 mb-1">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h3 className="text-xl font-light tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-stone-500 font-light">
            {post.excerpt}
          </p>
        </a>
      ))}
    </div>
  );
}
