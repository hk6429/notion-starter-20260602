import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.{ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        chalk: {
          bg: "#EAF4E6",
          bgLight: "#F2F8EE",
          bgDark: "#DCEBD3",
          primary: "#1F6B3A",
          secondary: "#3FA15E",
          accent: "#7CC68A",
          ink: "#1A1A1A",
          highlight: "#F7E26B",
        },
        warm: {
          bg: "#F2F8EE",
          card: "#FFFFFF",
          line: "#D8E8CE",
          header: "#143C24",
          headerSub: "#A9C7B0",
          accent: "#3FA15E",
          accentDark: "#1F6B3A",
          soft: "#E5F1E2",
          ink: "#1C2A20",
          muted: "#5E7567",
        },
      },
      fontFamily: {
        brush: ['"Noto Serif TC"', '"Yuji Mai"', "serif"],
        body: ['"Noto Sans TC"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "chalk-grain":
          "linear-gradient(135deg, #F2F8EE 0%, #DCEBD3 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
