/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px'
      },
      fontFamily: {
        'mouse-memoirs': ['"Mouse Memoirs"', 'sans-serif']
      }
    }
  },
  plugins: []
}

 