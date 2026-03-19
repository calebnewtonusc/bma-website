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
        className="relative"
      >
        <svg width="420" height="360" viewBox="0 0 420 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection lines */}
          <motion.path
            d="M100 100 L210 180"
            stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <motion.path
            d="M320 100 L210 180"
            stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <motion.path
            d="M210 180 L100 265"
            stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <motion.path
            d="M210 180 L320 265"
            stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "loop", ease: "linear" }}
          />
          <motion.path
            d="M100 100 L320 100"
            stroke="#E5E7EB" strokeWidth="1" opacity="0.6"
          />
          <motion.path
            d="M100 265 L320 265"
            stroke="#E5E7EB" strokeWidth="1" opacity="0.6"
          />

          {/* Top left node - ICP Data */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <rect x="40" y="72" width="120" height="56" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5"/>
            <rect x="40" y="72" width="120" height="56" rx="10" fill="#EFF6FF" opacity="0.6"/>
            <circle cx="64" cy="100" r="8" fill="#DBEAFE"/>
            <circle cx="64" cy="100" r="4" fill="#1D4ED8"/>
            <text x="80" y="96" fill="#0A1628" fontSize="10" fontWeight="600" fontFamily="system-ui">ICP Data</text>
            <text x="80" y="110" fill="#6B7280" fontSize="9" fontFamily="system-ui">Firmographic</text>
          </motion.g>

          {/* Top right node - Signal Detection */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <rect x="260" y="72" width="120" height="56" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5"/>
            <rect x="260" y="72" width="120" height="56" rx="10" fill="#EFF6FF" opacity="0.6"/>
            <circle cx="284" cy="100" r="8" fill="#DBEAFE"/>
            <circle cx="284" cy="100" r="4" fill="#2563eb"/>
            <text x="300" y="96" fill="#0A1628" fontSize="10" fontWeight="600" fontFamily="system-ui">Signals</text>
            <text x="300" y="110" fill="#6B7280" fontSize="9" fontFamily="system-ui">Intent + Hiring</text>
          </motion.g>

          {/* Center node - BMA Engine */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <rect x="140" y="148" width="140" height="64" rx="12" fill="#1D4ED8"/>
            <rect x="140" y="148" width="140" height="64" rx="12" fill="url(#blueGrad)" opacity="0.9"/>
            <text x="210" y="175" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui" textAnchor="middle">BMA Engine</text>
            <text x="210" y="191" fill="#BFDBFE" fontSize="9" fontFamily="system-ui" textAnchor="middle">Clay Infrastructure</text>
            <motion.circle
              cx="210" cy="182" r="24"
              stroke="rgba(255,255,255,0.15)" strokeWidth="1"
              fill="none"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.g>

          {/* Bottom left node - Enrichment */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <rect x="40" y="237" width="120" height="56" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5"/>
            <circle cx="64" cy="265" r="8" fill="#DBEAFE"/>
            <circle cx="64" cy="265" r="4" fill="#1D4ED8"/>
            <text x="80" y="261" fill="#0A1628" fontSize="10" fontWeight="600" fontFamily="system-ui">Enrichment</text>
            <text x="80" y="275" fill="#6B7280" fontSize="9" fontFamily="system-ui">200+ fields</text>
          </motion.g>

          {/* Bottom right node - Outbound */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <rect x="260" y="237" width="120" height="56" rx="10" fill="white" stroke="#E5E7EB" strokeWidth="1.5"/>
            <circle cx="284" cy="265" r="8" fill="#DBEAFE"/>
            <circle cx="284" cy="265" r="4" fill="#1D4ED8"/>
            <text x="300" y="261" fill="#0A1628" fontSize="10" fontWeight="600" fontFamily="system-ui">Outbound</text>
            <text x="300" y="275" fill="#6B7280" fontSize="9" fontFamily="system-ui">Multi-channel</text>
          </motion.g>

          {/* Gradient def */}
          <defs>
            <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1D4ED8"/>
              <stop offset="100%" stopColor="#2563eb"/>
            </linearGradient>
          </defs>
        </svg>
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
      <div className="absolute inset-0 bg-light-grid bg-grid-md opacity-100" />
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
              <div className="flex -space-x-1">
                {["M", "K", "P"].map((l) => (
                  <div key={l} className="w-5 h-5 rounded-full bg-blue-700 border-2 border-white flex items-center justify-center">
                    <span className="text-white text-[8px] font-bold">{l}</span>
                  </div>
                ))}
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
              Go-To-Market with
              <br />
              your product through
            </motion.h1>

            {/* Animated cycling phrase */}
            <div className="h-[72px] md:h-[80px] lg:h-[88px] mb-6 overflow-hidden">
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
                href="/gtm"
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
