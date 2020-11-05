import React from "react"
import { Box, Image, Header, ResponsiveContext } from "grommet"
import Exit from "../../../components/icons/exit"
import MobileMenuItem from "./mobileMenuItem"
import { Link } from "gatsby"

export default props => {
  const size = React.useContext(ResponsiveContext)

  return (
    <div>
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
            <Image
              src="/images/logo-horizontal.svg"
              label="Dakshya Nepal"
              fill="vertical"
            />
          </Link>
          <Box
            flex="grow"
            align="end"
            onClick={() => props.setShowLayer(false)}
          >
            <Exit />
          </Box>
        </Box>
      </Header>
      <Box
        fill
        background="transparent"
        pad={{ horizontal: "large", vertical: "none" }}
        direction="column"
      >
        {props.menuItems.map((item, index) => (
          <MobileMenuItem item={item} key={index} />
        ))}
      </Box>
    </div>
  )
}
