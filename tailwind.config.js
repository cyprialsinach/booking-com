/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: ["14px", "22px"],
        md: ["16px", "24px"],
        lg: ["18px", "26px"],
        xl: ["20px", "28px"],
        xxl: ["24px", "32px"],
        "2xl": ["28px", "36px"],
      },
      letterSpacing: {
        tightest: "-4%",
        tighter: "-2%",
        tight: "-1px",
        normal: "0",
      },
      colors: {
        primary: { DEFAULT: "#0D6EFD", 10: "#0054E4", 20: "#0A369D" },
        greyAsh: { DEFAULT: "#647995", 10: "#676E7E", 100: "#FFDCB9" },
        black: { DEFAULT: "#1D2433" },
        white: { DEFAULT: "#FFFFFF" },
      },
      //#B86514

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
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
