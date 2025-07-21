// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#8B62FF',
        base: '#ffffff',
        text: '#2E2B41',
        input: '#F3F0FF',
      },
      keyframes: {
     autorun: {
    '0%': {
      transform: 'perspective(1000px) rotateX(-16deg) rotateY(0deg)',
    },
    '100%': {
      transform: 'perspective(1000px) rotateX(-16deg) rotateY(360deg)',
    },
  },
},
animation: {
  autorun: 'autorun 20s linear infinite',
},
      animation: {
        autorun: 'autorun 20s linear infinite',
      },
    },
  },
  plugins: [],
}






