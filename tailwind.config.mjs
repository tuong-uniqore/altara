/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                earth: {
                    50: '#FDFCF5', // Main body background (Off-white/Ivory)
                    100: '#F6F1E5', // Surface background
                    200: '#EBDDC0',
                    300: '#DFC49B',
                    400: '#C5A059', // Brass / Gold accents
                    500: '#D2A679', // Sand
                    600: '#8B5A2B', // Terracotta (Primary)
                    700: '#643F1D',
                    800: '#402812',
                    900: '#2A2A2A', // Deep dark text
                },
                fire: {
                    400: '#DF4A4A',
                    500: '#C13D3D', // Burgundy/Deep Red for CTA
                    600: '#A32F2F',
                }
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'System-ui', 'sans-serif'],
                serif: ['"Playfair Display"', 'Georgia', 'serif'],
            }
        },
    },
    plugins: [],
}
