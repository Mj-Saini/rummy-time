/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) -3.83%, rgba(206, 168, 121, 0.8) 49.57%, rgba(255, 255, 255, 0) 100.14%)",
        "review-gradient":
          "linear-gradient(rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgba(251, 82, 99, 0.6) -102.39%, rgba(251, 82, 99, 0) 88.14%);",
      },
    },
  },
  plugins: [],
};
