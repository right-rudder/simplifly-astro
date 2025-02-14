import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
        title: ["Kanit", ...defaultTheme.fontFamily.sans],
        stock: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        accent: {
          50: "#fffcea",
          100: "#fff6c5",
          200: "#ffed87",
          300: "#ffde48",
          400: "#ffcc1e",
          500: "#fcab04",
          600: "#df8100",
          700: "#b95a04",
          800: "#96450a",
          900: "#7b390c",
          950: "#471c01",
        },
      },
      minHeight: {
        "1/2": "50vh",
        "2/3": "66vh",
        "3/4": "75vh",
      },
      height: {
        "1/2": "50vh",
        "3/4": "75vh",
      },
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        "slow-zoom": "zoom 45s alternate infinite ease-in-out",
        "mid-zoom": "zoom 18s alternate infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
