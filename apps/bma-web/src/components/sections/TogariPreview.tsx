"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function TogariPreview() {
  return (
    <section className="py-24 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 border border-white/[0.08] p-10 lg:p-16">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-accent-blue/5 blur-[80px] rounded-full" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Badge variant="blue">Platform</Badge>
                <Badge variant="green">Healthcare-Specific</Badge>
              </div>
              <h2 className="text-display-md font-bold text-white mb-5">
                Togari Health Intelligence Platform
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                The only market intelligence platform purpose-built for healthcare
                go-to-market. Togari maps 1.2M+ providers, 8,000+ health systems, and
                the full payor landscape into actionable account intelligence.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Provider network relationship mapping",
                  "Clinical champion identification",
                  "Formulary and procurement intelligence",
                  "Regulatory filing signal monitoring",
                  "Health system consolidation tracking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-accent-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link
                  href="/togari"
                  className="px-6 py-3 bg-accent-blue hover:bg-accent-blue-light text-white font-semibold rounded-lg transition-all text-sm"
                >
                  Explore Togari
                </Link>
                <Link
                  href="/contact?type=togari"
                  className="px-6 py-3 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-lg border border-white/[0.1] transition-all text-sm"
                >
                  Request Demo
                </Link>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Diagram mockup */}
              <div className="rounded-xl border border-white/[0.1] bg-navy-950/80 p-6 space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold text-sm">Network Intelligence Map</span>
                  <span className="text-xs text-emerald-400 font-medium">Live</span>
                </div>
                {/* Mock health system nodes */}
                <div className="relative h-48 rounded-lg bg-navy-900/50 border border-white/[0.05] overflow-hidden">
                  {/* Central hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent-blue/20 border-2 border-accent-blue/40 flex items-center justify-center">
                    <span className="text-blue-300 text-xs font-bold text-center leading-tight">Health System A</span>
                  </div>
                  {/* Satellite nodes */}
                  {[
                    { x: "15%", y: "20%", label: "Clinic Network", color: "cyan" },
                    { x: "70%", y: "15%", label: "Surgical Group", color: "purple" },
                    { x: "78%", y: "65%", label: "Payor A", color: "blue" },
                    { x: "10%", y: "70%", label: "AMC", color: "cyan" },
                    { x: "45%", y: "85%", label: "IPA Network", color: "blue" },
                  ].map((node) => (
                    <div
                      key={node.label}
                      className="absolute w-12 h-12 rounded-full border flex items-center justify-center"
                      style={{
                        left: node.x,
                        top: node.y,
                        backgroundColor: node.color === "cyan" ? "rgba(6,182,212,0.15)" : node.color === "purple" ? "rgba(168,85,247,0.15)" : "rgba(37,99,235,0.15)",
                        borderColor: node.color === "cyan" ? "rgba(6,182,212,0.3)" : node.color === "purple" ? "rgba(168,85,247,0.3)" : "rgba(37,99,235,0.3)",
                      }}
                    >
                      <span className="text-[8px] text-slate-300 text-center leading-tight px-1">{node.label}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Networks", value: "1,247" },
                    { label: "Providers", value: "42,891" },
                    { label: "Relationships", value: "186K" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center py-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-slate-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
