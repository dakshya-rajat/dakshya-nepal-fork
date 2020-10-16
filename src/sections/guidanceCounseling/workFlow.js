import React from "react"
import { Box, Avatar } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"

export default ({ number, title, description, mobile }) => {
  return (
    <Box direction="row" gap="small">
      <Box>
        <Avatar size="80px" pad="20px" border={{ color: "w2" }}>
          <Heading code={2} color="b1">
            {number}
          </Heading>
        </Avatar>
      </Box>
      <Box justify="center">
        <Heading code={3}>{title}</Heading>
        <Text code="subtext-r" size="small" color="b2">
          {description}
        </Text>
      </Box>
    </Box>
  )
}
