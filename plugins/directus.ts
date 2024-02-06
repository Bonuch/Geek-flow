import { Directus } from '@directus/sdk';
const directus = new Directus('https://geek-flow.ru/cms');

export default defineNuxtPlugin(() => {
    return {
        provide: { directus: directus },
    };
});