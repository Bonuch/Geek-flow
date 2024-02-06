
export default defineEventHandler(async (event) => {
    const {$directus} = await useNuxtApp()
    const {data} =  await $directus.items('settings_global').readByQuery()
    return data
    /*const {getSingletonItem} = useDirectusItems();
    try {
        return await getSingletonItem<SettingsGlobal>({collection: 'settings_global'});
    } catch (e) {
        return {};
    }*/
})