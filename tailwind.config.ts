import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00b6d2',
          dark: '#0099b3',
        },
        secondary: {
          DEFAULT: '#fc4083',
          dark: '#e6336f',
        },
        base: {
          white: '#ffffff',
          light: '#f7fbff',
        },
        text: {
          DEFAULT: '#0f172a',
          light: '#64748b',
        },
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#d1d5db',
        },
        accent: {
          DEFAULT: '#0b1021',
        },
        status: {
          success: '#16a34a',
          warning: '#f59e0b',
          danger: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section': '4rem',
        'section-md': '6rem',
        'section-lg': '8rem',
      },
      animation: {
        'bounce-subtle': 'bounce-subtle 0.6s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-in',
        'slide-up': 'slide-up 0.4s ease-out',
      },
      keyframes: {
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      aspectRatio: {
        'card': '16 / 9',
        'card-portrait': '3 / 4',
      },
    },
  },
  plugins: [],
}
export default config

