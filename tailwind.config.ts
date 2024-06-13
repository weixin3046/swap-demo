import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: {
          900: "#0A0B0F",
          800: "#141519",
          700: "#1A1B1F",
          600: "#2E2F34",
          500: "#404145",
          400: "#525357",
          300: "#646569",
          200: "#76777C",
          100: "#88898D",
          50: "#AAAAAF",
        },
      },
      keyframes: {
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-in-bottom": "slide-in-bottom 0.3s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
