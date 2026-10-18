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
        background: "var(--background)",
        foreground: "var(--foreground)",
        canvas: {
          50: "#FCFBF8",
          100: "#FAF8F5", // primary off-white
          200: "#F2EFE9",
          300: "#E5E1D7",
          border: "#E7E4DC",
        },
        ink: {
          900: "#0F0F0E", // obsidian
          800: "#1C1B19",
          700: "#2B2926",
          600: "#4A4742",
          500: "#6B6760",
          400: "#9C978E",
          300: "#C6C2B8",
        },
        studio: {
          red: "#EE3B2B",
          gold: "#D4A359",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
