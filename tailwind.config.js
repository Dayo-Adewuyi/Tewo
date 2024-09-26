/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        layeredTeal: "#50C2B2",
        layeredDarkBlue: "#0D4C92",
      },
      fontFamily: {
        sans: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
