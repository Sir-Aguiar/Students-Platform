module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'sm':{'max':'360px'},
        'md':{'max':'520px'},
        'lg':{'max':'720px'},
        'xlg':{'max':'1180px'},
      },
      boxShadow: {
        'register-shadow': '2px 2px 4px rgba(0, 0, 0, 0.3), -2px -1px 4px rgba(0, 0, 0, 0.3)'
      },
      gridTemplateRows: {
        'register-layout': '1fr 8fr',
      },
      gridTemplateColumns: {
        'register-layout': '1fr 1fr',
      },
      fontFamily: {
        'Roboto':['Roboto', 'sans-serif'],
        'Plex':['IBM Plex Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
