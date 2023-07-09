/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", ".dark-theme"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        default: ["var(--font-default)", "system-ui", "sans-serif"],
      },
      colors: {
        white: "var(--notepad-white)",
        stone: {
          50: "var(--notepad-stone-50)",
          100: "var(--notepad-stone-100)",
          200: "var(--notepad-stone-200)",
          300: "var(--notepad-stone-300)",
          400: "var(--notepad-stone-400)",
          500: "var(--notepad-stone-500)",
          600: "var(--notepad-stone-600)",
          700: "var(--notepad-stone-700)",
          800: "var(--notepad-stone-800)",
          900: "var(--notepad-stone-900)",
        },
      },
    },
  },
  plugins: [
    // Tailwind plugins
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
