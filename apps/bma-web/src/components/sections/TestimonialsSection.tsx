"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "BMA helped us transform the way we approach go-to-market. Their structured playbook gave us immediate clarity on roles, metrics, and campaign sequencing. Within weeks, we had a deal sourcing engine running smoothly, and our lead generation became more efficient than ever.",
    name: "Mike",
    company: "Tide Rock",
    initial: "M",
  },
  {
    quote:
      "Working with BMA was a turning point for our growth team. They didn't just offer strategy, they delivered a complete operational system. From automating lead intake to activating high-volume outbound using Clay, every piece was thoughtfully implemented.",
    name: "Jack",
    company: "Maple AI",
    initial: "J",
  },
  {
    quote:
      "With their structured playbook and Clay-powered infrastructure, we scaled outreach without sacrificing precision. The results for my clients were undeniable: a 300% increase in overall revenue within just a few months.",
    name: "Joe",
    company: "Healthcare Consultant",
    initial: "J",
    highlight: "300% revenue increase",
  },
  {
    quote:
      "Their team built a fully automated system for sourcing, filtering, and syncing candidates into our CRM, completely eliminating manual bottlenecks.",
    name: "Ron",
    company: "Alpha School",
    initial: "R",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(29,78,216,0.04), transparent)",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">
              Client Results
            </span>
          </div>
          <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight mb-4">
            What our clients say
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Recommended by 150+ MBB Consultants &amp; M7 MBAs
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + t.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              {/* Quote mark */}
              <div className="text-blue-200 mb-5">
                <svg width="28" height="22" viewBox="0 0 28 22" fill="currentColor">
                  <path d="M0 22V13.273C0 5.697 4.424 1.212 13.273 0l1.09 1.636c-2.667.727-4.788 2.06-6.364 4-1.515 1.878-2.272 4.121-2.272 6.728H12V22H0zm16 0V13.273C16 5.697 20.424 1.212 29.273 0l1.09 1.636c-2.667.727-4.788 2.06-6.364 4-1.515 1.878-2.272 4.121-2.272 6.728H28V22H16z" />
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6">
                {t.quote}
              </p>

              {/* Highlight stat if present */}
              {t.highlight && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg mb-5">
                  <svg className="w-3.5 h-3.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-blue-700 text-xs font-semibold">{t.highlight}</span>
                </div>
              )}

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{t.initial}</span>
                </div>
                <div>
                  <div className="text-navy-900 font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
