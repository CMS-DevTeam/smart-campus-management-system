/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#006489",
        },
        spacing: {
          72: "18rem",
        },
      },
    },
    plugins: [],
  };
  