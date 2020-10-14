import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
    >
      <Heading code={2}>Demo Videos</Heading>

      <Box
        gap="medium"
        margin={{ top: "32px" }}
        border={{ color: "w2", size: "2px" }}
      >
        {/* Add Tabs and videos here */}
        {/* <Tabs>
          <Tab direction="column" title="Class 1">
            <Box pad="medium">Add Tabs</Box>
          </Tab>
        </Tabs> */}
      </Box>
    </Box>
  )
}
