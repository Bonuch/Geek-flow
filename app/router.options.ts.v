import type {RouterOptions} from '@nuxt/schema';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterOptions>{
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/pages/index.vue'),
        },
        {
            name: 'kontakty',
            path: '/kontakty',
            component: () => import('~/pages/kontakty.vue'),
        },
        {
            name: 'privacyPolicy',
            path: '/privacy-policy',
            component: () => import('~/pages/privacy-policy.vue'),
        },
        {
            name: 'uslugi',
            path: '/uslugi',
            component: () => import('~/pages/uslugi/index.vue'),
            children: [
            ]
        },
        {
            name: 'kontekstnayaReklama',
            path: 'kontekstnaya-reklama',
            component: () => import('~/pages/uslugi/prodvizhenie/kontekstnaya-reklama.vue'),
        },
        {
            name: 'seo',
            path: 'prodvizhenie/seo',
            component: () => import('~/pages/uslugi/prodvizhenie/seo.vue'),
        },
        {
            name: 'gotovyeResenia',
            path: 'razrabotka/gotovye-resenia',
            component: () => import('~/pages/uslugi/razrabotka/gotovye-resenia.vue'),
        },
        {
            name: 'individualnaya',
            path: 'razrabotka/individualnaya',
            component: () => import('~/pages/uslugi/razrabotka/individualnaya.vue'),
        },
        {
            name: 'noCode',
            path: 'razrabotka/no-code',
            component: () => import('~/pages/uslugi/razrabotka/no-code.vue'),
        },
        {
            name: 'blog',
            path: '/blog',
            component: () => import('~/pages/blog/index.vue'),
            children: [
            ]
        },
        {
            name: 'portfolio',
            path: '/portfolio',
            component: () => import('~/pages/portfolio/index.vue'),
            children: [
            ]
        },
    ],
};
