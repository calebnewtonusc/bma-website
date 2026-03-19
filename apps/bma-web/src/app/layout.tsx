import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Blue Modern Advisory | GTM Engineering for Enterprise & Growth",
    template: "%s | Blue Modern Advisory",
  },
  description:
    "Blue Modern Advisory (BMA) delivers precision go-to-market engineering: AI-powered list building, data enrichment, outbound sequencing, and the Togari Health Intelligence Platform.",
  keywords: [
    "GTM engineering",
    "go-to-market strategy",
    "sales intelligence",
    "data enrichment",
    "Togari health",
    "B2B outbound",
    "revenue operations",
  ],
  authors: [{ name: "Blue Modern Advisory" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bluemodernadviosry.com",
    siteName: "Blue Modern Advisory",
    title: "Blue Modern Advisory | GTM Engineering for Enterprise & Growth",
    description:
      "Precision go-to-market engineering powered by AI agents, enriched data, and battle-tested sequencing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blue Modern Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Modern Advisory",
    description: "Precision GTM engineering for enterprise and growth companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-navy-900 text-slate-50 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
