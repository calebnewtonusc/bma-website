"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const founders = [
  {
    name: "Sagar Tiwari",
    role: "Founder & Chairman",
    focus: "GTM Architecture",
    bio: "Led GTM strategy at Clay and McKinsey. Architect of BMA's core enrichment methodology and the practitioner behind our structured GTM playbook framework.",
    initial: "S",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Kevin Cong",
    role: "Founding GTM Strategist",
    focus: "Campaign Strategy",
    bio: "Specialist in multi-channel outbound strategy and Clay-powered campaign architecture. Drives campaign activation and steady-state experimentation for BMA clients.",
    initial: "K",
    color: "from-blue-700 to-navy-800",
  },
  {
    name: "Karthik Devarakonda",
    role: "Founding GTM Engineer",
    focus: "Systems Engineering",
    bio: "Built the data infrastructure that powers BMA's autonomous prospecting engines. Previously led data engineering teams through 10x growth phases.",
    initial: "K",
    color: "from-navy-700 to-navy-900",
  },
];

export function FounderStrip() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-700" />
              <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">
                The Team
              </span>
            </div>
            <h2 className="font-display text-display-md font-extrabold text-navy-900 tracking-tight mb-5">
              Led by GTM Experts from Clay and McKinsey
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-sm">
              BMA was founded by operators who have personally built and scaled the systems
              we deploy for clients. Every recommendation we make is one we have stress-tested
              in production.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 text-sm font-semibold transition-colors"
            >
              Meet the full team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right — team cards */}
          <div className="space-y-4">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-gray-200 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                {/* Avatar */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${founder.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-base">{founder.initial}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-display font-bold text-navy-900 text-sm">{founder.name}</span>
                    <span className="text-[10px] text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full flex-shrink-0">
                      {founder.focus}
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs mb-1.5">{founder.role}</div>
                  <p className="text-gray-500 text-sm leading-relaxed">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
