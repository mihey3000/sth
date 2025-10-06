// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: '2025-10-06',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/ui',
        '@nuxt/image',
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            'Montserrat': [400, 500, 600, 700, 800, 900],
            'Open+Sans': [300, 400, 500, 600, 700],
            'Playfair+Display': [400, 500, 600, 700, 800, 900]
        }
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'СтереоХит - Кавер группа для корпоративов, свадеб и праздников',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Профессиональная кавер группа СтереоХит. Выступления на корпоративах, свадьбах, днях рождения. Качественная музыка и незабываемые эмоции.' },
                { name: 'keywords', content: 'кавер группа, корпоративы, свадьбы, музыка, выступления, СтереоХит' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    image: {
        quality: 80,
        format: ['webp', 'avif', 'jpeg']
    },
    tailwindcss: {
        exposeConfig: true
    }
})
