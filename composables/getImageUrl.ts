export const getImageUrl = (imgData: object): string => {
    return `https://geek-flow.ru/cms/assets/${imgData.id}/${imgData.filename_download}`;
}