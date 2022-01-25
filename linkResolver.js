exports.linkResolver = (doc) => {
    // // URL for a category type
    // if (doc.type === 'category') {
    //     return `/category/${doc.uid}`
    // }

    // // URL for a product type
    // if (doc.type === 'product') {
    //     return `/product/${doc.uid}`
    // }


    // URL for a page type
    if (doc.type === 'article-immobilier') {
        return `/immobilier/${doc.uid}`
    }

    // URL for a page type
    if (doc.type === 'article-newsletter') {
        return `/newsletter/${doc.uid}`
    }

    // Backup for all other types
    return '/'
}