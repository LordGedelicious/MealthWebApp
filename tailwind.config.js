module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#303032',
      white: '#F4F1EB',
      green: '#E0E785',
      orange: '#FABA8A',
      red: '#DF826B',
      blue: '#9FAED9',
      spurple: '#C19AC7',
      speach: '#FEB29B',
      sorange: '#F6B05E',
      syellow: '#FFDE78',
      sgreen: '#AAE492',
      sblue: '#B3CEF8',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Philosopher', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
