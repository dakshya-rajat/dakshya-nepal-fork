import React from "react"
import Layout from "../../sections/layout"
import SEO from "../../components/seo"
import ContactSalesForm from "../../sections/contactSalesForm"
import ProductHeading from "../../sections/smart-school/productHeading"
import ProductShowcase from "../../sections/smart-school/productShowcase"
import WorkFlowSection from "../../sections/smart-school/workFlowSection"
import DemoVideos from "../../sections/smart-school/demoVideosSection"

export default () => {
  const product = "SmartSchool"
  return (
    <Layout active="products">
      <SEO title={product} />
      <ProductHeading />
      <ProductShowcase />
      <WorkFlowSection />
      <DemoVideos />
      <ContactSalesForm
        title="Lets start learning with Study'n'Learn"
        product={product}
        image="/illustrations/Girl on a chair.svg"
      />
    </Layout>
  )
}
