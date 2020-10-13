import React from "react"
import { Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"

export default ({ title, description, image, mobile, index }) => {
  return (
    <Box
      direction={mobile ? "column" : index % 2 === 0 ? "row" : "row-reverse"}
      gap="medium"
    >
      <Box width={mobile ? "100%" : "50%"} background="p1-l">
        <Image fill="vertical" src={image} />
      </Box>
      <Box width={mobile ? "100%" : "50%"} justify="center">
        <Heading code={3}>{title}</Heading>
        <Text code="subtext-r" size="small" color="b2">
          {description}
        </Text>
      </Box>
    </Box>
  )
}
