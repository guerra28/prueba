/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        purple:{
            100:'#773dbd33',
            200:'#773dbd66',
            300:'#773dbda6',
            400:'#773dbdcc',
            500:'#773dbd',
        }
          
      }
    },
  },
  plugins: [],
};
