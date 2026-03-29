export interface AboutItem {
  slug: string;
  title: string;
  text: string;
  content: string;
}

export const aboutItems: AboutItem[] = [
  {
    slug: "me",
    title: "About Me",
    text: "Builder, thinker, and someone who cares deeply about making great things accessible to everyone.",
    content: `
      <h2>Who I am</h2>
      <p>I'm Alex Evenson. I build companies, help my peers think about their financial futures, and write about what I'm learning along the way.</p>
      <p>Right now I'm building FlipFlap — a split-flap display that costs 1/50th of a Vestaboard — and Dugout Sports, a platform for the future of college baseball. Through Evenrock Capital, I help my peers navigate financial planning and think seriously about their futures.</p>

      <h2>What drives me</h2>
      <p>I believe the best products are the ones nobody thought were possible at that price point. I'm drawn to the gap between what exists and what should exist — and I like closing it.</p>
      <p>I build in public because the process matters as much as the outcome. I obsess over craft because details are the difference between something people tolerate and something people love.</p>

      <h2>How I think</h2>
      <p>I'm a generalist who goes deep. I care about design, engineering, business, and the places where they overlap. The best work happens when you refuse to stay in your lane.</p>
      <p>I'd rather build one thing people genuinely love than ten things people forget about. And I'd rather help one person think clearly about their future than give a hundred people generic advice.</p>
    `,
  },
  {
    slug: "the-name",
    title: "The Name",
    text: "Why \"Evenrock\" — and what it means to me.",
    content: `
      <h2>Why Evenrock</h2>
      <p>People ask about the name. It's not random. Evenrock comes from my last name — Evenson. It's a way of taking something personal and turning it into something that stands on its own.</p>

      <h2>What it means</h2>
      <p>A rock is steady. Even is balanced. Together, Evenrock is about building things on a foundation that doesn't shift — something solid, grounded, and real.</p>
      <p>That's how I think about everything I do. Whether it's a product, a financial plan, or a piece of writing — it should be built on something that holds up. Not hype, not trends, not whatever's popular this week. Something true.</p>

      <h2>Why it matters to me</h2>
      <p>Your name is the first thing you inherit and the last thing you leave behind. Turning mine into something I'm building with my own hands — that means something. Evenrock is mine. It carries my family forward in a way that feels earned, not given.</p>
    `,
  },
];

export function getAboutItem(slug: string): AboutItem | undefined {
  return aboutItems.find((item) => item.slug === slug);
}
