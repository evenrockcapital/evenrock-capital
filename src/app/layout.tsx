import type { Metadata } from "next";
import { Inter, EB_Garamond, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Evenrock Capital — Alex Evenson",
  description:
    "Founder, builder, and advisor. Building FlipFlap and Dugout Sports. Advising early-stage founders on go-to-market, product, and growth.",
  openGraph: {
    title: "Evenrock Capital — Alex Evenson",
    description:
      "Founder, builder, and advisor. Building FlipFlap and Dugout Sports.",
    url: "https://evenrock.capital",
    siteName: "Evenrock Capital",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evenrock Capital — Alex Evenson",
    description:
      "Founder, builder, and advisor. Building FlipFlap and Dugout Sports.",
    creator: "@evenson_alex",
  },
  metadataBase: new URL("https://evenrock.capital"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ebGaramond.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Sox red top bar */}
        <div className="w-full h-[3px] bg-[#BD3039] shrink-0" />
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
