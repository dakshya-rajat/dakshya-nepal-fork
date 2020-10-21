import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import { Box } from "grommet"
import Text from "../components/text"
import Heading from "../components/heading"

export default ({ data: { post } }) => (
  <Layout>
    <SEO title={post.name} />
    <Box pad={{ horizontal: "268px" }}>
      <Box gap="small" direction="row" pad={{ top: "32px" }}>
        <Text code="sub-r" color="b2">
          {post.createdTime}
        </Text>
        <Text code="sub-r" color="b2">
          {post.childMarkdownRemark.timeToRead} mins read
        </Text>
      </Box>
      <Heading code={3} margin={{ top: "16px", bottom: "24px" }}>
        {post.name}
      </Heading>
      <Box pad={{ bottom: "24px" }}>
        <Img
          fluid={post.cover.image.childImageSharp.fluid}
          style={{ borderRadius: "4px" }}
        />
      </Box>
      <Text
        dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.html }}
        code="body"
      />
    </Box>
  </Layout>
)

export const query = graphql`
  query($path: String) {
    post: googleDocs(path: { eq: $path }) {
      childMarkdownRemark {
        html
        timeToRead
      }
      name
      createdTime(fromNow: true)
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
`
