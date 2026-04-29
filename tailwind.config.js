/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:           '#0a192f',
        'navy-mid':     '#112240',
        'navy-light':   '#233554',
        slate:          '#8892b0',
        'slate-light':  '#a8b2d1',
        'slate-lightest':'#ccd6f6',
        teal:           '#64ffda',
        'blue-soft':    '#55b4d4',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
