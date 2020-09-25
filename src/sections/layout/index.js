import React from "react"
import Header from "./header"

export default props => {
  return (
    <div>
      <Header active={props.active} />
      {props.children}
    </div>
  )
}
