import React from "react"
import Button, { IconButton } from "../components/button"
import Text from "../components/text"
import { Box } from "grommet"
import User from "../components/icons/user"

export default {
  title: "Design/Controls",
}

export const buttons = () => {
  return (
    <Box direction="column" gap="medium">
      <Box direction="row" gap="medium">
        <Text color="h1">Default Button</Text>
        <Button label="ghost" />
        <Button active label="active" />
        <Button disabled label="ghost" />
      </Box>
      <Box direction="row" gap="medium">
        <Text color="h1">Ka ("lang" was conflicting) Button</Text>
        <Button ka label="क" />
        <Button ka disabled label="क" />
      </Box>
      <Box direction="row" gap="medium">
        <Text color="h1">Primary Button</Text>
        <Button primary label="primary" />
        <Button primary disabled label="disabled" />
      </Box>
      <Box direction="row" gap="medium">
        <Text color="h1">Secondary Button</Text>
        <Button secondary label="secondary" />
        <Button secondary disabled label="disabled" />
      </Box>
      <Box direction="row" gap="medium">
        <Text color="h1">Icon Button</Text>
        <IconButton icon={<User />} />
        <IconButton icon={<User />} disabled />
      </Box>
    </Box>
  )
}
