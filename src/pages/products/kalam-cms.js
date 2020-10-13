import React from "react"
import Layout from "../../sections/layout"
import SEO from "../../components/seo"
import ProductHeading from "../../sections/kalam-cms/productHeading"
import KalamFeatures from "../../sections/kalam-cms/kalamFeatures"
import ProductShowcase from "../../sections/kalam-cms/productShowcase"
import ContactSalesForm from "../../sections/contactSalesForm"

export default () => {
  return (
    <Layout active="products">
      <SEO title="Kalam CMS" />
      <ProductHeading />
      <KalamFeatures />
      <ProductShowcase />
      <ContactSalesForm title="Contact Sales Form" />
    </Layout>
  )
}
