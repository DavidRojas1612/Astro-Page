/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      mobile: '360px',
      tablet: '768px',
      desktop: '1140px',
    },
    fontSize: {
      sm: ['14px', {lineHeight: '14px', letterSpacing: '0.125em'}],
      light: ['15px', {lineHeight: '25px'}],
      md: ['16px', {lineHeight: '26px'}],
      lg: ['20px', {lineHeight: '26px', letterSpacing: '0.3125em'}],
      '1lg': ['28px', {lineHeight: '36px', letterSpacing: '0.0875em'}],
      '2lg': ['32px', {lineHeight: '36px'}],
      xl: ['40px', {lineHeight: '48px', letterSpacing: '0.125em'}],
      '2xl': ['48px', {lineHeight: '48px'}],
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: {
          100: '#FFF',
          200: '#F2f2f2',
        },
        black: '#1C1D1E',
        grey: {
          100: '#F1F3F5',
          200: '#7b7b7b',
          500: '#333136',
        },
        peach: {
          100: '#FFAD9B',
          500: '#E7816B',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({matchUtilities, addBase, addComponents, theme}) {
      matchUtilities(
        {
          'inline-size': value => ({
            inlineSize: value,
          }),
        },
        {values: theme('spacing')},
      )
      addBase({
        html: {fontFamily: theme('fontFamily.jost')},
      })
      addComponents({
        '.nav-mobile': {
          position: 'fixed;',
          width: '100vw;',
          top: '97px;',
          left: ' 50%;',
          backgroundColor: 'rgba(41, 45, 60, 0.95);',
          height: 'calc(100vh - 97px);',
          transform: 'translate(-50%) scaleY(0);',
          transformOrigin: 'top center;',
          transition: 'transform 0.3s ease;',
          zIndex: '50;',
        },
        '.nav-desktop': {
          position: 'relative',
          width: 'auto',
          height: 'auto',
          top: 'unset;',
          left: ' unset;',
          backgroundColor: 'transparent',
          transform: 'none;',
        },
      })
    }),
  ],
}
