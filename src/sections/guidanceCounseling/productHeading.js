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
      gap="small"
    >
      <Heading code={2}>Guidance Counseling</Heading>
      <Text color="b2" code="sub-r">
        Dakshya Nepal brings to you Guidance Counselors who help both the
        parents and students to resolve their respective issues. We are trying
        to incorporate wider goals of helping students develop socially,
        personally and academically. We are also trying to be the mediator for
        parents to help them find a better way to interact with their children
        academically and personally.
      </Text>
    </Box>
  )
}
