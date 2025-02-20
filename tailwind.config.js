/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
}

