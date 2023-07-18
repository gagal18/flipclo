/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [
    require('@kamona/tailwindcss-perspective'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["wireframe", "luxury"],
  },
}
