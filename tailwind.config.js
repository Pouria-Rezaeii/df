/** @type {import('tailwindcss').Config} */
import { palette, breakpoints } from './src/core/configs/theme';

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,css,scss}"],
  plugins: [],
  theme: {
    colors: {
      transparent: "#00000000",
      white: "#fff",
      black: "#000",
      info: palette.info,
      success: palette.success,
      warning: palette.warning,
      error: palette.error,
      primary: palette.primary,
      secondary: palette.secondary,
      background: palette.background,
      gray: palette.gray,
      text: palette.text,
    },
    screens: {
      xs: `${breakpoints.xs}px`,
      sm: `${breakpoints.sm}px`,
      md: `${breakpoints.md}px`,
      lg: `${breakpoints.lg}px`,
      xl: `${breakpoints.xl}px`,
    },
    extend: {
      boxShadow: {
        '0.0.2.0.25': '0 0 2px 0 rgba(0, 0, 0, .25)',
        '0.0.4.0.25': '0 0 4px 0 rgba(0, 0, 0, .25)',
        '0.4.4.0.25': '0 4px 4px 0 rgba(0, 0, 0, .25)',
      },
      borderRadius: {
        'default': '4px',
      }
    }
  },

}