import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import Blog from "../sections/blog"

export default () => {
  return (
    <Layout active="blogs">
      <SEO title="Blogs" />
      <Blog />
    </Layout>
  )
}
