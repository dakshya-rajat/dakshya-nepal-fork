import React from "react"
import Heading from "../../components/heading"
import { Box, ResponsiveContext } from "grommet"
import Text from "../../components/text"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "49px", horizontal: "16px" }
          : { top: "31px", horizontal: "131px" }
      }
    >
      <Heading code={2}>
      Artificial Intelligence Driven School Management System
      </Heading>
      <Text margin={{ top: "16px" }} color="b2" code="sub-r">
      An Artificial Intelligence (AI) Driven School Management System which can be customized to
       cater to every users’ needs, a powerful and easy to use system accessible at any time from
       anywhere.
      </Text>
    </Box>
  )
}
