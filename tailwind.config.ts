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
        sage: "var(--sage)",
        navy: "var(--navy)",
        "on-accent": "var(--on-accent)",
        "card-well": "var(--card-well)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "grid-sage": "var(--grid-sage, none)",
        goldshine:
          "linear-gradient(120deg, rgba(212,175,55,0.2) 0%, transparent 45%, rgba(168,182,160,0.2) 100%)",
        hero: "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(212, 175, 55, 0.12), transparent 55%), radial-gradient(ellipse 80% 50% at 0% 50%, rgba(168, 182, 160, 0.14), transparent 50%)",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(168, 182, 160, 0.35), 0 20px 50px -20px var(--shadow-soft)",
        gold: "0 8px 32px -8px var(--gold-glow)",
        lift: "0 4px 24px rgba(26, 31, 43, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
