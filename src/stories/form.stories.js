import React from "react"
import { Box } from "grommet"
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
