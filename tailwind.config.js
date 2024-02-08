/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.php', './views/**/*.php', './**/*.js', './**/*.html'],
	theme: {
		extend: {
			colors: {
				main: {
					400: '#293656',
				},
				secondary: {
					400: '#abac76',
				},
			},
      fontFamily:{
        handWritting:['Allison', 'cursive'],
        text:['Jost', 'sans-serif']
        
      }
		},
	},
	plugins: [],
}
