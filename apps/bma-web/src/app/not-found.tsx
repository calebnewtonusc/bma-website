import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="pt-48 pb-32 bg-white text-center">
      <div className="max-w-xl mx-auto px-6">
        <p className="font-mono text-sm text-blue-600 tracking-widest uppercase mb-4">404</p>
        <h1 className="text-display font-bold text-navy tracking-[-0.025em] mb-4">
          Page not found
        </h1>
        <p className="text-muted text-lead leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-[15px]"
        >
          Back to home
        </Link>
      </div>
    </section>
  )
}
