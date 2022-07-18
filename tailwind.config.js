module.exports = {
    // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
    // https://tailwindcss.com/docs/just-in-time-mode
    // mode: "jit",
    theme: {
        extend: {
            colors: {
                "white-rgba": "rgba(255,255,255,0.1)",
                "yellowRgba": "rgba(243,164,70,0.8)",
                "dark-bg": "#1D1E1E",
                "light": "#323232",
                "primary": "#F3A446",
                "border": "#393C49",
                "lightText": "#BEBEBE",
                "header": "#272727",
                "caption": "#ABBBC2",
                "underline": "#656870",
                "error": "#f83b3b"
            },
        },
        fontFamily: {
            brand: "MuseoModerno",
            title: "Niconne",
            body: "Mulish",
        },
        screens: {
            //max-width: desktop-first
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px)
            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px)
            // fontsize: 24 -> 20, 16 -> 14
            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px)
            // fontsize: 20 -> 18
            'md': { 'max': '767px' },
            // => @media (max-width: 767px)
            'sm': { 'max': '639px' },
            // => @media (max-width: 639px)
        }
    },
    variants: {},
    plugins: [],
    purge: {
        // Filenames to scan for classes
        content: [
            "./src/**/*.html",
            "./src/**/*.js",
            "./src/**/*.jsx",
            "./src/**/*.ts",
            "./src/**/*.tsx",
            "./dist/**/*.html",
            "./dist/**/*.js",
            "./dist/**/*.jsx",
            "./dist/**/*.ts",
            "./dist/**/*.tsx",
            "./public/index.html",
        ],
        // Options passed to PurgeCSS
        options: {
            // Whitelist specific selectors by name
            // safelist: [],
        },
    },
};
