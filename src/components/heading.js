import React from "react"
import { Heading } from "grommet"

export default props => {
  return (
    <Heading level={props.code} {...props}>
      {props.children}
    </Heading>
  )
}
