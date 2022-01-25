import React from "react"
import { PrismicRichText } from '@prismicio/react'
import Layout from "../../components/layout"
import { graphql } from 'gatsby'

export default function RealEstateArticle({ ...props }) {

    if (!props.data) return null
    const document = props.data.prismicArticleImmobilier.data
    console.log('doc', document)
    return (
        <Layout
            headTitle="Immobilier">
            <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=fiducia"></script>
            <div className="container">
                <img className='image-banner' src={document.image.thumbnails.banner.url} alt={document.image.alt} />
                <h1 className="blue-title">{document.title.text}</h1>
                <div className="article-header">
                    <div className='left-column-article-header'>
                        <p>
                            Prix: {document.price.text}€
                        </p>
                        <p>
                            Type de bien: {document.type.text}
                        </p>
                        <p>
                            Localisation: {document.localisation.text}
                        </p>
                    </div>
                    <div className='right-column-article-header'>
                        <p>
                            Surface: {document.surface.text}m²
                        </p>
                        <p>
                            Nombre de pièces: {document.number_of_rooms.text}
                        </p>
                    </div>
                </div>
                <PrismicRichText field={document.content.richText} components={{
                    heading1: ({ children }) => <h2>{children}</h2>,
                    heading2: ({ children }) => <h3>{children}</h3>,
                    hyperlink: ({ children, node }) => <a className="article-link" href={node.data.url}>{children}</a>,
                    image: ({ children, node }) => <img className='article-image' src={node.url} />,
                }} />
            </div>
        </Layout>

    )

}

export const query = graphql`
            query RealEstateArticle($articleId: String) {
                prismicArticleImmobilier(id: {eq: $articleId }) {
                data {
                title {
                text
            }
            image {
                thumbnails {
                    banner {
                        url
                }
            }
          alt
        }
            localisation {
                text
            }
            number_of_rooms {
                text
            }
            price {
                text
            }
            surface {
                text
            }
            type {
                text
            }
            content {
                richText
            }
      }
    }
  }
`