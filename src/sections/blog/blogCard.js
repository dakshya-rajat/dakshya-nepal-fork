import React from "react"
import { Image, Box } from "grommet"
import Text from "../../components/text"
import Heading from "../../components/heading"

export default ({ mobile, title, image, minRead, category }) => {
  return (
    <Box width={mobile ? "98%" : "33.33%"} round="4px" border={{ color: "w2" }}>
      <Image src={image} />
      <Box pad={{ horizontal: "16px", top: "16px", bottom: "40px" }}>
        <Box direction="row">
          <Text code="subtext-r" color="g1" size="small">
            {minRead} min read
          </Text>
          <Box flex="grow">
            <Text code="subtext-r" color="g1" size="small" alignSelf="end">
              #{category}
            </Text>
          </Box>
        </Box>
        <Heading code={4} margin={{ top: "8px" }}>
          {title}
        </Heading>
      </Box>
    </Box>
  )
}
