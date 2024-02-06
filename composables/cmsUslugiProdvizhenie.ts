export const fetchSeo = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'seo',
        params: {
            fields: ['*.*.*']
        }
    })
}
export const fetchKontekstnayaReklama = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'kr',
        params: {
            fields: ['*.*.*']
        }
    })
}