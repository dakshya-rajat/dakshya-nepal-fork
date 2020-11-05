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
        Smarter way to study with SmartSchool/Study'n'Learn
      </Heading>
      <Text margin={{ top: "16px" }} color="b2" code="sub-r">
        An eLearning package containing curriculum mapped K-12 digital content
        supported by robust assessment software - Examguru integrated on an
        advanced offline/online LMS. With over 50,000 modules mapped to school
        curriculum, the software is the best tool to ensure that students learn
        things at their own pace with interactive modules to get better
        understanding on the subject matter.
      </Text>
    </Box>
  )
}
