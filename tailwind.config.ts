import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: '"Circular", "custom-font", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    },
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: "3.6rem",
      "5xl": "7.2rem",
    },
    colors: {
      offWhite: "#fafafa",
      background: "#121212",
      "seconday-text": "#898989",
      "tranparent-border": "#2e2e2e",
      "primary-button": "#006239",
      green: "#00c573",
      "button-active": "#3ecf8e80",
      "secondary-button": "#242424",
      "tertiary-button": "#292929",
    },

    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
      17: "6.8rem",
      18: "7.2rem",
      19: "7.6rem",
      20: "8rem",
      "navigation-height": "var(--navigation-height)",
    },
  },

  plugins: [],
} satisfies Config;
