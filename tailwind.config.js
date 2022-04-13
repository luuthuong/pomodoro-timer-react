module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          1000:'red'
        },
        primary:'#eaf6ec',
        third:'#05c46b',
        textColor:'#666666'
      },
      zIndex:{
        '-1':'-1'
      },
      borderWidth:{
        '1':'1px'
      },
      screens:{
        'lg':{'min':'1028px','max':'1280px'},
        '1028':{'min':'768px','max':'1028px'},
        '640':{'max':'768px'},
        'mb':{'max':'640px'},
        'mb-sm':{'max':'390px'}  
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
