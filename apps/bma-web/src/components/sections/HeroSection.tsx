"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const cyclingPhrases = [
  "Strategy & Engineering",
  "Pipeline Intelligence",
  "Agentic Infrastructure",
];

function AnimatedFlowDiagram() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center gap-0 w-64"
      >
        {/* Top node — ICP + Signals */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full rounded-xl border border-gray-200 bg-white shadow-card px-5 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-navy-900 text-sm font-bold">ICP + Signals</div>
              <div className="text-gray-400 text-xs">Firmographic &amp; intent</div>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="flex flex-col items-center py-1"
        >
          <motion.div
            animate={{ scaleY: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
            className="w-px h-8 bg-gradient-to-b from-blue-200 to-blue-700"
          />
          <svg className="text-blue-700 -mt-0.5" width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
            <path d="M5 6L0 0h10L5 6z" />
          </svg>
        </motion.div>

        {/* Center node — Clay Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full rounded-xl bg-blue-700 px-5 py-4 shadow-cta-blue relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 rounded-xl"
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.3), transparent)" }}
          />
          <div className="flex items-center gap-3 relative">
            <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-white text-sm font-bold">Clay Engine</div>
              <div className="text-blue-200 text-xs">AI-powered enrichment</div>
            </div>
          </div>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex flex-col items-center py-1"
        >
          <motion.div
            animate={{ scaleY: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
            className="w-px h-8 bg-gradient-to-b from-blue-700 to-blue-200"
          />
          <svg className="text-blue-700 -mt-0.5" width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
            <path d="M5 6L0 0h10L5 6z" />
          </svg>
        </motion.div>

        {/* Bottom node — Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-full rounded-xl border border-gray-200 bg-white shadow-card px-5 py-4"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <div className="text-navy-900 text-sm font-bold">Pipeline</div>
              <div className="text-gray-400 text-xs">Live &amp; growing</div>
            </div>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-1 h-8">
            {[30, 50, 42, 65, 55, 80, 72].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.2 + i * 0.08, duration: 0.4, ease: "easeOut" }}
                style={{ height: `${h}%`, transformOrigin: "bottom" }}
                className={`flex-1 rounded-sm ${i === 6 ? "bg-blue-700" : "bg-blue-200"}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % cyclingPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle mesh background */}
      <div className="absolute inset-0 bg-light-grid opacity-100" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 40%, rgba(29,78,216,0.06), transparent), radial-gradient(ellipse 50% 40% at 15% 70%, rgba(29,78,216,0.04), transparent)",
        }}
      />

      <div className="relative z-10 max-w-content mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left — copy */}
          <div>
            {/* Social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100"
            >
              <div className="flex items-center gap-0.5 text-amber-400 text-sm leading-none">
                {"★★★★★"}
              </div>
              <span className="text-blue-700 text-xs font-semibold">
                Recommended by 150+ MBB Consultants &amp; M7 MBAs
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] font-extrabold text-navy-900 leading-[1.05] tracking-[-0.03em] mb-4"
            >
              Go-To-Market with your product,
              <br />
              service, or capital through
            </motion.h1>

            {/* Animated cycling phrase */}
            <div className="overflow-hidden pb-2 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] font-extrabold leading-[1.05] tracking-[-0.03em] gradient-text-blue block">
                    {cyclingPhrases[phraseIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl"
            >
              We build autonomous prospecting engines that streamline list building,
              data enrichment, and sequencing workflows to intelligently scale enterprise
              revenue operations. Led by GTM Experts from Clay and McKinsey &amp; Company.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-cta-blue hover:shadow-lg text-base"
              >
                Book a Free Call
              </Link>
              <Link
                href="/case-studies"
                className="px-7 py-3.5 bg-white hover:bg-gray-50 text-navy-900 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 text-base"
              >
                See Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right — animated flow diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center h-[420px]"
          >
            <AnimatedFlowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
