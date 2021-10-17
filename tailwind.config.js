module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                "-10": "-10",
                "-20": "-20",
                "-30": "-30",
                "-40": "-40",
                "-50": "-50",
                "-100": "-100",
                100: "100",
            },
            inset: {
                "1/5": "20%",
                "1/6": "16.666667%",
                "1/8": "12.5%",
                "1/10": "10%",
            },
            padding: {
                full: "100%",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: [],
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
