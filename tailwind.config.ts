import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: {
          50: "#e9edf4",
          100: "#c6d0e4",
          200: "#8fa0c7",
          300: "#5971a8",
          400: "#334b82",
          500: "#1f325e",
          600: "#16254a",
          700: "#0f1a38",
          800: "#0a122a",
          900: "#060b1c",
          950: "#03060f",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          electric: "#00e5ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Satoshi", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(0, 229, 255, 0.45)",
        "glow-lg": "0 0 80px -12px rgba(0, 229, 255, 0.55)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(1200px 600px at 20% -10%, rgba(0,229,255,0.18), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(99,102,241,0.15), transparent 60%)",
        "mesh-dark":
          "radial-gradient(circle at 20% 0%, rgba(0,229,255,0.12), transparent 40%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.10), transparent 45%), radial-gradient(circle at 50% 100%, rgba(139,92,246,0.10), transparent 50%)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "flow-dash": {
          to: { strokeDashoffset: "-200" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "flow-dash": "flow-dash 2s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
