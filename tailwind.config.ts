import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        surface: '#F8FAFC',
        soft: '#EFF6FF',
        azure: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        ink: {
          DEFAULT: '#0F172A',
          light: '#475569',
          faint: '#94A3B8',
        },
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['5rem', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        xl2: '20px',
        xl3: '24px',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.06)',
        card: '0 4px 20px rgba(59, 130, 246, 0.08)',
        lift: '0 20px 40px rgba(15, 23, 42, 0.10)',
        glow: '0 0 0 1px rgba(59, 130, 246, 0.15), 0 8px 24px rgba(59, 130, 246, 0.20)',
      },
      backgroundImage: {
        'azure-radial':
          'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.12), transparent 60%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        blink: 'blink 2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.2,0.6,0.4,1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
