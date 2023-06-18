export const APPCOLORS = {
    primary: "#7f7eff",
    secondary: "#210b2c",
    backup: "#55286f",
    backupOpacity90: "rgba( 85, 40, 111, 0.9)",
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
