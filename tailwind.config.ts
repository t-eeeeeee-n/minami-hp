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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Admin theme colors
        admin: {
          bg: "#0A0A0B",
          surface: "#141416",
          elevated: "#1C1C1F",
          border: "#2A2A2E",
          muted: "#71717A",
        },
        accent: {
          DEFAULT: "#FF6B2C",
          light: "#FF8A50",
          glow: "#FF6B2C",
        },
        amber: {
          warm: "#FFB347",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #FF6B2C 0%, #FF8A50 50%, #FFB347 100%)",
        "surface-gradient": "linear-gradient(180deg, #141416 0%, #0A0A0B 100%)",
      },
      boxShadow: {
        "glow-sm": "0 0 20px -5px rgba(255, 107, 44, 0.3)",
        "glow-md": "0 0 40px -10px rgba(255, 107, 44, 0.4)",
        "glow-lg": "0 0 60px -15px rgba(255, 107, 44, 0.5)",
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "dropdown-in": "dropdown-in 0.15s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "dropdown-in": {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
