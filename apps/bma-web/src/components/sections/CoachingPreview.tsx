"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
];

export function CoachingPreview() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionLabel className="justify-center">Coaching & Education</SectionLabel>
          <h2 className="text-display-md font-bold text-white mb-4">
            Build the capability, not just the campaign
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
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
              className="p-7 rounded-xl bg-surface-card card-border"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-accent-blue-light uppercase tracking-wider">{track.level}</span>
                <span className="text-xs text-slate-500 font-medium bg-white/[0.05] px-2.5 py-0.5 rounded-full">{track.duration}</span>
              </div>
              <h3 className="text-white font-semibold text-base mb-3">{track.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{track.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/coaching"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-lg border border-white/[0.1] transition-all text-sm"
          >
            View all programs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
