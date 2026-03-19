import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:       "#0D1B2E",
        ink:        "#1F2937",
        muted:      "#6B7280",
        "off-white":"#F9FAFB",
        "blue-pale":"#EFF6FF",
        "blue-mid": "#DBEAFE",
      },
      fontFamily: {
        sans:  ["var(--font-dm)", "system-ui", "sans-serif"],
        mono:  ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero":    ["5.5rem",  { lineHeight: "1.05", letterSpacing: "-0.035em" }],
        "display": ["3.75rem", { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "title":   ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.02em"  }],
        "lead":    ["1.2rem",  { lineHeight: "1.65", letterSpacing: "-0.01em"  }],
      },
      boxShadow: {
        "card-hover": "0 4px 24px rgba(0,0,0,0.08)",
        "nav":        "0 1px 0 rgba(0,0,0,0.06)",
        "cta":        "0 8px 32px rgba(37,99,235,0.3)",
      },
      maxWidth: {
        "prose": "68ch",
      },
    },
  },
  plugins: [],
}

export default config
