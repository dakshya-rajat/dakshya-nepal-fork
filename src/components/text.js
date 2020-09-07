import React from "react"
import { Text } from "grommet"

export default props => {
  return <Text {...props}>{props.children}</Text>
}
