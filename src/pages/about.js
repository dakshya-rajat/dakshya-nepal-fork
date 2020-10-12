import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import VerticalText from "../sections/verticalText"
import FeatureAbout from "../sections/featureAbout"
import BenefitSection from "../sections/benefitSection"
import Team from "../sections/team"

export default () => {
  return (
    <Layout active="about">
      <SEO title="About" />
      <VerticalText />
      <FeatureAbout />
      <BenefitSection />
      <Team />
    </Layout>
  )
}
