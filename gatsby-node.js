exports.createPages = async function ({ actions, graphql }) {
  const { data: dataRealEstate } = await graphql(`
    query RealestateArticles {
        allPrismicArticleImmobilier {
          nodes {
            id
          }
        }
      }
`)
  const { data: dataNewsletter } = await graphql(`
query RealestateArticles {
    allPrismicArticle {
      nodes {
        id
      }
    }
  }
`)

  dataRealEstate.allPrismicArticleImmobilier.nodes.forEach(article => {
    actions.createPage({
      path: `/immobilier/${article.id}`,
      component: require.resolve(`./src/pages/immobilier/[articleId].js`),
      // values in the context object are passed in as variables to page queries
      context: {
        articleId: article.id,
      },
    })
  })

  dataNewsletter.allPrismicArticle.nodes.forEach(article => {
    actions.createPage({
      path: `/newsletter/${article.id}`,
      component: require.resolve(`./src/pages/newsletter/[articleId].js`),
      // values in the context object are passed in as variables to page queries
      context: {
        articleId: article.id,
      },
    })
  })
}
