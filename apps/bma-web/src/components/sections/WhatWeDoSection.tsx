"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    label: "01",
    title: "GTM Strategy & Engineering",
    body: "We diagnose your data architecture, ICP, and operating model. Then build the complete system: list sourcing, enrichment, sequencing, and CRM infrastructure.",
    href: "/gtm",
    tags: ["ICP Definition", "Clay Workflows", "Enrichment Stack"],
  },
  {
    label: "02",
    title: "AI Agents & Autonomous Prospecting",
    body: "Purpose-built agents that run continuously: account discovery, enrichment, sequence writing, and pipeline monitoring. Real work, zero manual overhead.",
    href: "/agents",
    tags: ["ProspectFinder", "EnrichmentEngine", "SequenceWriter"],
  },
  {
    label: "03",
    title: "Togari Health Intelligence",
    body: "A dedicated platform for healthcare GTM. Map provider networks, identify clinical champions, and navigate payor complexity at scale.",
    href: "/togari",
    tags: ["Provider Mapping", "Health Systems", "HCP Data"],
  },
]

export function WhatWeDoSection() {
  return (
    <section className="py-24 bg-off-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="text-display font-bold text-navy tracking-[-0.025em] mb-16 max-w-prose">
          Revenue infrastructure, engineered end to end.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={s.href}
                className="group block h-full bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-card-hover transition-shadow duration-300"
              >
                <span className="font-mono text-[13px] text-muted mb-6 block">{s.label}</span>
                <h3 className="font-bold text-[1.15rem] text-navy leading-snug tracking-tight mb-4">{s.title}</h3>
                <p className="text-[15px] text-muted leading-relaxed mb-8">{s.body}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {s.tags.map(t => (
                    <span key={t} className="text-[12px] font-medium text-blue-700 bg-blue-pale border border-blue-mid px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
