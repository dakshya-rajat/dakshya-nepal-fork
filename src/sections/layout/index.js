import React from "react"
import Header from "./header"
import Footer from "./footer"

export default props => {
  return (
    <div>
      <Header active={props.active} />
      {props.children}
      <Footer />
    </div>
  )
}
