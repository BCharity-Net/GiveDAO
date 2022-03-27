module.exports = {
  prefix: "tw-",
  important: false,
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
     "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      colors: {
        black: "#000", white: "#fff",
        gray: { light: "#f7fafc", mid: "#a0aec0", dark: "#1a202c" },
        red: { light: "#fff5f5", mid: "#f56565", dark: "#742a2a" },
        blue: { light: "#ebf8ff", mid: "#4299e1", dark: "#2a4365" },
      },
      spacing: { "4": "4px", "8": "8px", "16": "16px", "24": "24px" },
      backgroundColor: theme => theme("colors"),
      fontSize: { "14": "14px", "16": "16px", "18": "18px" },
      padding: theme => theme("spacing"),
      margin: theme => ({ ...theme("spacing"), "-1": "-1px" }),
      textColor: theme => theme("colors"),
    },
  },
  variants: {
    backgroundColor: [], textColor: [], boxShadow: [],
  },
  purge: [
    "./components/**/*.{js,jsx,ts,tsx}",
     "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [
    require(
      'tailwindcss',
      'postcss-preset-env'
    )
  ],  
  corePlugins: [
    "display", "position", "textColor", "backgroundColor", "margin",
    "padding", "fontSize",
  ],
}