/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5ee596",

          secondary: "#19af16",

          accent: "#d37d61",

          neutral: "#1a1924",

          "base-100": "#f6f7f8",

          info: "#3abff8",

          success: "#21d4a7",

          warning: "#a9870f",

          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
