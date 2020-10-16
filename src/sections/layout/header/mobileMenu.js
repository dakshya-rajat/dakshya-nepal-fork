import React from "react"
import { Box } from "grommet"
import Header from "./header"
import Exit from "../../../components/icons/exit"
import MobileMenuItem from "./mobileMenuItem"

export default props => {
  return (
    <div>
      <Header>
        <Box flex="grow" align="end" onClick={() => props.setShowLayer(false)}>
          <Exit />
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
