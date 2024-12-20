/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/functions/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    './src/constants/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '1rem',
        lg: '1rem',
        xl: '1rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      backgroundImage: {
        'c-gradient-blue':
          'linear-gradient(to right, #2124b5, #3b3ece, #2124b5)',
      },
      colors: {
        'c-green': '#66BB6A',
        'c-red': '#FF6A6A',
        'c-yellow': '#FFA726',
        'c-purple': '#B183F8',
        'c-royal-blue': '#377DFF',
        'c-sky-blue': '#55E0F6',
        'c-gray-50': '#fafafa',
        'c-gray-100': '#F5F5F5',
        'c-gray-200': '#E2E2E2',
        'c-gray-300': '#ABB4BC',
        'c-gray-400': '#5D6670',
        'c-gray-500': '#3F434D',
        'c-gray-600': '#1E2022',
      },
      fontSize: {
        'c-3xs': '0.625rem',
        'c-2xs': '0.685rem',
        'c-xs': '0.75rem',
        'c-sm': '0.80rem',
        'c-md': '0.875rem',
        'lc-g': '1rem',
        'c-xl': '1.125rem',
        'c-2xl': '1.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
