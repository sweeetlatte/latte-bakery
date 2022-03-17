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
            },
        },
        fontFamily: {
            brand: "MuseoModerno",
            title: "Niconne",
            body: "Mulish",
        },
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
