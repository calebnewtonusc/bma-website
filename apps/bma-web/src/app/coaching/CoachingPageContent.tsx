"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

const programs = [
  {
    name: "Founder GTM Track",
    tagline: "Zero to 20 qualified meetings",
    duration: "8 weeks",
    level: "Seed to Series A",
    format: "Weekly 1:1 + async",
    price: "Custom",
    description:
      "Designed for technical founders who built something great but need a repeatable outbound engine before their first sales hire. By the end, you have a working ICP, a tested sequence library, and 20 qualified conversations on the calendar.",
    modules: [
      "ICP definition and negative persona workshop",
      "Value proposition mapping by persona",
      "List building from scratch using BMA's tool stack",
      "First 3 sequences: written, tested, live",
      "Reply handling and objection preparation",
      "Metrics framework and what to optimize first",
      "Hiring brief for your first SDR/AE",
    ],
    badge: "blue" as const,
    highlighted: true,
  },
  {
    name: "Sales Leader Intensive",
    tagline: "Rebuild and re-accelerate",
    duration: "4 weeks",
    level: "Series B+",
    format: "Daily check-ins",
    price: "Custom",
    description:
      "For VPs of Sales and CROs who've inherited or are rebuilding a GTM motion. Rapid audit, root cause analysis, and a full rebuild plan delivered alongside your team in real-time.",
    modules: [
      "Full GTM stack audit (data, tools, sequences, metrics)",
      "Pipeline health analysis and root cause diagnosis",
      "ICP sharpening and territory re-mapping",
      "Sequence library rewrite by segment",
      "SDR/AE workflow redesign",
      "CRM hygiene and data model review",
      "90-day acceleration roadmap",
    ],
    badge: "default" as const,
    highlighted: false,
  },
  {
    name: "RevOps Practitioner",
    tagline: "Technical GTM at scale",
    duration: "6 weeks",
    level: "All stages",
    format: "Workshop-based",
    price: "Custom",
    description:
      "Hands-on technical training for RevOps professionals. Master enrichment workflows, CRM architecture, AI tool integration, and the measurement frameworks that mature revenue teams rely on.",
    modules: [
      "Enrichment tool selection and workflow design",
      "CRM data model for outbound at scale",
      "Clay, Apollo, and AI tool integration",
      "Intent data platform evaluation framework",
      "Attribution modeling for outbound",
      "Reporting dashboards for sales leadership",
      "AI agent evaluation and deployment",
    ],
    badge: "purple" as const,
    highlighted: false,
  },
];

const testimonials = [
  {
    quote: "The Founder GTM Track compressed what would have been 6 months of trial and error into 8 weeks. We closed our first enterprise contract 3 weeks after completing the program.",
    author: "CEO",
    company: "Series A B2B SaaS",
  },
  {
    quote: "BMA ran a full GTM audit in week one and identified three things we'd been doing wrong for 18 months. The Sales Leader Intensive paid for itself in the first month.",
    author: "VP Sales",
    company: "Series C Fintech",
  },
  {
    quote: "The RevOps training gave our team the technical depth we'd been missing. We rebuilt our entire enrichment stack and data model in 30 days.",
    author: "Head of RevOps",
    company: "Growth-stage Healthcare Tech",
  },
];

export function CoachingPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent-blue/5 blur-[80px] rounded-full" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionLabel className="justify-center">Coaching & Education</SectionLabel>
            <h1 className="text-display-xl font-bold text-white mb-6">
              We build GTM capability,
              <br />
              <span className="gradient-text">not just campaigns.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Structured programs that transfer real institutional knowledge from
              BMA practitioners to your team. Not slides. Not theory. The actual playbooks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  program.highlighted
                    ? "bg-accent-blue/5 border-accent-blue/25"
                    : "bg-surface-card border-white/[0.08]"
                }`}
              >
                {program.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent-blue rounded-full text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <Badge variant={program.badge} className="mb-4">{program.level}</Badge>
                <h3 className="text-white font-bold text-xl mb-1">{program.name}</h3>
                <p className="text-accent-blue-light text-sm font-medium mb-2">{program.tagline}</p>

                <div className="flex gap-4 mb-5 text-sm text-slate-400">
                  <span>{program.duration}</span>
                  <span>·</span>
                  <span>{program.format}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{program.description}</p>

                <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Curriculum</h4>
                <ul className="space-y-2 mb-8">
                  {program.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/contact?program=${encodeURIComponent(program.name)}`}
                  className={`block text-center w-full px-6 py-3 font-semibold rounded-lg transition-all text-sm ${
                    program.highlighted
                      ? "bg-accent-blue hover:bg-accent-blue-light text-white"
                      : "bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.1]"
                  }`}
                >
                  Apply for {program.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-display-md font-bold text-white">What alumni say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-xl bg-surface-card card-border"
              >
                <svg className="w-8 h-8 text-accent-blue/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-300 text-sm leading-relaxed mb-5 italic">{t.quote}</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-slate-500 text-xs">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
