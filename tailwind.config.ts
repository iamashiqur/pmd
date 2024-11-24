import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'clr-17': '#020817',
        'clr-80': '#6B7280',
        'clr-280': '#d2d1e280',
        'clr-ef': '#0495EF',
        'clr-f2': '#36aaf2',
        'clr-f1': '#1da0f1',
        'clr-fa': '#FAFAFB',
        'clr-8b': '#7E828B'
      },

      backgroundImage: {
        'auth-bg': "url('/assets/authbg.png')",
        'btn-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.10) 46%, rgba(255, 255, 255, 0.00) 54%), #0495EF'
      },

      boxShadow: {
        'auth-card':
          '0px 0px 0px 1px rgba(19, 19, 22, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 4px 6px 0px rgba(34, 42, 53, 0.04), 0px 24px 68px 0px rgba(47, 48, 55, 0.05), 0px 2px 3px 0px rgba(0, 0, 0, 0.04);',
        'card-shadow': '0px 0px 0px 1px rgba(19, 19, 22, 0.05), 0px 1px 1px 0px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: []
}
export default config
