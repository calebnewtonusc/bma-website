"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const founders = [
  {
    name: "Sagar",
    role: "Co-Founder",
    bio: "Former enterprise sales leader with experience scaling GTM for Series B through pre-IPO companies. Architect of BMA's core enrichment methodology.",
    focus: "GTM Architecture",
  },
  {
    name: "Kevin",
    role: "Co-Founder",
    bio: "Data infrastructure expert who built the systems powering BMA's enrichment pipeline. Previously led data engineering at fintech scale-ups.",
    focus: "Data Engineering",
  },
  {
    name: "Karthik",
    role: "Co-Founder",
    bio: "Healthcare market specialist and co-creator of the Togari platform. Deep relationships across provider networks, health systems, and medtech distribution.",
    focus: "Healthcare Markets",
  },
];

export function FounderStrip() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-accent-blue-light uppercase tracking-widest mb-4">
              The Team
            </div>
            <h2 className="text-display-md font-bold text-white mb-5">
              Operators who&apos;ve done the work
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              BMA was founded by practitioners, not theorists. Every founder has
              personally built and operated the systems we deploy for clients.
              We know what works at scale because we&apos;ve done it.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent-blue-light hover:text-white text-sm font-semibold transition-colors"
            >
              Meet the full team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="space-y-4">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-5 rounded-xl bg-surface-card card-border"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue/30 to-navy-700 flex items-center justify-center flex-shrink-0 border border-accent-blue/20">
                  <span className="text-white font-bold text-lg">{founder.name[0]}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-semibold text-sm">{founder.name}</span>
                    <span className="text-slate-500 text-xs">{founder.role}</span>
                    <span className="ml-auto text-xs text-accent-blue-light bg-accent-blue/10 px-2 py-0.5 rounded-full">
                      {founder.focus}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
