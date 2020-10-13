import React from "react"
import { Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"

export default ({ title, description, image, mobile, index }) => {
  if (index % 2 === 0) {
    return (
      <Box margin={{ vertical: "32px" }} direction={mobile ? "column" : "row"}>
        <Box width={mobile ? "100%" : "50%"} background="p1-l">
          <Image fill="vertical" src={image} />
        </Box>
        <Box
          width={mobile ? "100%" : "50%"}
          margin={mobile ? { left: "0px" } : { left: "24px" }}
          justify="center"
        >
          <Heading code={3}>{title}</Heading>
          <Text code="subtext-r" size="small" color="b2">
            {description}
          </Text>
        </Box>
      </Box>
    )
  }
  return (
    <Box margin={{ vertical: "32px" }} direction={mobile ? "column" : "row"}>
      <Box
        width={mobile ? "100%" : "50%"}
        margin={mobile ? { right: "0px" } : { right: "24px" }}
        justify="center"
      >
        <Heading code={3}>{title}</Heading>
        <Text code="subtext-r" size="small" color="b2">
          {description}
        </Text>
      </Box>
      <Box width={mobile ? "100%" : "50%"} background="p1-l">
        <Image fill="vertical" src={image} />
      </Box>
    </Box>
  )
}
