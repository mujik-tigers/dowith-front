// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcssAnimate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      screens: {
        xl: { min: '1280px' },
        lg: { min: '768px', max: '1279px' },
        md: { max: '767px' },
      },
      fontSize: {
        XB32: [
          '2rem', // 32px
          {
            fontWeight: 800,
            lineHeight: '130%',
          },
        ],
        XB24: [
          '1.5rem', // 24px
          {
            fontWeight: 800,
            lineHeight: '130%',
          },
        ],
        XB20: [
          '1.25rem', // 20px
          {
            fontWeight: 800,
            lineHeight: '130%',
          },
        ],
        B20: [
          '1.25rem', // 20px
          {
            fontWeight: 700,
            lineHeight: '130%',
          },
        ],
        B16: [
          '1rem', // 16px
          {
            fontWeight: 700,
            lineHeight: '130%',
          },
        ],
        B14: [
          '0.875rem', // 14px
          {
            fontWeight: 700,
            lineHeight: '130%',
          },
        ],
        B12: [
          '0.75rem', // 12px
          {
            fontWeight: 700,
            lineHeight: '130%',
          },
        ],
        B10: [
          '0.625rem', // 10px
          {
            fontWeight: 700,
            lineHeight: '130%',
          },
        ],
        M16: [
          '1rem', // 16px
          {
            fontWeight: 500,
            lineHeight: '130%',
          },
        ],
        M14: [
          '0.875rem', // 14px
          {
            fontWeight: 500,
            lineHeight: '130%',
          },
        ],
        M12: [
          '0.75rem', // 12px
          {
            fontWeight: 500,
            lineHeight: '130%',
          },
        ],
        M10: [
          '0.625rem', // 10px
          {
            fontWeight: 500,
            lineHeight: '130%',
          },
        ],
      },
      colors: {
        black: '#212529',
        dim: 'rgba(33, 37, 41, 0.63)',
        white: '#FAFAFA',
        gray100: '#f4f4f4',
        gray200: '#ebebeb',
        gray300: '#dddddd',
        line: '#ECECEC',
        title: '#212529',
        textActive: '#444444',
        text: '#5A5A5A',
        textWeak: '#828282',
        red: '#ff6b6b',
        yellow: '#ffd43b',
        green: '#89FF6B',
        blue: '#66d9e8',
        pinkLight: '#ffdada',
        yelloLight: '#ffd2b3',
        orangeLight: '#ffd4a9',
        blueLight: '#d1eaed',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
