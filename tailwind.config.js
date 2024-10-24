/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.html"],
	theme: {
		extend: {
			colors: {
				color: {
					1: "#C1DCDC",
					2: "#1E1E1E",
				},
			},
		},
	},
	plugins: [require("tailwindcss-debug-screens")],
};
