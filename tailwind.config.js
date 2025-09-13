/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  			'float': {
  				'0%, 100%': { 
  					transform: 'translateY(0) rotate(0deg)' 
  				},
  				'33%': { 
  					transform: 'translateY(-20px) rotate(1deg)' 
  				},
  				'66%': { 
  					transform: 'translateY(-10px) rotate(-1deg)' 
  				}
  			},
  			'gradient-x': {
  				'0%, 100%': {
  					backgroundSize: '200% 200%',
  					backgroundPosition: 'left center'
  				},
  				'50%': {
  					backgroundSize: '200% 200%',
  					backgroundPosition: 'right center'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'expand-width': {
  				'0%': {
  					width: '0'
  				},
  				'100%': {
  					width: '100px'
  				}
  			},
  			'border-pulse': {
  				'0%, 100%': {
  					boxShadow: '0 0 0 0 rgba(34, 211, 238, 0.7), 0 0 0 0 rgba(251, 191, 36, 0.5)',
  					borderWidth: '4px'
  				},
  				'50%': {
  					boxShadow: '0 0 20px 5px rgba(34, 211, 238, 0.4), 0 0 25px 8px rgba(251, 191, 36, 0.3)',
  					borderWidth: '6px'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float': 'float 6s ease-in-out infinite',
  			'gradient-x': 'gradient-x 4s ease infinite',
  			'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
  			'expand-width': 'expand-width 1s ease-out forwards',
  			'border-pulse': 'border-pulse 3s ease-in-out infinite'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};