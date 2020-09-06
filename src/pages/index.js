import React from "react"
import Seo from "../components/seo"
import { Heading, Box } from "grommet"

export default () => {
  return (
    <>
      <Seo title="Home" />
      <Box minHeight="100%" width="100%">
        <Heading level={2}>test test</Heading>
      </Box>
    </>
  )
}
