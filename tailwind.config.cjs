/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '376px',
      // => @media (min-width: 375px) { ... }

        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      },
      colors:{
        'pink':'#FF426F',
        'ablack':'#100F0F',
        'twhite':' #F4F4F4',
        'orange':'#FF5300',
        'grey':' #565656',
        'bgblack':'#0D0D0D',
        'linegreen':"#23FFF2",
        'bblack':"#040404",
     },
      fontFamily :{
        'gilroy-light': ['GilroyLight', 'sans-serif'],
        'gilroy-extrabold': ['GilroyExtraBold', 'sans-serif'],
        'gilroy-bold': ['GilroyBold', 'sans-serif'],
        'gilroy-semi-bold': ['GilroySemiBold', 'sans-serif'],
        'gilroy-regular': ['GilroyRegular', 'sans-serif'],
        'gilroy-thin': ['GilroyThin', 'sans-serif'],
        'gilroy-medium': ['GilroyMedium', 'sans-serif'],
        'gilroy-heavy': ['GilroyHeavy', 'sans-serif'],
        'gilroy-black': ['GilroyBlack', 'sans-serif'],
        'gilroy-ultra-light': ['GilroyUltraLight', 'sans-serif'],
      },
      backgroundImage: {
        'serviceLander': "url('@assets/serviceLander.png')",
        'aboutLander': "url('@assets/aboutLander.png')",
        'balloonMob': "url('@assets/balloonMob.png')",
        'thanos': "url('@assets/thano.png')",
        'land': "url('@assets/testimo.png')",
        'vector2': "url('@assets/vector2.png')",
        'indusLander': "url('@assets/hero.png')",
        'manart': "url('@assets/manArt.png')",
        'cardbg': "url('@assets/cardbg.jpg')",
        'vector': "url('@assets/backgroundVector.png')",
        'moon': "url('@assets/brandMoon.png')",
        'landerImg': "url('@assets/landerImage1.png')",
        'balloon': "url('@assets/balloon.png')",
        'balloon1': "url('@assets/balloon1.png')",
        'footerImg': "url('@assets/footer.png')",
        'abouts': "url('@assets/abouts.png')",
        'earth': "url('@assets/earth.png')",
        'hands': "url('@assets/hands.png')",
        'healthindus': "url(@assets/healthindus.png)",
        'ind1':"url(@assets/ind1.png)",
        'ind2':"url(@assets/ind2.png)",
        'ind3':"url(@assets/ind3.png)",
        'ind4':"url(@assets/ind4.png)",
        'ind5':"url(@assets/ind5.png)",
        'ind6':"url(@assets/ind6.png)",
        'serv1':"url(@assets/serv1.png)",
        'serv2':"url(@assets/serv2.png)",
        'serv3':"url(@assets/serv3.png)",
        'serv4':"url(@assets/serv4.png)",
        'serv5':"url(@assets/serv5.png)",
        'serv6':"url(@assets/serv6.png)",

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
