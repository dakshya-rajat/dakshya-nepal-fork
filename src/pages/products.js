import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout active="products">
      <SEO title="Products" />
      <h1>Products page</h1>
    </Layout>
  )
}
