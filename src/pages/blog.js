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
    allCockpitBlog(filter: { lang: { eq: "en" } }) {
      edges {
        node {
          fields {
            path
          }
          title {
            value
          }
          category {
            value
          }
          timeToRead {
            value
          }
          coverImage {
            value {
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
  }
`
