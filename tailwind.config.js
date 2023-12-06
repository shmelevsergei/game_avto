/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: 'Roboto, sans-serif'
			}
		},
		
		screens: {
			'sm': '640px',
			'lg': '1024px'
		},
		
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'lg': '1024px'
			}
		}
	}
}
