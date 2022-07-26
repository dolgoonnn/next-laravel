const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {

        extend: {
            colors:{
                pbackground:"#201B44",
                pgreen:"#3bc49b",
                ppurple:"#7e2efa",
                sbackground:"#201c3c"
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
