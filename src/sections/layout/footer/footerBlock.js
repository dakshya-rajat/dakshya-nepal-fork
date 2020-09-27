import React from "react"
import Text from "../../../components/text"
import { Box } from "grommet"

export default props => {
  return (
    <Box direction="column" gap="medium">
      <Text code="body">{props.name}</Text>
      <Box gap="small">{props.children}</Box>
    </Box>
  )
}
