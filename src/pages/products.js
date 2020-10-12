import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import ProductList from "../sections/productList"
import CtaBox from "../sections/ctaBox"

export default () => {
  return (
    <Layout active="products">
      <SEO title="Products" />
      <ProductList />
      <CtaBox marginBottom />
    </Layout>
  )
}
