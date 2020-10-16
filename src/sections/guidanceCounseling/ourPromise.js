import React from "react"
import { Box, ResponsiveContext, Image } from "grommet"
import Heading from "../../components/heading"
import image from "../../../static/illustrations/children.svg"
import Text from "../../components/text"

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
      <Box direction={mobile ? "column" : "row"} gap="medium">
        <Box width={mobile ? "100%" : "50%"} background="p1-l">
          <Image src={image} />
        </Box>
        <Box width={mobile ? "100%" : "50%"} justify="center" gap="small">
          <Heading code={3}>
            With your partnership with us, we promise on fulfilling the
            following duties
          </Heading>
          <Box>
            <Text code="subtext-r" size="small" color="b2">
              Counseling with regards to academics
            </Text>
            <Text code="subtext-r" size="small" color="b2">
              Providing instruction on psychological and social issues
            </Text>
            <Text code="subtext-r" size="small" color="b2">
              Help with college or career selection
            </Text>
            <Text code="subtext-r" size="small" color="b2">
              Early intervention about learning difficulties
            </Text>
            <Text code="subtext-r" size="small" color="b2">
              Maintain academic standards
            </Text>
            <Text code="subtext-r" size="small" color="b2">
              Develop skills to improve organization, time management and study
              habits
            </Text>
            <Text code="subtext-r" size="small" color="b2">
              Identify interests, strengths and aptitudes through assessment
            </Text>
            <Text code="subtext-r" size="small" color="b2">
              Any other aspect on which guidance is needed
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
