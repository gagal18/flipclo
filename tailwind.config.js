/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});
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
    require('tailwindcss-3d')({ legacy: true }),
    backfaceVisibility
  ],
  daisyui: {
    themes: ["wireframe", "luxury"],
  },
}
