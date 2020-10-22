import React from "react"

import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../sections/layout"
import Slider from "../sections/slider"
import Features from "../sections/features"
import OnlineClasses from "../sections/onlineClasses"
import Blog from "../sections/blog"
import CtaBox from "../sections/ctaBox"
import ClientSection from "../sections/clientSection"
import Testimonial from "../sections/testimonial"
import Newsletter from "../sections/newsletter"

export default ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Slider />
      <Features />
      <OnlineClasses />
      <Blog title="blog" url="/blog" data={data} />
      <CtaBox />
      <ClientSection />
      <Testimonial />
      <Newsletter />
    </Layout>
  )
}

export const query = graphql`
  {
    allGoogleDocs(limit: 3) {
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
