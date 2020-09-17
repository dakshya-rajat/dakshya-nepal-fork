import React from "react"
import { Button } from "grommet"
import Text from "./text"

export default props => {
  return (
    <Button
      {...props}
      label={
        <Text code={props.primary || props.secondary ? "button" : "subtext-m"}>
          {props.label}
        </Text>
      }
    />
  )
}
export const IconButton = props => {
  return (
    <Button
      icon={props.icon}
      secondary
      style={{ padding: "12px" }}
      disabled={props.disabled}
      ka={props.disabled}
    />
  )
}
