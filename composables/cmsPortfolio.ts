export const fetchPortfolioPreview = async (limit: number = 3, category_id?: number, tag_id?: number, ) => {
    const filters = {
        status: {
            _eq: "published"
        }
    }
    if (category_id) {
        filters.category = {_eq: category_id}
    }
    if (tag_id) {
        filters.tags = {_eq: tag_id}
    }
    const {getItems} = useDirectusItems();
    return await getItems({
        collection: 'portfolio',
        params: {
            limit,
            fields: ['description', 'title', 'id', 'preview_only', 'short_description', 'short_title', 'tags.item.*', 'preview_middle_img.*', 'category.*'],
            filter: filters
        }
    })
}
export const fetchCategoriesPortfolio = async () => {
    const {getItems} = useDirectusItems();
    return await getItems({
        collection: 'portfolio_cats',
        params: {
            fields: ['*.*'],
        }
    })
}
export const fetchTagsPortfolio = async () => {
    const {getItems} = useDirectusItems();
    return await getItems({
        collection: 'portfolio_tags',
        params: {
            fields: ['*.*'],
        }
    })
}
export const fetchPortfolioById = async (id: string) => {
    const {getItemById} = useDirectusItems();
    return await getItemById({
        collection: 'portfolio',
        params: {
            fields: ['description', 'title', 'id', 'preview_only', 'short_description', 'short_title', 'tags.item.*', 'background_img.*', 'sections.item.*.*', '*.*']
        },
        id
    })
}

export const fetchPortfolioSettings = async () => {
    const {getSingletonItem} = useDirectusItems();
    return await getSingletonItem({
        collection: 'portfolio_settings',
        params: {
            fields: ['default_output_count', 'title', 'description',]
        }
    })
}