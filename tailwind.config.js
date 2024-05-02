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
        'carrot': 'var(--carrot)',
        'very-dark': 'var(--very-dark)',
        'dark': 'var(--dark)',
        'other-dark': 'var(--other-dark)',
        'light-yellow': 'var(--light-yellow)',
      },
    },
  },
  plugins: [],
};
