import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
    },
    extend: {
        fontFamily: {
            heading: ['var(--font-heading)', ...fontFamily.sans],
            body: ['var(--font-body)', ...fontFamily.sans]
        },
        colors: {
            greenBackgroundTransparent: 'rgba(0,194,120,.12)',
            redBackgroundTransparent: 'rgba(234,56,59,.12)',
            baseBackgroundL2: "rgb(32,33,39)",
            baseBackgroundL3: "rgb(32,33,39)",
            greenPrimaryButtonBackground: "rgb(0,194,120)",
            
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))'
            },
            destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))'
            },
        },
        borderRadius: {
            xl: `calc(var(--radius) + 4px)`,
            lg: `var(--radius)`,
            md: `calc(var(--radius) - 2px)`,
            sm: `calc(var(--radius) - 4px)`
        },
        keyframes: {
            "accordion-down": {
                from: { height: '0px' },
                to: { height: "var(--radix-accordion-content-height)" }
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: '0px' }
            }
        },
        animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
        },
        borderColor: {
            redBorder: 'rgba(234,56,59,.5)',
            greenBorder: 'rgba(0,194,120,.4)',
            baseBorderMed: '#cccccc',
            accentBlue: "rgb(76,148,255)",
            baseBorderLight: "rgb(32,33,39)",
            baseTextHighEmphasis: "rgb(244,244,246)"
        },
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        textColor: {
            greenPrimaryButtonText: "rgb(20,21,27)"
        }
    },
  },
  plugins: [],
};
export default config;
