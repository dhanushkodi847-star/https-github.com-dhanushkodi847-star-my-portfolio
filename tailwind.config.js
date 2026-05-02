/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0C10", 
        secondary: "#1F2833", 
        accent: "#66FCF1", 
        accentHover: "#45A29E",
        neonPurple: "#B026FF",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      animation: {
        'blob': "blob 7s infinite",
        'float': "float 6s ease-in-out infinite",
        'glow': "glow 2s ease-in-out infinite alternate",
        'pulse-slow': "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      perspective: {
        1000: '1000px',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px #66FCF1, 0 0 20px #66FCF1", textShadow: "0 0 5px #66FCF1" },
          "100%": { boxShadow: "0 0 20px #66FCF1, 0 0 40px #66FCF1", textShadow: "0 0 15px #66FCF1" }
        }
      }
    },
  },
  plugins: [],
}
