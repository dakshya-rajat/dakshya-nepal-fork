import React from "react"
import Text from "../../../components/text"
import { Box } from "grommet"

export default props => {
  return (
    <Box direction="row" gap="small">
      {props.icon}
      <Text code="subtext-r" size="small">
        {props.text}
      </Text>
    </Box>
  )
}
