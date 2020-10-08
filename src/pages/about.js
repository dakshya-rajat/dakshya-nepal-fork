import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import VerticalText from "../sections/verticalText"

export default () => {
  return (
    <Layout active="about">
      <SEO title="About" />
      <VerticalText />
    </Layout>
  )
}
