/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    container:{
      center:true,
      padding:'2rem'
    },
    backgroundImage: {
      'main': " linear-gradient(to right,#8252fa 0%,#eca2f1 100%) , radial-gradient(circle at top left,#8252fa,#eca2f1)",
      "double": "linear-gradient(white,white) , radial-gradient(circle at top left,#8252fa,#eca2f1)"
    },
    extend: {
      colors:{
        white:"#fff",
        black: {
          100:"#111",
          200:"#222",
          700:"#777",
          900:"#999"
        },
        footer:"#fcf9fc"
      }
    },
  },
  plugins: [],
}
