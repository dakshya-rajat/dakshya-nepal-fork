import React from "react"
import { Avatar, Box } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"

export default ({ name, teaches, special, image }) => {
  return (
    <Box direction="row" margin={{ vertical: "24px" }} gap="small">
      <Avatar round="4px" src={image} size="large" />
      <Box>
        <Heading code={4} size="medium">
          {name}
        </Heading>
        <Text code="subtext-m" size="small">
          Teaches classes {teaches}
        </Text>
        <Text code="subtext-r" size="small" color="b2">
          {special}
        </Text>
      </Box>
    </Box>
  )
}
