export const fetchGotovyeResenia = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'gotovye_resenia',
        params: {
            fields: ['*.*.*']
        }
    })
}
export const fetchNoCode = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'no_code',
        params: {
            fields: ['*.*.*']
        }
    })
}
export const fetchIndividualnaya = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'individualnaya',
        params: {
            fields: ['*.*.*']
        }
    })
}