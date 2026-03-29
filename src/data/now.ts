export const nowUpdated = "March 2026";

export interface NowItem {
  slug: string;
  title: string;
  text: string;
  content: string;
  status: string;
}

export const nowItems: NowItem[] = [
  {
    slug: "flipflap",
    title: "FlipFlap",
    text: "Building FlipFlap — designing and prototyping split-flap display units at 1/50th the cost of a Vestaboard.",
    status: "Active",
    content: `
      <h2>The idea</h2>
      <p>Split-flap displays are one of the most beautiful ways to show information. The mechanical clacking, the physical movement, the retro aesthetic. But Vestaboard charges $2,000+ for one. That prices out almost everyone.</p>
      <p>FlipFlap is a split-flap display that costs 1/50th of a Vestaboard. Same magic, accessible price point.</p>

      <h2>Where we are</h2>
      <p>Designing and prototyping the first units. Working through the mechanical engineering of reliable flap mechanisms at scale, and the electronics that drive them.</p>

      <h2>Why this matters</h2>
      <p>I believe the best products are the ones nobody thought were possible at that price point. Split-flap displays shouldn't be a luxury item. They should be something anyone can put in their kitchen, office, or storefront.</p>
    `,
  },
  {
    slug: "dugout-sports",
    title: "Dugout Sports",
    text: "Developing Dugout Sports — exploring tools and experiences that connect fans to the sports they love.",
    status: "Active",
    content: `
      <h2>The idea</h2>
      <p>Sports fandom is deeply personal, but the tools available to fans are generic. Dugout Sports is exploring what it looks like to build experiences that match the intensity fans actually feel.</p>

      <h2>Where we are</h2>
      <p>Early exploration. Talking to fans, mapping the landscape, and building initial prototypes of engagement tools.</p>

      <h2>Why this matters</h2>
      <p>The gap between how much fans care and how well they're served is massive. There's real opportunity to build something people love here.</p>
    `,
  },
  {
    slug: "evenrock-capital",
    title: "Evenrock Capital",
    text: "Building Evenrock Capital — helping peers think clearly about financial planning and their futures.",
    status: "Building",
    content: `
      <h2>The idea</h2>
      <p>Most people my age don't have anyone in their corner when it comes to thinking about money. Not a sales pitch, not a product — just someone who's done the work to understand how financial planning actually works and is willing to share what they've learned.</p>

      <h2>Where we are</h2>
      <p>Building the brand and the point of view. I'm not a licensed rep and I don't hold SEC credentials, but I have a strong background in this from my work experience. Evenrock Capital is about using that knowledge to help my peers navigate financial planning and think seriously about their futures.</p>

      <h2>How I think about it</h2>
      <p>The best financial guidance comes from someone who's actually in it with you — not from the sidelines, not from a script. I want to help people I know build real understanding of where they stand and where they're headed.</p>
    `,
  },
  {
    slug: "writing",
    title: "Writing",
    text: "Writing more — starting a Substack on building, investing, and the things worth paying attention to.",
    status: "Active",
    content: `
      <h2>The idea</h2>
      <p>Writing is thinking made visible. I'm building a practice of publishing regularly about what I'm learning as I build companies, advise founders, and try to understand what's actually going on.</p>

      <h2>Where we are</h2>
      <p>Early. The Substack is live, the first posts are up, and the habit is forming. The goal is consistency over perfection.</p>

      <h2>Topics</h2>
      <p>Building products people want. The economics of making premium things accessible. What early-stage founders actually need to hear. And whatever else I can't stop thinking about.</p>
    `,
  },
];

export function getNowItem(slug: string): NowItem | undefined {
  return nowItems.find((item) => item.slug === slug);
}
