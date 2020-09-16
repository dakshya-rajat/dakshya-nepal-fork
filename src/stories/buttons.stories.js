import React from "react"
import Button from "../components/button"
import Text from "../components/text"
import { Box } from "grommet"

export default {
  title: "Design/Controls",
}

export const buttons = () => {
  return (
    <Box direction="column" gap="medium">
      <Box direction="row" gap="medium">
        <Button label="ghost" />
        <Button disabled label="ghost" />
      </Box>
    </Box>
  )
}
