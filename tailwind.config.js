import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f4bf8a',
        'primary-light': '#fed7aa',
        background: '#131313',
      },
      fontFamily: {
        merry: ['Merriweather', 'serif'],
      },

      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-10rem)', opacity: 0 },
          '100%': { transform: 'translateX(0)' },
          opacity: 1,
        },
        'slide-up': {
          '0%': { transform: 'translateY(2rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'opacity-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'appear-transform': {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        },
      },

      animation: {
        underline: 'underline 0.2s ease-in-out backwards',
        'slide-up': 'slide-up 0.5s ease-in-out backwards',
        'slide-down': 'slide-down 0.5s ease-in-out backwards',
        slideLeft: 'slideLeft 0.5s ease-in-out forwards',
        'slide-right': 'slide-right 0.5s ease-in-out forwards',
        'appear-transform': 'appear-transform 0.5s ease-in-out both',
        opacity: 'opacity 0.3s ease-in-out backwards',
        'opacity-pulse': 'opacity-pulse 3s ease-in-out backwards infinite',
      },
    },
  },
  plugins: [],
};