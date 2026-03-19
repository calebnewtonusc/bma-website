"use client"
import { motion } from "framer-motion"

const steps = [
  {
    n: "01",
    title: "Data Diagnostic",
    body: "We audit your data architecture, AI systems, and operating model. Every engagement starts here — we build nothing until we understand exactly where you are and where you need to go.",
  },
  {
    n: "02",
    title: "System Design & Deployment",
    body: "We design and deploy your AI-powered prospecting infrastructure: CRM ingestion, enrichment workflows, lead routing, deduplication. Clay-native, built to run without you.",
  },
  {
    n: "03",
    title: "Campaign Activation",
    body: "We activate inbound and outbound across every channel using Clay-powered infrastructure. High-volume outreach, precision targeting. Steady-state experimentation until the numbers move.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">How We Work</p>
        <h2 className="text-display font-bold text-navy tracking-[-0.025em] mb-20 max-w-prose">
          Three phases. One working system.
        </h2>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-gray-200"
            >
              <div className="md:col-span-2">
                <span className="font-mono text-[13px] text-muted">{s.n}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-bold text-title text-navy tracking-tight">{s.title}</h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-lead text-muted leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  )
}
