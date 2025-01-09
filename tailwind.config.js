/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			creamy: "#FFF4E0",
			rich: "#D72638",
			yellow: "#F8C703",
			orange: "#F97316",
			white: "#FFFFFF",
			black: "#404040",
		},
		extend: {},
	},
	plugins: [require("daisyui")],
};
