// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        'nuxt-swiper',
        "nuxt-directus",
        '@nuxt/devtools',
        '@nuxtjs/html-validator',
        // '@nuxtjs/robots',
        '@nuxt/image-edge',
        // '@nuxt/image',
        '@pinia/nuxt',
        // '@splinetool/runtime',
        // '@nuxtjs/stylelint-module',
    ],
    // target: 'static',
    /*buildModules: [
        '@nuxt/image',
    ],*/
    image: {
        cms: {
            baseURL: "",
        },
    },
    swiper: {
        prefix: 'swiper-sl',
        styleLang: 'scss',
        modules: ['navigation', 'pagination'],
    },
    app: {
        head: {
            htmlAttrs: { lang: "ru-RU" },
            title: 'GeekFlow',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
        'reset-css/reset.css',
    ],
    /*vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/scss/_colors.scss";',
                },
            },
        },
    },*/
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    includePaths: ['./assets/styles/scss/'],
                },
            },
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['spline-viewer'].includes(tag),
            "types": ["@nuxt/types", "@nuxt/image"]
        },
    },
    directus: {
        url: "https://geek-flow.ru/cms",
    }
})

/*runtimeConfig: {
    apiSecret: '123',
        public: {
        apiBase: '/api'
    }
},*/

// '@nuxt/image',

// robots: {},
// directus: {},