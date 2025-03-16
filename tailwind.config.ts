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
        'gradient-purple': 'linear-gradient(135deg, #a855f7 0%, #d8b4fe 100%)',
      },
      colors: {
        primaryColor: "#a855f7",
        primaryLight: "#d8b4fe",
        primaryExtraLight: "#a855f780",
        secondaryColor: "#c084fc",
        secondaryLight: "rgba(168, 95, 240, 0.7)",
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
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 5px rgba(168, 95, 240, 0.5), 0 0 10px rgba(168, 95, 240, 0.5), 0 0 15px rgba(168, 95, 240, 0.5)',
          },
          '50%': {
            'box-shadow': '0 0 10px rgba(168, 95, 240, 0.7), 0 0 20px rgba(168, 95, 240, 0.7), 0 0 30px rgba(168, 95, 240, 0.7)',
          },
          '100%': {
            'box-shadow': '0 0 5px rgba(168, 95, 240, 0.5), 0 0 10px rgba(168, 95, 240, 0.5), 0 0 15px rgba(168, 95, 240, 0.5)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.05)',
          },
        },
      },
      animation: {
        blur: "blur 0.5s ease-in-out forwards",
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'glow': 'glow 1.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [fluid],
};
export default config;
