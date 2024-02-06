import {acceptHMRUpdate, defineStore} from "pinia";

export const useSettingStore = defineStore({
    id: 'settings-store',
    state: () => ({
        title: 'GeekFlow',
        description: 'GeekFlow',
        assetsBasePath: 'https://geek-flow.ru/cms/assets',
        logoName: 'GeekFlow',
        logoNameDefault: 'GeekFlow',
        logoHeader: '',
        logoFooter: '',
        favicons: [],
        phone: '8 800 555 35 35',
        email: 'order@geekflow.ru',
        telegramText: '@geekflow',
        telegramLink: 'https://t.me/geekflow',
        css_head: '',
        css_footer: '',
        js_head: '',
        js_footer: '',
        privacy_policy: '',
        socials: [
            {name: 'телеграм', link: '#', username: ''},
            {name: 'вконтакте', link: '#', username: ''},
            {name: 'linkedIn', link: '#', username: ''},
            {name: 'vc.ru', link: '#', username: ''},
            {name: 'инстаграм', link: '#', username: ''},
        ],
        breef: '',
        footerAdditionalText: '',
        primaryTextColor: '#fff',
        headerBorder: false,
        menuActive: false,
        menuDefaultPortfolio: [
            {
                name: 'Портфолио',
                items: [
                    {
                        name: 'Все проекты', slug: '/portfolio'
                    },
                ]
            },
        ],
        menu: [
            {
                name: 'Услуги',
                link: '/uslugi',
                active: false,
            },
            // {
                // name: 'Портфолио',
                // link: '#',
                // active: false,
                // subs:
                    // [
                        // {
                        //     name: 'Портфолио',
                        //     slug: '/portfolio',
                        //     items: [
                        //         {
                        //             name: 'Все проекты', slug: '/portfolio'
                        //         },
                        //     ]
                        // },
                    /*{
                        title: 'Разработка',
                        items: [
                            {name: 'Сайты', link: '#'},
                            {name: 'Лендинги', link: '#'},
                        ]
                    },*/
                    /*{
                        title: 'Дизайн',
                        items: [
                            {name: 'Логотипы', link: '#'},
                            {name: 'Фирстили', link: '#'},
                            {name: 'Айдентика', link: '#'},
                        ]
                    }, */
                    /*{
                        title: 'Продвижение',
                        items: [
                            {name: 'Контекстная реклама', link: '#'},
                            {name: 'SEO продвижение', link: '#'},
                            {name: 'Таргетированная реклама', link: '#'},
                        ]
                    },*/
                // ],
            // },
            {
                name: 'Контакты',
                link: '/kontakty',
                active: false,
            },
            {
                name: 'Блог',
                link: '/blog',
                active: false,
            },
        ],
        menuBottom: [{name: 'Политика конфиденциальности', link: '/privacy-policy'}],
        currentMenuActive: -1,
    }),
    getters: {
        phoneText: state => state.phone,
        phoneLink: state => {
            return state.phone.replaceAll(" ", "")
                .replaceAll("-", "")
                .replaceAll("(", "")
                .replaceAll(")", "")
        },
        socialList: state => state.socials,
        primaryColorText: state => state.primaryTextColor,
    },
    actions: {
        headerBorderOn() {
            this.headerBorder = true
        },
        headerBorderOff() {
            this.headerBorder = false
        },
        activeMenuItemChange(i: number) {
            if (this.currentMenuActive !== -1) {
                this.menu[this.currentMenuActive].active = false
            }
            this.currentMenuActive = i;
            this.menu[this.currentMenuActive].active = true
        },
        updateData(settings: SettingsGlobal) {
            // const { data: settings } = await useFetch<SettingsGlobal>('/api/settings')
            this.title = settings.title
            this.description = settings.description ? settings.description : this.description
            this.logoName = settings.logo_name ? settings.logo_name : this.logoName
            this.logoNameDefault = settings.logo_name ? settings.logo_name : this.logoNameDefault
            this.phone = settings.contact_phone ? settings.contact_phone : ''
            this.email = settings.email ? settings.email : ''
            // @ts-ignore
            this.socials = settings.socials ? settings.socials : []
            this.socials.forEach(s => {
                if (s.name === 'телеграм') {
                    this.telegramLink = s.link;
                    this.telegramText = s.username;
                }
            })
            this.footerAdditionalText = settings.footer_additional_text ? settings.footer_additional_text : ''
            this.logoHeader = settings.logo_header ? this.assetsBasePath + '/' + settings.logo_header : ''
            this.logoFooter = settings.logo_footer ? this.assetsBasePath + '/' + settings.logo_footer : ''
            if (settings.favicon_16) {
                this.favicons.push({size: 16, link: this.assetsBasePath + '/' + settings.favicon_16})
            }
            if (settings.favicon_32) {
                this.favicons.push({size: 32, link: this.assetsBasePath + '/' + settings.favicon_32})
            }
            if (settings.favicon_96) {
                this.favicons.push({size: 96, link: this.assetsBasePath + '/' + settings.favicon_96})
            }
            if (settings.favicon_120) {
                this.favicons.push({size: 120, link: this.assetsBasePath + '/' + settings.favicon_120})
            }
            this.logoFooter = settings.logo_footer ? this.assetsBasePath + '/' + settings.logo_footer : ''
            this.breef = settings.breef ? this.assetsBasePath + '/' + settings.breef : ''
            this.css_head = settings.css_head ? settings.css_head : ''
            this.css_footer = settings.css_footer ? settings.css_footer : ''
            this.js_head = settings.js_head ? settings.js_head : ''
            this.js_footer = settings.js_footer ? settings.js_footer : ''
            this.privacy_policy = settings.privacy_policy ? settings.privacy_policy : ''
        },
        updateMenuPortfolio(portfolioMenu: { tags: any[]; name: any; slug: any; }[]){
            this.menu.forEach(iMenu => {
                if (iMenu.name === 'Портфолио'){
                    iMenu.subs = [...this.menuDefaultPortfolio]
                    portfolioMenu.reverse()
                    portfolioMenu.forEach((iPortfolioMenu) => {
                        const items = []
                        iPortfolioMenu.cats.forEach(tag => {
                            items.push({
                                name: tag.name, slug: '/portfolio/c-'+iPortfolioMenu.slug+'/'+tag.slug,
                                id: tag.id
                            })
                        })
                        iMenu.subs.push({
                            name: iPortfolioMenu.name,
                            slug: '/portfolio/c-'+iPortfolioMenu.slug,
                            id: iPortfolioMenu.id,
                            items
                        })
                    })
                }
            })
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot))
}