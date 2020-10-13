import React from "react"
import Layout from "../sections/layout"
import Seo from "../components/seo"
import JoinUs from "../sections/joinUs"
import CareerDropdown from "../sections/careersDropdown"

export default props => {
  return (
    <Layout>
      <Seo title="Careers" />
      <JoinUs />
      <CareerDropdown />
    </Layout>
  )
}
