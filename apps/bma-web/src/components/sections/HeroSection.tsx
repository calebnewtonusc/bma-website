"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const NetworkGraph = dynamic(
  () => import("../three/NetworkGraph").then((m) => ({ default: m.NetworkGraph })),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

const stats = [
  { value: "3.2x", label: "Average pipeline lift" },
  { value: "40+", label: "Enterprise clients" },
  { value: "98%", label: "Data accuracy rate" },
  { value: "$2.4B", label: "Pipeline influenced" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-100" />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-navy-700/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-blue/8 blur-[120px] rounded-full" />

      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-60">
        <NetworkGraph />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-accent-blue/10 border border-accent-blue/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
              GTM Engineering for the AI Era
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            Revenue infrastructure
            <br />
            <span className="gradient-text">built to scale.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
          >
            Blue Modern Advisory delivers precision go-to-market engineering: AI-powered
            list building, deep data enrichment, and battle-tested outbound sequencing
            that drives qualified pipeline at enterprise scale.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-accent-blue hover:bg-accent-blue-light text-white font-semibold rounded-lg transition-all duration-200 shadow-glow-sm hover:shadow-glow-blue text-base"
            >
              Start a Conversation
            </Link>
            <Link
              href="/case-studies"
              className="px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold rounded-lg border border-white/[0.1] transition-all duration-200 text-base"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </motion.div>
    </section>
  );
}
