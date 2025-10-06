/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#116466', // Глубокий темно-бирюзовый
                accent: '#FFCB9A', // Мягкий персиковый
                secondary: '#D9B08C', // Теплый бежевый
                text: '#2C3531', // Темно-серый
                bg: '#ffffff',
                light: '#D1E8E2', // Светло-мятный
                soft: '#f8f9fa', // Очень светлый серый
                warm: '#FFCB9A', // Персиковый
                dark: '#2C3531', // Темно-серый
                teal: '#116466', // Основной бирюзовый
                peach: '#FFCB9A', // Персиковый
                beige: '#D9B08C', // Бежевый
                mint: '#D1E8E2', // Мятный
                // Дополнительные цвета для замены синих и желтых
                blue: '#116466', // Заменяем синий на бирюзовый
                yellow: '#FFCB9A', // Заменяем желтый на персиковый
                indigo: '#116466', // Заменяем индиго на бирюзовый
                orange: '#D9B08C', // Заменяем оранжевый на бежевый
                green: '#116466', // Заменяем зеленый на бирюзовый
                gray: {
                    50: '#f8f9fa',
                    100: '#D1E8E2',
                    200: '#e9ecef',
                    300: '#dee2e6',
                    400: '#ced4da',
                    500: '#adb5bd',
                    600: '#6c757d',
                    700: '#495057',
                    800: '#2C3531',
                    900: '#212529'
                }
            },
            fontFamily: {
                'sans': ['Open Sans', 'sans-serif'],
                'heading': ['Montserrat', 'sans-serif'],
                'display': ['Playfair Display', 'serif']
            }
        }
    },
    plugins: []
}
