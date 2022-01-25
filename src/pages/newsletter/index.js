import React from "react"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import ArticleCard from '../../components/articleCard'
import Layout from "../../components/layout"


export default function Newsletter({ data }) {

  if (!data) return null
  const documents = data.allPrismicArticle.nodes

  const orderedDocuments = documents.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.data.date) - new Date(a.data.date)
  })

  return (
    <Layout
      headTitle="Newsletter"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - Newsletter</title>
        <link rel="canonical" href="https://fiducia-cf.com/newsletter" />
      </Helmet>
      <div className="container">
        {orderedDocuments.map(element => {
          return (
            <Link key={element.id} to={`/newsletter/${element.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ArticleCard
                realEstate={false}
                date={element.data.date}
                title={element.data.title.text}
                img={element.data.image.thumbnails.cardImage.url}
                alt={element.data.image.alt}
                description={element.data.description.text}
              /></Link>)
        })}
      </div>

    </Layout>
  )
}

export const query = graphql`
 query NewsletterArticles {
  allPrismicArticle {
    totalCount
    nodes {
      id
      data {
        title {
          text
        }
        date
        image {
          thumbnails {
            cardImage {
              url
            }
            smallImage {
              url
            }
            banner {
              url
            }
          }
          alt
        }
        description {
          text
        }
      }
    }
  }
}


`
