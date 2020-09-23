import React from "react"
import { Header, Box, Menu, ResponsiveContext, Image } from "grommet"

import Button from "../../components/button"

import LogoHorizontal from "../../images/logo-horizontal.svg"

import MenuIcon from "../../components/icons/menu"

export default props => {
  return (
    <Header
      background="w1"
      pad={{ horizontal: "xlarge", vertical: "medium" }}
      elevation="header"
    >
      <a href="/">
        <Image src={LogoHorizontal} label="Dakshya Nepal" />
      </a>
      <ResponsiveContext.Consumer>
        {size =>
          size === "small" ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: "bottom", right: "right" } }}
                icon={<MenuIcon />}
                items={[
                  {
                    label: <Box pad="small">Mobile</Box>,
                    href: "#",
                  },
                  {
                    label: <Box pad="small">Menu</Box>,
                    href: "#",
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Button label="Products" />
              <Button label="Blogs" />
              <Button label="About" />
              <Button label="Careers" />
              <Button ka label="क" />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  )
}
