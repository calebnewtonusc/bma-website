import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060d1a",
          900: "#0A1628",
          800: "#0f1e36",
          700: "#1a2d4a",
          600: "#243d60",
          500: "#2f4e78",
          400: "#3a5f90",
        },
        // Keep legacy tokens for pages not yet migrated
        accent: {
          blue: "#2563eb",
          "blue-light": "#3b82f6",
          "blue-pale": "#dbeafe",
          cyan: "#06b6d4",
          "cyan-light": "#22d3ee",
        },
        surface: {
          dark: "#0d1117",
          card: "#161b27",
          border: "rgba(255,255,255,0.08)",
          "border-light": "rgba(255,255,255,0.12)",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["monospace"],
      },
      fontSize: {
        "display-2xl": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl": ["4rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "display-sm": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-grid": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "light-grid": "linear-gradient(rgba(29,78,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.04) 1px, transparent 1px)",
        "glow-blue": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,99,235,0.15), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.08)",
        "card-dark": "0 1px 3px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
        "cta-blue": "0 8px 32px rgba(29,78,216,0.25)",
        "glow-blue": "0 0 40px rgba(37,99,235,0.3)",
        "glow-sm": "0 0 20px rgba(37,99,235,0.2)",
      },
      maxWidth: {
        "content": "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
