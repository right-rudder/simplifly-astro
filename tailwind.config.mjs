import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
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
      minHeight: {
        "1/2": "50vh",
        "2/3": "66vh",
        "3/4": "75vh",
      },
      height: {
        "1/2": "50vh",
        "3/4": "75vh",
      },
    },
  },
  plugins: [],
};
