import React from "react"
import Seo from "../components/seo"
import Layout from "../sections/layout"
import Slider from "../sections/slider"

export default () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Slider />
    </Layout>
  )
}
