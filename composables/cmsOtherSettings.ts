export const fetchUslugiSettings = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'uslugi_settings',
        params: {
            fields: ['*.*.*']
        }
    })
}
export const fetchContactsSettings = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'kontakty_settings',
        params: {
            fields: ['*.*.*']
        }
    })
}
export const fetchAppsFormSettings = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'app_form_settings',
        params: {
            fields: ['*.*.*']
        }
    })
}