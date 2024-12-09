/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#dce3f1',
          200: '#bbc9e4',
          300: '#92a7d1',
          400: '#6a84be',
          500: '#4e68aa',
          600: '#40538f',
          700: '#364474',
          800: '#2f3a60',
          900: '#1a2038',
        },
      },
    },
  },
  plugins: [],
};