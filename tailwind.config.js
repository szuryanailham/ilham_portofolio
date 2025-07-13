/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        BaseColor: "#121B30",
        titleColor: "#3C93E3",
      },
      fontFamily: {
        fontTitle: ["Poppins", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
      backgroundImage: {
        "tailwind-gradient": "linear-gradient(0deg, #35A5EE 0%, #1264D6 100%)",
        "next-color": "linear-gradient(0deg, #25262F 0%, #0C0D16 100%)",
        figma: "linear-gradient(0deg, #313030 0%, #121313 100%)",
        bootstrap: "linear-gradient(0deg, #FBFBFC 0%, #DBDBDB 100%)",
        inertia: "linear-gradient(0deg, #3C93E3 0%, #B900B4 100%)",
        laravel: "linear-gradient(0deg, #C51E1C 0%, #F0B076 78%)",
        background: "linear-gradient(to bottom, #142131 0%, #000113 1000%)",
      },
    },
  },
  plugins: [],
};
