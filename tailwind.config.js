/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
        clash:["Clash", "var(--font-inter)"],
      },

      colors: {
        secondary: {
          100: "#d0cfd4",
          200: "#a19fa9",
          300: "#736e7e",
          400: "#443e53",
          DEFAULT: "#150e28",
          600: "#110b20",
          700: "#0d0818",
          800: "#080610",
          900: "#040308"
        },
      primary: {
          100: "#f6d6ff",
          200: "#eeaeff",
          300: "#e585fe",
          400: "#dd5dfe",
          DEFAULT: "#d434fe",
          600: "#aa2acb",
          700: "#7f1f98",
          800: "#551566",
          900: "#2a0a33"
},

      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
