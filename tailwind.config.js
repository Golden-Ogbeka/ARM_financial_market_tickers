/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor: {
				blue: '#4F9CF9',
				yellow: '#FFE492',
				darkBlue: '#0a2640',
				primary: '#212529',
			},
			fontFamily: {
				primary: 'Open sans',
				secondary: 'Manrope',
			},
			backgroundColor: {
				primary: '#4F9CF9',
				secondary: '#65e4a3',
				lightBlue: '#C4DEFD',
				darkBlue: '#043873',
			},
			borderColor: {
				secondary: '#65e4a3',
			},
		},
	},
	plugins: [],
};
