/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				primary: "#00AA9E",
				secondary: "#6366f1",
				terciary:"#E63946",
				cuaternary:"#facc15",
			},
		},
	},
	plugins: [],
}
