/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}' // Include all files in the src directory and subdirectories with specified extensions
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          DEFAULT: '#4338ca',
          dark: '#3730a3',
        },
        secondary: {
          light: '#fbbf24',
          DEFAULT: '#f59e0b',
          dark: '#b45309',
        },
        background: {
          light: '#f9fafb',
          DEFAULT: '#f3f4f6',
          dark: '#e5e7eb',
        },
        accent: {
          light: '#ec4899',
          DEFAULT: '#db2777',
          dark: '#be185d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(66, 66, 66, 0.1), 0 2px 4px -1px rgba(66, 66, 66, 0.06)',
      },
    },
  },
  plugins: [],
};
