import React from "react"
import { Button } from "grommet"
import Text from "./text"

export default props => {
  return <Button {...props} label={<Text code="button">{props.label}</Text>} />
}
