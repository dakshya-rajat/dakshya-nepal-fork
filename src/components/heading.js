import React from "react"
import { Heading } from "grommet"

export default props => {
  return (
    <Heading level={props.code} size="medium" {...props}>
      {props.children}
    </Heading>
  )
}
