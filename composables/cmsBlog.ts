export const fetchBlogPreview = async (limit: number = 3) => {
    const {getItems} = useDirectusItems();
    return await getItems({
        collection: 'post',
        params: {
            limit,
            fields: ['description', 'title', 'id', 'reading_time',
                'short_description', 'short_title', 'tags.item.*', 'preview_img.*'],
            filter: {status: "published"},
        }
    })
}

export const fetchBlogById = async (id: string) => {
    const {getItemById} = useDirectusItems();
    return await getItemById({
        collection: 'post',
        params: {
            fields: ['description', 'title', 'id', 'reading_time', 'short_description', 'short_title',
                'tags.item.*', 'preview_img.*', 'post_sections.item.*.*', '*.*'],
        },
        id
    })
}
export const fetchBlogSettings = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'blog_settings',
        params: {
            fields: ['*.*.*']
        }
    })
}