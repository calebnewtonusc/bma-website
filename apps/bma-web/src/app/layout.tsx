import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Blue Modern Advisory | GTM Strategy & Engineering",
    template: "%s | Blue Modern Advisory",
  },
  description:
    "Blue Modern Advisory is a GTM Strategy & Engineering firm that transforms how companies leverage data and AI to convert ideal prospects and drive revenue growth. Led by GTM experts from Clay and McKinsey.",
  keywords: [
    "GTM engineering",
    "go-to-market strategy",
    "Clay infrastructure",
    "data enrichment",
    "outbound sequencing",
    "revenue operations",
    "AI prospecting",
    "McKinsey",
    "MBB consulting",
  ],
  authors: [{ name: "Blue Modern Advisory" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bluemodernai.com",
    siteName: "Blue Modern Advisory",
    title: "Blue Modern Advisory | GTM Strategy & Engineering",
    description:
      "We build autonomous prospecting engines that streamline list building, data enrichment, and sequencing workflows to intelligently scale enterprise revenue operations.",
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
    description: "GTM Strategy & Engineering for enterprise revenue growth.",
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-white text-navy-900 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
