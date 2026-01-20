/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    100: '#F9F1D8',
                    200: '#F0DEAA',
                    300: '#E6CB7D',
                    400: '#DDB85C',
                    500: '#D4AF37', // Base Gold
                    600: '#AA8C2C',
                    700: '#806921',
                    800: '#554616',
                    900: '#2B230B',
                },
                dark: {
                    900: '#050505',
                    800: '#0a0a0a',
                    700: '#121212',
                    600: '#1a1a1a',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', '"Oranienbaum"', 'serif'],
                sans: ['"Mulish"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
