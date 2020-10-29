import React from "react"
import { Box, ResponsiveContext } from "grommet"
import FormField from "../../components/formField"
import Button from "../../components/button"

export default ({ product }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box margin={{ vertical: "24px", horizontal: "16px" }} gap="xsmall">
      <FormField
        label="Name of Organization *"
        required="true"
        placeholder="Input your organization name"
      />
      <FormField label="Address" placeholder="Input your Address" />
      <FormField label="Your Email" placeholder="Input your email" />
      <FormField
        label="Contact Number *"
        required="true"
        placeholder="Input your phone number"
      />
      <FormField label="Messages (If any)" placeholder="Input your message" />
      <input type="hidden" value={product} />
      <Button
        primary
        label="Contact Sales"
        alignSelf={mobile ? null : "start"}
      />
    </Box>
  )
}
