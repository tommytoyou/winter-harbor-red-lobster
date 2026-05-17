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
        burgundy: {
          DEFAULT: "#8B1A2A",
          light: "#B52236",
          dark: "#5C1020",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E2CFA0",
          warm: "#D4B87A",
          dark: "#9A7D4A",
          pale: "#F0E6D0",
        },
        harbor: {
          dark: "#0D0F1A",
          charcoal: "#1A1C28",
          warm: "#130D0A",
          cream: "#F2EBE0",
          mist: "#7A8FA0",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1" }],
        "display-md": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(4rem, 8vw, 7rem)", { lineHeight: "1.0" }],
      },
      letterSpacing: {
        luxury: "0.25em",
        "ultra-wide": "0.45em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
