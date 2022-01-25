import { Link } from 'gatsby'
import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import ArticleCard from '../../components/ArticleCard'
import Layout from "../../components/layout"

export default function RealEstate({ data }) {

  if (!data) return null

  const documents = data.allPrismicArticleImmobilier.nodes

  const orderedDocuments = documents.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.data.date) - new Date(a.data.date)
  })

  return (
    <Layout
      headTitle="Immobilier">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fiducia - Immobilier</title>
        <link rel="canonical" href="https://fiducia-cf.com/immobilier" />
      </Helmet>
      <div className="container">
        {!orderedDocuments.length ?
          <p>Aucun article à afficher</p>
          : orderedDocuments.map(element => {
            return (
              <Link key={element.id} to={`/immobilier/${element.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ArticleCard
                  realEstate={true}
                  title={element.data.title.text}
                  img={element.data.image.thumbnails.CardImage.url}
                  alt={element.data.image.alt}
                  price={element.data.price.text}
                  surface={element.data.surface.text}
                  numberOfRooms={element.data.number_of_rooms.text}
                  propertyType={element.data.type.text}
                  localisation={element.data.localisation.text}
                  description={element.data.description.text}
                /></Link>)
          })}
      </div>
    </Layout>
  )
}

export const query = graphql`
 query RealestateArticles {
  allPrismicArticleImmobilier {
    totalCount
    nodes {
      id
      data {
        title {
          text
        }
        image {
          thumbnails {
            CardImage {
              url
            }
          }
          alt
        }
        price {
          text
        }
        number_of_rooms {
          text
        }
        localisation {
          text
        }
        surface {
          text
        }
        description {
          text
        }
        type {
          text
        }
      }
    }
  }
}
`
