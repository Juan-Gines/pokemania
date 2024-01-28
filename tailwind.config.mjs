/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF9843',
				secondary: '#FFDD95',
				tertiary: '#86A7FC',
				quaternary: '#3468C0',
			},
		},
	},
	plugins: [],
}
