/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "hsl(243, 96%, 9%)",
          800: "hsl(243, 27%, 20%)",
          700: "hsl(243, 23%, 24%)",
          600: "hsl(243, 23%, 30%)",
          300: "hsl(240, 6%, 70%)",
          200: "hsl(250, 6%, 84%)",
          0: "hsl(0, 0%, 100%)",
        },
        orangeCustom: {
          500: "hsl(28, 100%, 52%)",
        },
        blueCustom: {
          500: "hsl(233, 67%, 56%)",
          700: "hsl(248, 70%, 36%)",
        },
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        briGro: ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [],
};
