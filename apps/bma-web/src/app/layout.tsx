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
  title: { default: "Blue Modern Advisory | GTM Strategy & Engineering", template: "%s | Blue Modern Advisory" },
  description: "Blue Modern Advisory is a GTM Strategy & Engineering firm that builds autonomous prospecting engines for enterprise and growth companies. Led by operators from Clay and McKinsey.",
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body className="bg-white text-ink antialiased font-sans">
        <Nav />
        <main className="pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
