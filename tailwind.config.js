/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c4ff61",
          50: "#f8ffe5",
          100: "#eeffc7",
          200: "#dbff95",
          300: "#c4ff61",
          400: "#a5f625",
          500: "#85dd05",
          600: "#66b100",
          700: "#4d8605",
          800: "#3f690b",
          900: "#35590e",
          950: "#1a3201",
        },
      },
    },
  },
  plugins: [],
};
