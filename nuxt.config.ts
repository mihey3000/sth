// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    compatibilityDate: '2025-10-06',
    devServer: {
        port: 3020,
        strictPort: true
    },
    modules: [
        '@nuxtjs/seo',
        '@nuxtjs/tailwindcss',
        '@nuxt/ui',
        '@nuxt/image',
        '@vueuse/nuxt',
        '@nuxtjs/google-fonts',
        '@nuxtjs/robots',
        '@nuxtjs/sitemap'
    ],
    site: {
        url: 'https://стереохит.рф',
        name: 'Стерео-Хит',
        description: 'Профессиональная кавер группа в ХМАО-Югра'
    },
    seo: {
        redirectToCanonicalSiteUrl: true
    },
    ogImage: false,
    googleFonts: {
        families: {
            'Montserrat': [400, 500, 600, 700, 800, 900],
            'Open+Sans': [300, 400, 500, 600, 700],
            'Playfair+Display': [400, 500, 600, 700, 800, 900]
        }
    },
    robots: {
        disallow: ['/thanks', '/services', '/reviews'],
        allow: ['/'],
        sitemap: ['/sitemap.xml']
    },
    sitemap: {
        exclude: ['/thanks', '/services', '/reviews']
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'Стерео-Хит - Кавер группа для корпоративов, свадеб и праздников',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Профессиональная кавер группа Стерео-Хит. Выступления на корпоративах, свадьбах, днях рождения. Качественная музыка и незабываемые эмоции.'
                },
                { name: 'keywords', content: 'кавер группа, корпоративы, свадьбы, музыка, выступления, Стерео-Хит' }
            ],
            link: []
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
