import React from "react"
import { Link } from "gatsby"
import { Header, Image, ResponsiveContext } from "grommet"
import LogoHorizontal from "../../../images/logo-horizontal.svg"

export default props => {
  const size = React.useContext(ResponsiveContext)

  return (
    <Header
      background="w1"
      pad={
        size === "small" ? "16px" : { horizontal: "131px", vertical: "24px" }
      }
      elevation="header"
    >
      <Link to="/">
        <Image src={LogoHorizontal} label="Dakshya Nepal" />
      </Link>
      {props.children}
    </Header>
  )
}
