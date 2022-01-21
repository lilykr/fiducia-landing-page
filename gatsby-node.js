exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query RealestateArticles {
        allPrismicArticleImmobilier {
          totalCount
          nodes {
            id
            data {
              title {
                text
              }
            }
          }
        }
      }
`)
    data.allPrismicArticleImmobilier.nodes.forEach(article => {
        actions.createPage({
            path: `/immobilier/${article.id}`,
            component: require.resolve(`./src/pages/immobilier/[articleId].js`),
            // values in the context object are passed in as variables to page queries
            context: {
                articleId: article.id,
            },
        })
    })
}
