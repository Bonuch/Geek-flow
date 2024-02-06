export const fetchHome = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'home_page',
        params: {
            fields: ['*.*.*']
        }
    })
}