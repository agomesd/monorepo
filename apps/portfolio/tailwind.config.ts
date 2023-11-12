import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1440px'
			}
		},
		extend: {
			dropShadow: {
				svelte: ['0px 0px 3px #aa1e1e', '0px 0px 3px #aa1e1e'],
				tailwind: ['0px 0px 3px #0ED7B5', '0px 0px 3px #0ED7B5'],
				melt: ['0px 0px 3px #F7B155', '0px 0px 3px #F7B155'],
				fly: ['0px 0px 3px #ba7bf0', '0px 0px 3px #ba7bf0']
			},
			colors: {
				border: 'var(--border)',
				input: {
					DEFAULT: 'var(--input)',
					invalid: 'var(--input-invalid)'
				},
				ring: {
					DEFAULT: 'var(--ring)',
					invalid: 'var(--foreground-danger)'
				},
				background: 'var(--background)',
				foreground: {
					DEFAULT: 'var(--foreground)',
					danger: 'var(--foreground-danger)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				warning: {
					DEFAULT: 'var(--warning)',
					foreground: 'var(--warning-foreground)'
				},
				success: {
					DEFAULT: 'var(--success)',
					foreground: 'var(--success-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				}
			},
			fontSize: {
				'2xs': '10px',
				'3xs': '8px',
				'4xs': '7px',
				'5xs': '4px'
			},
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol'
				],
				mono: [
					'ui-monospace',
					'SFMono-Regular',
					'SF Mono',
					'Menlo',
					'Consolas',
					'Liberation Mono',
					'monospace'
				]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						code: {
							position: 'relative',
							borderRadius: theme('borderRadius.md')
						}
					}
				}
			})
		}
	},

	plugins: [
		typography,
		plugin(function ({ addVariant, matchUtilities, theme }) {
			addVariant('hocus', ['&:hover', '&:focus']);
			// Square utility
			matchUtilities(
				{
					square: (value) => ({
						width: value,
						height: value
					})
				},
				{ values: theme('spacing') }
			);
		})
	]
} satisfies Config;
