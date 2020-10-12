import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import VerticalText from "../sections/verticalText"
import FeatureAbout from "../sections/featureAbout"
import BenefitSection from "../sections/benefitSection"

export default () => {
  return (
    <Layout active="about">
      <SEO title="About" />
      <VerticalText />
      <FeatureAbout />
      <BenefitSection />
    </Layout>
  )
}
