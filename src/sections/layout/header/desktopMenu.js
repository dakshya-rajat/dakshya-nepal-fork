import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Header from "./header"
import DesktopMenuItem from "./desktopMenuItem"

import MenuIcon from "../../../components/icons/menu"

export default props => {
  return (
    <Header>
      <ResponsiveContext.Consumer>
        {size =>
          size === "small" ? (
            <Box justify="end" onClick={() => props.setShowLayer(true)}>
              <MenuIcon />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              {props.menuItems.map((item, index) => (
                <DesktopMenuItem
                  item={item}
                  active={props.active}
                  key={index}
                />
              ))}
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
}
