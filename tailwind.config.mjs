/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				primary: "#00AA9E",
				secondary: "#457B9D",
				accent: "#E63946",
			},
		},
	},
	plugins: [],
}
