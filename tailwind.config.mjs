/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			fontJeju: 'var(--font-Jeju)',
  			fontIrian: 'var(--font-Irian)',
  			fontIsland: 'var(--font-Island)'
  		},
  		width: {
  			containeritemsWidth: '1798px',
  			containerSectionWidth: '214px',
  			ServiceItem: '299px',
  			productArticleWidth: '1046px'
  		},
  		height: {
  			headerHeight: '500px',
  			mainOneHeight: '581px',
  			containerSectionHeight: '270px',
  			AboutUSHeight: '348px',
  			ServiceItemHeight: '294px',
  			HeightDefault: '100vh',
  			HeightArticleProduct: '850px'
  		},
  		letterSpacing: {
  			spaceTitle: '0.2em'
  		},
  		colors: {
  			backgroundMain: 'var(--background-main)',
  			backgroundArticle: 'var(--background-article)',
  			backgroundSection: 'var(--background-section)',
  			backgroundAboutUs: 'var(--background-AboutUs)',
  			backgroundServices: 'var(--background-Services)',
  			backgroundServicesItems: 'var(--background-ServicesItems)',
  			backgroundFooter: 'var(--background-Footer)',
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
