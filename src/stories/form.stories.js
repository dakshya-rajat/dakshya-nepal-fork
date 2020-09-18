import React from "react"
import { Box, Text } from "grommet"
import FormField from "../components/formField"

export default {
  title: "Design/Form",
}

export const formField = () => {
  return (
    <Box>
      <FormField label="Name" placeholder="John Doe" />
      <FormField
        label="Email"
        placeholder="j.doe@email.com"
        error="There is a problem in your email"
      />
      <FormField
        label="Phone"
        placeholder="+91223565875"
        info="May be you need a hand"
      />
    </Box>
  )
}

export const formItems = () => {
  const [value, setValue] = React.useState("")

  const onChange = event => setValue(event.target.value)
  return (
    <Box direction="column" gap="medium">
      <Box direction="row" gap="medium">
        <Text color="h1">Normal</Text>
        <FormField placeholder="Name" />
        <FormField placeholder="Disabled" disabled />
      </Box>
    </Box>
  )
}
