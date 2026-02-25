/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', 'class'],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'rich-black': '#080808',
				'surface-dark': '#0d0d0d',
				gold: '#F5C518',
				'gold-light': '#FFD700',
				'gold-dark': '#B8860B',
				'gold-muted': '#8B6914',
				'neon-blue': '#F5C518',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'"Inter"',
					'sans-serif'
				]
			},
			dropShadow: {
				'glow-gold': '0 0 30px rgba(245, 197, 24, 0.55)',
				glow: '0 0 20px rgba(245, 197, 24, 0.4)'
			},
			boxShadow: {
				'gold-sm': '0 0 12px rgba(245,197,24,0.25)',
				'gold-md': '0 0 25px rgba(245,197,24,0.35)',
				'gold-lg': '0 0 45px rgba(245,197,24,0.45)'
			},
			animation: {
				marquee: 'marquee 30s linear infinite',
				'pulse-slow': 'pulse 3s ease-in-out infinite',
				'glow-pulse': 'glowPulse 2s ease-in-out infinite'
			},
			keyframes: {
				marquee: {
					'0%': {
						transform: 'translateX(0%)'
					},
					'100%': {
						transform: 'translateX(-50%)'
					}
				},
				glowPulse: {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(245,197,24,0.4), 0 0 40px rgba(245,197,24,0.2)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(245,197,24,0.8), 0 0 80px rgba(245,197,24,0.4)'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
