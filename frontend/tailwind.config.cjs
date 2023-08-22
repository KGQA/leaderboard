const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#8b5cf6',
					secondary: '#fcd34d',
					accent: '#38bdf8',
					neutral: '#38bdf8',
					'base-100': '#f3f4f6',
					info: '#0ea5e9',
					success: '#36d399',
					warning: '#f59e0b',
					error: '#e11d48'
				}
			}
		]
	},
	plugins: [typography, daisyui]
};

module.exports = config;
