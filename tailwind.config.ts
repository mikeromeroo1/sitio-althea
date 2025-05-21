import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(187, 55%, 42%)',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(142, 60%, 45%)',
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
					DEFAULT: 'hsl(250, 50%, 55%)',
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
				althea: {
					50: 'hsl(187, 55%, 95%)',
					100: 'hsl(187, 55%, 90%)',
					200: 'hsl(187, 55%, 80%)',
					300: 'hsl(187, 55%, 70%)',
					400: 'hsl(187, 55%, 60%)',
					500: 'hsl(187, 55%, 42%)',
					600: 'hsl(187, 55%, 35%)',
					700: 'hsl(187, 55%, 28%)',
					800: 'hsl(187, 55%, 21%)',
					900: 'hsl(187, 55%, 14%)',
				},
				green: {
					50: 'hsl(142, 60%, 95%)',
					100: 'hsl(142, 60%, 90%)',
					200: 'hsl(142, 60%, 80%)',
					300: 'hsl(142, 60%, 70%)',
					400: 'hsl(142, 60%, 60%)',
					500: 'hsl(142, 60%, 45%)',
					600: 'hsl(142, 60%, 38%)',
					700: 'hsl(142, 60%, 31%)',
					800: 'hsl(142, 60%, 24%)',
					900: 'hsl(142, 60%, 17%)',
				},
				gray: {
					50: '#F7F7F7',
					100: '#EBEBEB',
					200: '#D6D6D6',
					300: '#C2C2C2',
					400: '#ADADAD',
					500: '#9D9D9D',
					600: '#7E7E7E',
					700: '#5E5E5E',
					800: '#3F3F3F',
					900: '#1F1F1F',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-20px)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'bounce': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'pulse': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'bounce': 'bounce 2s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
