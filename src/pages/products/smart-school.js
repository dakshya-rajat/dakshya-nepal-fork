import React from "react"
import Layout from "../../sections/layout"
import SEO from "../../components/seo"
import ContactSalesForm from "../../sections/contactSalesForm"
import ProductHeading from "../../sections/smart-school/productHeading"
import ProductShowcase from "../../sections/smart-school/productShowcase"
import WorkFlowSection from "../../sections/smart-school/workFlowSection"
import DemoVideos from "../../sections/smart-school/demoVideosSection"

export default () => {
  return (
    <Layout active="products">
      <SEO title="SmartSchool" />
      <ProductHeading />
      <ProductShowcase />
      <WorkFlowSection />
      <DemoVideos />
      <ContactSalesForm title="Lets start learning with Study'n'Learn" />
    </Layout>
  )
}
