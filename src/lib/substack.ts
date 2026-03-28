import { XMLParser } from "fast-xml-parser";

export interface SubstackPost {
  title: string;
  link: string;
  date: string;
  excerpt: string;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

export async function getSubstackPosts(
  subdomain: string,
  limit = 5
): Promise<SubstackPost[]> {
  try {
    const res = await fetch(`https://${subdomain}.substack.com/feed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    const parser = new XMLParser();
    const feed = parser.parse(xml);
    const items = feed?.rss?.channel?.item;
    if (!items) return [];
    const posts = Array.isArray(items) ? items : [items];
    return posts.slice(0, limit).map((item: Record<string, string>) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      date: item.pubDate ?? "",
      excerpt: stripHtml(item.description ?? "").slice(0, 200) + "...",
    }));
  } catch {
    return [];
  }
}
