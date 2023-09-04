/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		colors: {
			current: "currentColor",
			"neutral-400": "#f4f4f4",
			"neutral-500": "#252422",
			"accent-400": "#f9cdcd",
		},
		extend: {},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"translate-z": (value) => ({
						"--tw-translate-z": value,
						transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
					}), // this is actual CSS
				},
				{ values: theme("translate"), supportsNegativeValues: true }
			);
		}),
	],
};
