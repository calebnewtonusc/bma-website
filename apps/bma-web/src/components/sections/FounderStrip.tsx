"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const team = [
  { name: "Sagar Tiwari",        role: "Founder & Chairman",       note: "GTM architecture & enrichment strategy. Clay and McKinsey background." },
  { name: "Kevin Cong",          role: "Founding GTM Strategist",  note: "Multi-channel campaign design and Clay-powered outbound." },
  { name: "Karthik Devarakonda", role: "Founding GTM Engineer",    note: "AI systems, data infrastructure, and CRM engineering." },
]

export function FounderStrip() {
  return (
    <section className="py-24 bg-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">The Team</p>
            <h2 className="text-display font-bold text-navy tracking-[-0.025em]">
              Led by operators from<br />Clay and McKinsey.
            </h2>
          </div>
          <Link href="/about" className="text-[15px] font-semibold text-blue-600 hover:text-blue-700 transition-colors shrink-0">
            Meet the team &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="bg-white p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center mb-6">
                <span className="text-white text-sm font-bold">{m.name[0]}</span>
              </div>
              <p className="font-semibold text-[16px] text-navy mb-0.5">{m.name}</p>
              <p className="text-[13px] text-blue-600 font-medium mb-4">{m.role}</p>
              <p className="text-[15px] text-muted leading-relaxed">{m.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
