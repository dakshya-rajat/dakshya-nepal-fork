import React from "react"
import { Box } from "grommet"
import SectionBlock from "./sectionBlock"

export default props => {
  return (
    <Box pad={{ top: "90px", horizontal: "131.5px" }}>
      <Box gap="xlarge" direction="row">
        <SectionBlock name="clientele" />
        <SectionBlock name="Partners" />
      </Box>
    </Box>
  )
}
