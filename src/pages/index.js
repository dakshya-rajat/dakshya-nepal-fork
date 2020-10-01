import React from "react"
import { Box } from "grommet"
import Seo from "../components/seo"
import Layout from "../sections/layout"
import Slider from "../sections/slider"
import Features from "../sections/features"

export default () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Slider />
      <Features />
    </Layout>
  )
}
