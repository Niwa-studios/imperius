/** @type {import('tailwindcss').Config} */

const imperiusColors = {
  navBg: "rgba(2, 12, 12, 0.05)",
  submenuBg: "rgba(255, 255, 255, 0.05)"
}

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: imperiusColors, 
      backgroundImage: {
        'footer-gradient': 'linear-gradient(180deg, rgba(0,250,255,1) 0%, rgba(0,150,153,1) 100%)'
      },
      gridTemplateColumns: {
        "features-grid": "repeat(auto-fit, minmax(250px, 1fr))",
      }
    },
  },
  plugins: [],
}
