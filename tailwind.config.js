/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#fbbf24',
          secondary: '#4c1d95',
          accent: '#4b5563',
          neutral: '#4b5563',
          'base-100': '#1d232a',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272'
        }
      }
    ]
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')]
}
