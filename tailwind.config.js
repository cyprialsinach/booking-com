/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: ["0.875rem", "1.375rem"],
        md: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.625rem"],
        xl: ["1.25rem", "1.75rem"],
        xxl: ["1.5rem", "2rem"],
        "2xl": ["1.75rem", "2.25rem"],
      },
      colors: {
        primary: { DEFAULT: "#0D6EFD", 10: "#0054E4", 20: "#0A369D" },
        greyAsh: {
          DEFAULT: "#647995",
          10: "#676E7E",
          20: "#FFDCB9",
          30: "#F0F2F5",
          40: "#98A2B3",
        },
        black: { DEFAULT: "#1D2433" },
        white: { DEFAULT: "#FFFFFF" },
      },
      // #98A2B3
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
      },
      scrollbar: {
        width: "8px",
        height: "8px",
        thumbColor: "#4A5568",
        trackColor: "#CBD5E0",
      },
    },
  },
  pvariants: {
    extend: {
      scrollbar: ["rounded"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar": {
          "::-webkit-scrollbar": {
            width: 4,
            height: 4,
          },
          "::-webkit-scrollbar-track": {
            background: "#white",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#E8E3DE",
            borderRadius: 10000,
            cursor: "pointer",
          },
        },
        ".scrollbar-thin": {
          "::-webkit-scrollbar": {
            width: 4,
            height: 4,
          },
        },
        ".scrollbar-rounded": {
          "::-webkit-scrollbar-thumb": {
            borderRadius: 10000,
            cursor: "pointer",
          },
        },
      });
    },
  ],
};
