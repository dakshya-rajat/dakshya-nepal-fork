import React from "react"
import { Button } from "grommet"

export default props => {
  return <Button {...props}>{props.children}</Button>
}
