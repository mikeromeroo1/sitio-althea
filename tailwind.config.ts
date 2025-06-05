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
					DEFAULT: 'hsl(210, 88%, 45%)',
					50: 'hsl(210, 100%, 97%)',
					100: 'hsl(210, 95%, 93%)',
					200: 'hsl(210, 90%, 85%)',
					300: 'hsl(210, 88%, 75%)',
					400: 'hsl(210, 86%, 60%)',
					500: 'hsl(210, 88%, 45%)',
					600: 'hsl(210, 90%, 38%)',
					700: 'hsl(210, 92%, 30%)',
					800: 'hsl(210, 94%, 22%)',
					900: 'hsl(210, 96%, 15%)',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(142, 76%, 36%)',
					50: 'hsl(142, 70%, 95%)',
					100: 'hsl(142, 72%, 90%)',
					200: 'hsl(142, 74%, 80%)',
					300: 'hsl(142, 75%, 65%)',
					400: 'hsl(142, 76%, 50%)',
					500: 'hsl(142, 76%, 36%)',
					600: 'hsl(142, 78%, 28%)',
					700: 'hsl(142, 80%, 22%)',
					800: 'hsl(142, 82%, 16%)',
					900: 'hsl(142, 84%, 12%)',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(230, 76%, 60%)',
					50: 'hsl(230, 70%, 96%)',
					100: 'hsl(230, 72%, 92%)',
					200: 'hsl(230, 74%, 84%)',
					300: 'hsl(230, 75%, 75%)',
					400: 'hsl(230, 76%, 67%)',
					500: 'hsl(230, 76%, 60%)',
					600: 'hsl(230, 78%, 52%)',
					700: 'hsl(230, 80%, 44%)',
					800: 'hsl(230, 82%, 36%)',
					900: 'hsl(230, 84%, 28%)',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Medical-themed color palette
				medical: {
					blue: {
						50: 'hsl(210, 100%, 97%)',
						100: 'hsl(210, 95%, 93%)',
						200: 'hsl(210, 90%, 85%)',
						300: 'hsl(210, 88%, 75%)',
						400: 'hsl(210, 86%, 60%)',
						500: 'hsl(210, 88%, 45%)',
						600: 'hsl(210, 90%, 38%)',
						700: 'hsl(210, 92%, 30%)',
						800: 'hsl(210, 94%, 22%)',
						900: 'hsl(210, 96%, 15%)',
					},
					green: {
						50: 'hsl(142, 70%, 95%)',
						100: 'hsl(142, 72%, 90%)',
						200: 'hsl(142, 74%, 80%)',
						300: 'hsl(142, 75%, 65%)',
						400: 'hsl(142, 76%, 50%)',
						500: 'hsl(142, 76%, 36%)',
						600: 'hsl(142, 78%, 28%)',
						700: 'hsl(142, 80%, 22%)',
						800: 'hsl(142, 82%, 16%)',
						900: 'hsl(142, 84%, 12%)',
					},
					purple: {
						50: 'hsl(230, 70%, 96%)',
						100: 'hsl(230, 72%, 92%)',
						200: 'hsl(230, 74%, 84%)',
						300: 'hsl(230, 75%, 75%)',
						400: 'hsl(230, 76%, 67%)',
						500: 'hsl(230, 76%, 60%)',
						600: 'hsl(230, 78%, 52%)',
						700: 'hsl(230, 80%, 44%)',
						800: 'hsl(230, 82%, 36%)',
						900: 'hsl(230, 84%, 28%)',
					}
				},
				// Refined grayscale
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
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
				sm: 'calc(var(--radius) - 4px)',
				'xl': '1rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.1' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'7xl': ['4.5rem', { lineHeight: '1.1' }],
				'8xl': ['6rem', { lineHeight: '1.1' }],
				'9xl': ['8rem', { lineHeight: '1.1' }],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			boxShadow: {
				'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
				'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 40px -5px rgba(0, 0, 0, 0.06)',
				'strong': '0 10px 50px -12px rgba(0, 0, 0, 0.15), 0 20px 60px -10px rgba(0, 0, 0, 0.1)',
				'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
				'glow-green': '0 0 20px rgba(34, 197, 94, 0.15)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-medical': 'linear-gradient(135deg, hsl(210 88% 45%) 0%, hsl(190 85% 48%) 100%)',
				'gradient-success': 'linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(158 74% 42%) 100%)',
				'gradient-hero': 'linear-gradient(135deg, hsl(210 100% 97%) 0%, hsl(210 88% 95%) 30%, hsl(210 60% 92%) 100%)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-6px)' },
				},
				'float-subtle': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-8px) rotate(1deg)' },
					'50%': { transform: 'translateY(-12px) rotate(0deg)' },
					'75%': { transform: 'translateY(-8px) rotate(-1deg)' },
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' },
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'section-reveal': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'rotate-in': {
					'0%': { opacity: '0', transform: 'rotate(-10deg)' },
					'100%': { opacity: '1', transform: 'rotate(0deg)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'bounce 2s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'float-subtle': 'float-subtle 4s ease-in-out infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'section-reveal': 'section-reveal 1s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'rotate-in': 'rotate-in 0.6s ease-out',
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'1200': '1200ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
