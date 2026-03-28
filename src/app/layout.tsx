import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
      </body>
    </html>
  );
}
