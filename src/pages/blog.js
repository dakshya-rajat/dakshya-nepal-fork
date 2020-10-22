import React from "react"

import Layout from "../sections/layout"
import SEO from "../components/seo"
import Blog from "../sections/blog"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Blog" />
      <Blog title="All Blogs" data={data} />
    </Layout>
  )
}

export const query = graphql`
  {
    allGoogleDocs {
      nodes {
        name
        path
        childMarkdownRemark {
          timeToRead
        }
        cover {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
