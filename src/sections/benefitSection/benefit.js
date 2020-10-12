import React from "react"
import { Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"

const SubText = props => {
  return (
    <Text code="subtext-r" color="b2" size="small">
      {props.children}
    </Text>
  )
}

export default ({ title, image, benefits }) => {
  return (
    <Box flex="grow">
      <Image src={image} />
      <Heading code={3} margin={{ top: "small", bottom: "medium" }}>
        {title}
      </Heading>
      <Box gap="xsmall">
        {benefits.map((data, index) => (
          <SubText key={index}>{data}</SubText>
        ))}
      </Box>
    </Box>
  )
}
