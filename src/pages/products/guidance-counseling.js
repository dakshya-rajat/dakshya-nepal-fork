import React from "react"
import Layout from "../../sections/layout"
import SEO from "../../components/seo"
import ProductHeading from "../../sections/guidanceCounseling/productHeading"
import ContactForm from "../../sections/guidanceCounseling/contactForm"
import ProductShowcase from "../../sections/guidanceCounseling/productShowcase"
import WorkFlowSection from "../../sections/guidanceCounseling/workFlowSection"
import OurPromise from "../../sections/guidanceCounseling/ourPromise"

export default () => {
  return (
    <Layout active="products">
      <SEO title="Guidance Counseling" />
      <ProductHeading />
      <ProductShowcase />
      <WorkFlowSection />
      <OurPromise />
      <ContactForm />
    </Layout>
  )
}
