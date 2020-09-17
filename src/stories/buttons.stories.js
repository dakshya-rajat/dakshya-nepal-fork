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
        <Text color="h1">Default Button</Text>
        <Button label="ghost" />
        <Button disabled label="ghost" />
      </Box>
      <Box direction="row" gap="medium">
        <Text color="h1">Ka ("lang" was conflicting) Button</Text>
        <Button ka label="क" />
        <Button ka disabled label="क" />
      </Box>
    </Box>
  )
}
