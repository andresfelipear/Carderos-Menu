/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#d49f59',
        secondary: '#f0f0f1',
        basic: '#fff',
        textColor: '#3D3D39'
      },
    },
  },
  plugins: [],
}
