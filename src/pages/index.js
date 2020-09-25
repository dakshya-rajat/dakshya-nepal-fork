import React from "react"
import Seo from "../components/seo"
import { Heading, Box } from "grommet"
import Layout from "../sections/layout"

export default () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Box minHeight="100%" width="100%">
        <Heading level={2}>Home Page</Heading>
      </Box>
    </Layout>
  )
}
