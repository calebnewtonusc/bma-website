"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const founders = [
  {
    name: "Sagar Tiwari",
    role: "Founder & Chairman",
    focus: "GTM Architecture",
    bio: "GTM architecture and enrichment strategy. Clay and McKinsey background.",
    initial: "ST",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "Kevin Cong",
    role: "Founding GTM Strategist",
    focus: "Campaign Strategy",
    bio: "Multi-channel campaign design and Clay-powered outbound.",
    initial: "KC",
    gradient: "from-blue-700 to-navy",
  },
  {
    name: "Karthik Devarakonda",
    role: "Founding GTM Engineer",
    focus: "Systems Engineering",
    bio: "AI systems, data infrastructure, and CRM engineering.",
    initial: "KD",
    gradient: "from-navy to-navy",
  },
]

export function FounderStrip() {
  return (
    <section className="py-28 bg-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-6">The Team</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em] mb-5">
              Led by GTM Experts from Clay and McKinsey
            </h2>
            <p className="text-muted text-lead leading-relaxed mb-8 max-w-sm">
              BMA was founded by operators who have personally built and scaled the systems
              we deploy for clients. Every recommendation we make is one we have stress-tested
              in production.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
            >
              Meet the full team
              <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right — stacked founder cards */}
          <div className="space-y-4">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-card-hover transition-all duration-200"
              >
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-xs tracking-wide">{founder.initial}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-bold text-navy text-sm">{founder.name}</span>
                    <span className="text-[10px] text-blue-700 bg-blue-pale border border-blue-mid px-2 py-0.5 rounded-full flex-shrink-0">
                      {founder.focus}
                    </span>
                  </div>
                  <div className="text-muted text-xs mb-1.5">{founder.role}</div>
                  <p className="text-muted text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
