import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import ProductsGrid from "../sections/productsGrid"

export default () => {
  return (
    <Layout active="products">
      <SEO title="Products" />
      <ProductsGrid />
    </Layout>
  )
}
