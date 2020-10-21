import React from "react"
import { Link } from "gatsby"
import { Box, Header, Image, ResponsiveContext } from "grommet"
import LogoHorizontal from "../../../images/logo-horizontal.svg"

import ProductMenu from "./productMenu"

export default props => {
  const size = React.useContext(ResponsiveContext)

  return (
    <Header
      background="w1"
      pad={
        size === "small" ? "16px" : { horizontal: "131px", vertical: "24px" }
      }
      elevation="header"
      direction="column"
    >
      <Box direction="row" width="100%">
        <Link to="/">
          <Image src={LogoHorizontal} label="Dakshya Nepal" />
        </Link>
        {props.children}
      </Box>
      {props.productMenu && <ProductMenu />}
    </Header>
  )
}
