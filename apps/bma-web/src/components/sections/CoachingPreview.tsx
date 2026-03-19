"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const tracks = [
  {
    title: "Founder GTM Track",
    duration: "8 weeks",
    description: "For B2B founders who need to build repeatable outbound before their first sales hire. We define your ICP, write your first sequences, and help you get to 20 qualified conversations.",
    level: "Seed to Series A",
  },
  {
    title: "Sales Leader Intensive",
    duration: "4 weeks",
    description: "For VPs of Sales and revenue leaders inheriting or rebuilding GTM. Audit, diagnose, and rebuild your outbound engine with hands-on support from BMA practitioners.",
    level: "Series B+",
  },
  {
    title: "RevOps Practitioner",
    duration: "6 weeks",
    description: "Technical GTM training for RevOps teams. Data enrichment workflows, CRM architecture for outbound, and AI tool integration for scale-stage companies.",
    level: "All stages",
  },
]

export function CoachingPreview() {
  return (
    <section className="py-24 bg-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Coaching & Education</p>
          <h2 className="text-display font-bold text-navy tracking-[-0.025em] mb-4">
            Build the capability, not just the campaign
          </h2>
          <p className="text-lead text-muted max-w-2xl mx-auto">
            We don&apos;t just do the work for you. We build your team&apos;s GTM muscle with
            structured programs that transfer real institutional knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-xl bg-white border border-gray-200 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{track.level}</span>
                <span className="text-xs text-muted font-medium bg-off-white border border-gray-200 px-2.5 py-0.5 rounded-full">{track.duration}</span>
              </div>
              <h3 className="text-navy font-semibold text-base mb-3">{track.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{track.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/coaching"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy hover:bg-ink text-white font-semibold rounded-xl transition-colors text-[15px]"
          >
            View all programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
