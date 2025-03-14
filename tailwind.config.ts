import type { Config } from "tailwindcss";
import fluid from "fluid-tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bricolageGrotesque: ['"Bricolage Grotesque", sans-serif'],
    },
    extend: {
      backgroundImage: {
        hero: "url('/bg1.webp')",
        glassmorphism: "url('/bg2.webp')",
        glassmorphism2: "url('/bg3.webp')",
      },
      colors: {
        primaryColor: "#9037ea",
        primaryLight: "#cb98ffcc",
        primaryExtraLight: "#9037ea99",
        secondaryColor: "#10ddf7",
        secondaryLight: "rgba(16, 221, 247, 0.7)",
        darkColor: "#0e0e0e",
        lightColor: "#e7e7e7",
      },
      keyframes: {
        blur: {
          "0%": {
            backdropFilter: "blur(0px) contrast(100%)",
            WebkitBackdropFilter: "blur(0px) contrast(100%)",
          },
          "100%": {
            backdropFilter: "blur(10px) contrast(100%)",
            WebkitBackdropFilter: "blur(10px) contrast(60%)",
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px var(--secondaryColor), 0 0 20px var(--secondaryColor)',
          },
          '100%': {
            'box-shadow': '0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--secondaryColor), 0 0 40px var(--secondaryColor)',
          },
        },
      },
      animation: {
        blur: "blur 0.5s ease-in-out forwards",
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out infinite',
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [fluid],
};
export default config;
