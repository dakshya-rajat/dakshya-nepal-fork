import React from "react"
import Layout from "../sections/layout"
import Seo from "../components/seo"
import JoinUs from "../sections/joinUs"

export default props => {
  return (
    <Layout>
      <Seo title="Careers" />
      <JoinUs />
    </Layout>
  )
}
