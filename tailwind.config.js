const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {

        extend: {
            colors:{
                pbackground:"#1c1831",
                pgreen:"#3bc49b",
                ppurple:"#7e2efa"

            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
