import React from "react"
import Layout from "../../sections/layout"
import SEO from "../../components/seo"
import QbexHeading from "../../sections/qbex/qbexHeading"
import QbexFeatures from "../../sections/qbex/qbexFeatures"
import ProductShowcase from "../../sections/qbex/productShowcase"
import ContactSalesForm from "../../sections/contactSalesForm"

export default () => {
  const product = "Qbex"
  return (
    <Layout active="products">
      <SEO title={product} />
      <QbexHeading />
      <QbexFeatures />
      <ProductShowcase />
      <ContactSalesForm
        title="Contact Sales Form"
        product={product}
        image="/illustrations/Qubex.svg"
      />
    </Layout>
  )
}
