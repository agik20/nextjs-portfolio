 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001F',
        },
        fontFamily: {
            crimson: ['Crimson Text', 'serif'],
            inter: ['Inter', 'sans-serif'],
        },
        boxShadow: {
            'black': '4px 4px 0 #000',
            'white': '4px 4px 0 #fff',
        }
     },
   },
   plugins: [],
 }