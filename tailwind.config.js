/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5FADA6",
        secondary: "#E5D6C8",
        secondaryAccent: "#F4CAA6",
        tertiary: "#C3DFF7",
        tertiaryLight: "#FFFFFF",
        quaternary: "#FFFFFF",
      
      },
    },
  },
  plugins: [require("daisyui")],
};
