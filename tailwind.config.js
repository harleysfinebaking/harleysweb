/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        fontFamily: {
            opensans: ['var(--font-open-sans)', 'sans-serif'],
            lato: ['var(--font-lato)', 'sans-serif'],
            mulish: ['var(--font-mulish)', 'sans-serif'],
            outfit: ['var(--font-outfit)', 'sans-serif'],
            poppins: ['var(--font-poppins)', 'sans-serif'],
            inter: ['var(--font-inter)', 'sans-serif'],
            alumni: ['var(--font-alumni)', 'sans-serif'],
            quicksand: ['var(--font-quicksand)', 'sans-serif'],
            montserratalt: ['var(--font-montserratalt)', 'sans-serif'],
            montserrat: ['var(--font-montserrat)', 'sans-serif'],
            imperial: ['var(--font-imperial)', 'sans-serif'],
          },
        animation: {
          marquee: 'marquee 25s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }