/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Views/**/*.{razor,html,cshtml}',
        './wwwroot/js/**/*.js',
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ]
}