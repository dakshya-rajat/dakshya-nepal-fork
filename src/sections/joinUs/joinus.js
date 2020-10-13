import React from "react"
import { Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"

export default ({ data }) => {
  return (
    <Box direction="row" border={{ size: "2px", color: "w2" }} round="4px">
      <Box
        background="p1-l"
        overflow="hidden"
        width="large"
        pad={{ top: "medium" }}
      >
        <Image src={data.image} alignSelf={data.background} />
      </Box>
      <Box gap="xsmall" pad={{ horizontal: "24px" }} alignSelf="center">
        <Heading code={3}>{data.title}</Heading>
        <Text code="subtext-r" size="small" color="b2">
          {data.desc}
        </Text>
        <Button secondary label="Apply" alignSelf="start" />
      </Box>
    </Box>
  )
}
