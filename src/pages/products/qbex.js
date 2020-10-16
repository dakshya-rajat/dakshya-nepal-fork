import React from "react"
import Layout from "../../sections/layout"
import SEO from "../../components/seo"
import QbexHeading from "../../sections/qbex/qbexHeading"
import QbexFeatures from "../../sections/qbex/qbexFeatures"
import ProductShowcase from "../../sections/qbex/productShowcase"
import ContactSalesForm from "../../sections/contactSalesForm"

export default () => {
  return (
    <Layout active="products">
      <SEO title="Qbex" />
     <QbexHeading/>
     <QbexFeatures/>
      < ProductShowcase/>
      <ContactSalesForm title="Contact Sales Form" />
    </Layout>
  )
}