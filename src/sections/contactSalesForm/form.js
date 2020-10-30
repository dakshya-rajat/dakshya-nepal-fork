import React from "react"
import { Box, ResponsiveContext, TextArea } from "grommet"
import FormField from "../../components/formField"
import Button from "../../components/button"

export default ({ product }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box margin={{ vertical: "24px", horizontal: "16px" }} gap="xsmall">
      <form>
        <FormField
          label="Name of Organization *"
          placeholder="Input your organization name"
        />
        <FormField label="Address" placeholder="Input your Address" />
        <FormField label="Your Email" placeholder="Input your email" />
        <FormField
          label="Contact Number *"
          placeholder="Input your phone number"
        />
        <label
          style={{
            marginTop: "8px",
            marginBottom: "8px",
            fontSize: "14px",
            lineHeight: "normal",
          }}
          htmlFor="message"
        >
          Messages (If any)
        </label>
        <TextArea
          placeholder="Input your message"
          size="small"
          name="message"
          style={{ border: "2px solid #EAEAEA" }}
        />
        <input type="hidden" value={product} />
        <Button
          primary
          label="Contact Sales"
          alignSelf={mobile ? null : "start"}
          type="submit"
        />
      </form>
    </Box>
  )
}
