import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-elevated": "var(--paper-elevated)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        muted: "var(--ink-soft)",
        gold: "var(--gold)",
        "gold-bright": "var(--gold-bright)",
        "gold-dim": "var(--gold-dim)",
        sage: "var(--sage)",
        navy: "var(--navy)",
        "on-accent": "var(--on-accent)",
        "card-well": "var(--card-well)",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "ui-sans-serif",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "ui-serif",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      letterSpacing: {
        "display-tight": "-0.035em",
      },
      backgroundImage: {
        "grid-sage": "var(--grid-sage, none)",
        goldshine:
          "linear-gradient(120deg, rgba(201,162,55,0.2) 0%, transparent 45%, rgba(107,143,120,0.15) 100%)",
        hero:
          "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(201, 162, 55, 0.1), transparent 55%), radial-gradient(ellipse 80% 50% at 0% 50%, rgba(107, 143, 120, 0.1), transparent 50%)",
        "glow-blob":
          "radial-gradient(circle, rgba(255, 214, 120, 0.35) 0%, transparent 68%)",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, -3%, 0) scale(1.03)" },
        },
        "float-w": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-2%, 2%, 0)" },
        },
        "pulse-ring": { "0%, 100%": { opacity: "0.35" }, "50%": { opacity: "0.6" } },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "float-slow": "float-y 12s ease-in-out infinite",
        "float-wide": "float-w 14s ease-in-out infinite reverse",
        "pulse-ring": "pulse-ring 3s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(0, 0, 0, 0.04), 0 20px 50px -18px var(--shadow-soft)",
        gold: "0 8px 36px -8px var(--gold-glow)",
        lift: "0 10px 40px -12px rgba(32, 42, 58, 0.1)",
        "glass-in": "inset 0 1px 0 rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [],
} satisfies Config;
