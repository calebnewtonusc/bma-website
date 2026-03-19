"use client"
import { motion } from "framer-motion"

const quotes = [
  {
    quote: "BMA helped us transform the way we approach go-to-market. Their structured playbook gave us immediate clarity on roles, metrics, and campaign sequencing. Within weeks, we had a deal sourcing engine running smoothly.",
    name: "Mike",
    co: "Tide Rock",
  },
  {
    quote: "Working with BMA was a turning point for our growth team. They didn't just offer strategy — they delivered a complete operational system. From automating lead intake to activating high-volume outbound using Clay, every piece was thoughtfully implemented.",
    name: "Jack",
    co: "Maple AI",
  },
  {
    quote: "With their structured playbook and Clay-powered infrastructure, we scaled outreach without sacrificing precision. The results were undeniable: a 300% increase in overall revenue within just a few months.",
    name: "Joe",
    co: "Healthcare Consultant",
  },
  {
    quote: "Their team built a fully automated system for sourcing, filtering, and syncing candidates into our CRM — completely eliminating manual bottlenecks. We operate at a scale we couldn't have reached without them.",
    name: "Ron",
    co: "Alpha School",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-off-white section-divider">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Client Results</p>
        <h2 className="text-display font-bold text-navy tracking-[-0.025em] mb-16">
          What our clients say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name + q.co}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white p-10"
            >
              <blockquote className="text-[1.05rem] text-ink leading-[1.75] mb-8">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[11px] font-bold">{q.name[0]}</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-ink">{q.name}</p>
                  <p className="text-[13px] text-muted">{q.co}</p>
                </div>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
