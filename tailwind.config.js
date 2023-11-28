/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        'md': '992px'
      },
      width: {
        "90vw": '90vw',
        "fixed-width": "620px"

      },
      borderRadius: {
        '50%': '50%'
      },
      colors: {
        "clr-primary-1": "hsl(22, 28%, 21%)",
        "clr-primary-2": "hsl(22, 28%, 29%)",
        "clr-primary-3": "hsl(22, 28%, 37%)",
        "clr-primary-4": "hsl(22, 28%, 45%)",
        "clr-primary-5": "hsl(22, 31%, 52%)",
        "clr-primary-6": "hsl(22, 31%, 60%)",
        "clr-primary-7": "hsl(22, 31%, 67%)",
        "clr-primary-8": "hsl(20, 31%, 74%)",
        "clr-primary-9": "hsl(22, 31%, 81%)",
        "clr-primary-10": "hsl(22, 31%, 88%)",
        "clr-grey-1": "hsl(209, 61%, 16%)",
        "clr-grey-2": "hsl(211, 39%, 23%)",
        "clr-grey-3": "hsl(209, 34%, 30%)",
        "clr-grey-4": "hsl(209, 28%, 39%)",
        "clr-grey-5": "hsl(210, 22%, 49%)",
        "clr-grey-6": "hsl(209, 23%, 60%)",
        "clr-grey-7": "hsl(211, 27%, 70%)",
        "clr-grey-8": "hsl(210, 31%, 80%)",
        "clr-grey-9": "hsl(212, 33%, 89%)",
        "clr-grey-10": "hsl(210, 36%, 96%)",
        "clr-white": "#fff",
        "clr-red-dark": "hsl(360, 67%, 44%)",
        "clr-red-light": "hsl(360, 71%, 66%)",
        "clr-green-dark": "hsl(125, 67%, 44%)",
        "clr-green-light": "hsl(125, 71%, 66%)",
        "clr-black": "#222",
    
      },
      maxWidth: {
        "max-width": "1170px",
      },
      boxShadow: {
        "light-shadow": "0 5px 15px rgba(0, 0, 0, 0.1)",
        "dark-shadow": "0 5px 15px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        "radius": "0.25rem",
      }
      

    },
  },
  plugins: [],
}

