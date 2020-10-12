import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import VerticalText from "../sections/verticalText"
import FeatureAbout from "../sections/featureAbout"

export default () => {
  return (
    <Layout active="about">
      <SEO title="About" />
      <VerticalText />
      <FeatureAbout />
    </Layout>
  )
}
