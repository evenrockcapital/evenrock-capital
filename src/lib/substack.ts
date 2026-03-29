import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from "sanitize-html";

export const SUBSTACK_SUBDOMAIN = "alexevenson";

export interface SubstackPost {
  title: string;
  slug: string;
  link: string;
  date: string;
  excerpt: string;
  content: string;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function slugify(url: string): string {
  // Extract the slug from the Substack URL: https://x.substack.com/p/my-post-title
  const match = url.match(/\/p\/([^/?#]+)/);
  if (match) return match[1];
  // Fallback: slugify the URL path
  return url
    .replace(/https?:\/\/[^/]+\//, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .toLowerCase();
}

async function fetchPosts(limit = 20): Promise<SubstackPost[]> {
  try {
    const res = await fetch(
      `https://${SUBSTACK_SUBDOMAIN}.substack.com/feed`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      processEntities: true,
    });
    const feed = parser.parse(xml);
    const items = feed?.rss?.channel?.item;
    if (!items) return [];
    const posts = Array.isArray(items) ? items : [items];
    return posts.slice(0, limit).map((item: Record<string, string>) => ({
      title: item.title ?? "",
      slug: slugify(item.link ?? ""),
      link: item.link ?? "",
      date: item.pubDate ?? "",
      excerpt: stripHtml(item.description ?? "").slice(0, 200) + "...",
      content: sanitizeHtml(item["content:encoded"] ?? item.description ?? "", {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "figure", "figcaption"]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ["src", "alt", "width", "height", "loading"],
        },
      }),
    }));
  } catch {
    return [];
  }
}

export async function getSubstackPosts(limit = 5): Promise<SubstackPost[]> {
  return fetchPosts(limit);
}

export async function getSubstackPost(
  slug: string
): Promise<SubstackPost | null> {
  const posts = await fetchPosts(20);
  return posts.find((p) => p.slug === slug) ?? null;
}

export async function getAllSubstackSlugs(): Promise<string[]> {
  const posts = await fetchPosts(20);
  return posts.map((p) => p.slug);
}
