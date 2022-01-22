import React from "react"
import { PrismicRichText } from '@prismicio/react'
import Layout from "../../components/layout"
import { graphql } from 'gatsby'

export default function NewsletterArticle({ ...props }) {

    if (!props.data) return null
    const document = props.data.prismicArticle.data

    const formattedDate = new Date(document.date).toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <Layout
            headTitle="Newsletter">
            <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=fiducia"></script>
            <div className="container">
                <img src={document.image.thumbnails.banner.url} alt={document.image.alt} />
                <h1 className="blue-title">{document.title.text}</h1>
                <p className='article-date'>{formattedDate}</p>

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
            query NewsletterArticle($articleId: String) {
                prismicArticle(id: {eq: $articleId }) {
                data {
                title {
                text
            }
            date
            image {
                thumbnails {
                    banner {
                        url
                }
            }
          alt
        }
            content {
                richText
            }
      }
    }
  }
`