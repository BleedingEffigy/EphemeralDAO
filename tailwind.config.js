// tailwind.config.cjs

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 5s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.3) rotate(45deg)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.6) rotate(-20deg)",
          },
          "100%": {
            transform: "tranlate(15px, 30px) scale(1.1) rotate(-5deg)",
          },
        },
      },
      fontFamily: {
        russo: ['Russo One'],
        poppins: ['Poppins']
      }
    },
  },
  // more options here
};