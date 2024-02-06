export const convertTags = (project: object) => {
    const tTags: { slug: any; name: any; }[] = [];
    project.tags.forEach((tag: { item: { name: any; slug: any }; }) => {
        tTags.push({slug: tag.item.slug, name: tag.item.name})
    })
    return tTags
}