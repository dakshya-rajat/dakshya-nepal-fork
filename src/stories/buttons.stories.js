import React from "react"
import Button from "../components/button"
import Text from "../components/text"
import { Box } from "grommet"

export default {
  title: "Design/Controls",
}

export const buttons = () => {
  return (
    <Box direction="row" gap="medium">
      <Button primary label={<Text code="button">Primary</Text>} />
      <Button primary disabled label={<Text code="button">Primary</Text>} />
    </Box>
  )
}
