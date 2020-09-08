import React from "react"
import { Card } from "grommet"

export default props => {
  return (
    <Card
      background="w1"
      border={{ color: "g1", size: "1px" }}
      elevation="none"
      pad={props.p24 ? "large" : "medium"}
      round="xsmall"
      {...props}
    >
      {props.children}
    </Card>
  )
}
