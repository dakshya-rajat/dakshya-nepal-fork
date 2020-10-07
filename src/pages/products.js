import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import ProductList from "../sections/productList"

export default () => {
  return (
    <Layout active="products">
      <SEO title="Products" />
      <ProductList />
    </Layout>
  )
}
