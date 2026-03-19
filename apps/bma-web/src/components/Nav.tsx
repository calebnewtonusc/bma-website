"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "GTM Strategy", href: "/gtm" },
  { label: "Togari", href: "/togari" },
  { label: "Agents", href: "/agents" },
  { label: "Coaching", href: "/coaching" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo wordmark */}
          <Link href="/" className="flex items-center gap-0 group">
            <span className="font-display font-bold text-[15px] tracking-tight text-navy-900 leading-none">
              Blue Modern
            </span>
            <span className="font-display font-medium text-[15px] tracking-tight text-blue-700 leading-none ml-1">
              Advisory
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-cta-blue"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-navy-900 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-gray-600 hover:text-navy-900 hover:bg-gray-50 rounded-lg text-sm font-medium transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold transition-all"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
