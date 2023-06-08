export const APPCOLORS = {
    primary: "#7f7eff",
    secondary: "#210b2c",
    backup: "#55286f",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                ...APPCOLORS,
            },
            borderColor: {
                ...APPCOLORS,
            },
        },
    },
    plugins: [],
}
