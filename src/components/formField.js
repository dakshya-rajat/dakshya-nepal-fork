import React from "react"
import { FormField, TextInput } from "grommet"

export default props => {
  return (
    <FormField {...props}>
      <TextInput
        placeholder={props.placeholder}
        size="small"
        icon={props.icon}
        disabled={props.disabled}
        {...props}
      />
    </FormField>
  )
}
