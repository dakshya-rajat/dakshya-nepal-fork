import React from "react"
import { Text } from "grommet"

export default props => {
  if (props.code === "body") props = { ...props, size: "large" }
  else if (props.code === "quote")
    props = { ...props, size: "large", weight: 500 }
  else if (props.code === "sub-r") props = { ...props, size: "small" }
  else if (props.code === "sub-m")
    props = { ...props, size: "small", weight: 500 }
  else if (props.code === "label")
    props = { ...props, size: "medium", weight: 700 }
  else if (props.code === "button")
    props = { ...props, size: "16px", weight: 700 }
  return <Text {...props}>{props.children}</Text>
}
