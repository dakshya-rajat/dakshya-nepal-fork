import React from "react"
import Layout from "../sections/layout"
import Seo from "../components/seo"
import JoinUs from "../sections/joinUs"
import CareerDropdown from "../sections/careersDropdown"
import CareerMail from "../sections/careerMail"

export default props => {
  return (
    <Layout>
      <Seo title="Careers" />
      <JoinUs />
      <CareerDropdown />
      <CareerMail />
    </Layout>
  )
}
