import type { Metadata } from "next"
import { DM_Sans, DM_Mono } from "next/font/google"
import "./globals.css"
import { Nav }    from "@/components/Nav"
import { Footer } from "@/components/Footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bluemodernadvisory.com"),
  title: { default: "Blue Modern Advisory | GTM Strategy & Engineering", template: "%s | Blue Modern Advisory" },
  description: "BMA builds autonomous prospecting engines for enterprise, PE, and healthcare. GTM Strategy & Engineering led by operators from Clay and McKinsey.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Blue Modern Advisory",
    title: "Blue Modern Advisory | GTM Strategy & Engineering",
    description: "Autonomous prospecting engines for enterprise, PE, and healthcare. Led by operators from Clay and McKinsey.",
    url: "https://bluemodernadvisory.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Modern Advisory | GTM Strategy & Engineering",
    description: "Autonomous prospecting engines for enterprise, PE, and healthcare. Led by operators from Clay and McKinsey.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blue Modern Advisory",
  alternateName: "BMA",
  url: "https://bluemodernadvisory.com",
  email: "team@bluemodernadvisory.com",
  description: "GTM Strategy & Engineering for enterprise and growth companies. Autonomous prospecting engines built by operators from Clay and McKinsey.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-white text-ink antialiased font-sans">
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Nav />
        <main id="main-content" className="pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
