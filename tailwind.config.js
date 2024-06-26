// /** @type {import('tailwindcss').Config} */

// const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = withMT({
// 	content: [
// 		"./app/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
// 		"./components/**/*.{js,ts,jsx,tsx,mdx}",

// 		// Or if using `src` directory:
// 		"./src/**/*.{js,ts,jsx,tsx,mdx}",
// 	],
// 	theme: {
// 		extend: {
// 			screens: {
// 				sm: "300px",
// 				md: "768px",
// 				lg: "1024px",
// 				xl: "1280px",
// 			},
// 			fontFamily: {
// 				abel: ["Abel", "sans-serif"],
// 				noto: ["Noto Serif", "serif"],
// 				encode: ["Encode Sans Semi Condensed", "sans-serif"],
// 			},
// 			colors: {
// 				primary: "#C7C945",
// 				accent: "#4A5568",
// 				secondary: "#C2C8DA",
// 			},
// 		},
// 	},
// 	plugins: [],
// });

// /** @type {import('tailwindcss').Config} */

// module.exports = {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {
// 			screens: {
// 				sm: "300px",
// 				md: "768px",
// 				lg: "1024px",
// 				xl: "1280px",
// 			},
// 			fontFamily: {
// 				abel: ["Abel", "sans-serif"],
// 				noto: ["Noto Serif", "serif"],
// 				encode: ["Encode Sans Semi Condensed", "sans-serif"],
// 			},
// 			colors: {
// 				primary: "#C7C945",
// 				accent: "#4A5568",
// 				secondary: "#C2C8DA",
// 			},
// 		},
// 	},
// };

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "300px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			fontFamily: {
				abel: ["Abel", "sans-serif"],
				noto: ["Noto Serif", "serif"],
				encode: ["Encode Sans Semi Condensed", "sans-serif"],
			},
			colors: {
				primary: "#C7C945",
				accent: "#4A5568",
				secondary: "#C2C8DA",
			},
		},
	},
};
