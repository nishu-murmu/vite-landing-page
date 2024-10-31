// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: "#4B144B",
          dark: "#310A31",
          darker: "#420042",
        },
        maroon: {
          dark: "#431443",
          darker: "#330033",
        },
        orange: {
          primary: "#FFAE00",
          light: "#FFCC5C",
          400: "#FFB74D", // Lighter orange for question mark
          500: "#FF9F1C", // Main orange
        },
      },
      backgroundImage: {
        "yellow-gradient": "linear-gradient(180deg, var(--tw-gradient-stops))",
      },
      gradientColorStops: (theme) => ({
        "yellow-start": "#FFDF72",
        "yellow-end": "#EAC64B",
      }),
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        petrov: ["Petrov Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
