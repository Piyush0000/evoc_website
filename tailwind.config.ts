import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
          card: '#0A0A0F',
          sidebar: '#0D0D14',
          dashboard: '#FFFFFF',
          dashboardAlt: '#F5F6F8',
          retentionDark: '#0B0B12',
        },
        brand: {
          blue: '#1E3BFF',
          blueHover: '#2A47FF',
          blueGlow: '#4A6BFF',
        },
        text: {
          white: '#FFFFFF',
          muted: '#A0A0B0',
          dashMuted: '#6B7280',
          dashDark: '#111827',
        },
        border: {
          nav: 'rgba(255,255,255,0.08)',
          dashboard: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument)', 'serif'],
      }
    },
  },
  plugins: [],
}
export default config
