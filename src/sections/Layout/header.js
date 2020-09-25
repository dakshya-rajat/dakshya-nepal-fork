import React from "react"
import { Header, Box, ResponsiveContext, Image, Layer, List } from "grommet"
import Button from "../../components/button"
import Text from "../../components/text"

import MenuIcon from "../../components/icons/menu"
import Exit from "../../components/icons/exit"
import LogoHorizontal from "../../images/logo-horizontal.svg"

export default props => {
  const size = React.useContext(ResponsiveContext)
  const [showLayer, setShowLayer] = React.useState(false)
  const locations = ["Products", "Blogs", "About", "Careers", "Language: क"]

  return (
    <div>
      <Header
        background="w1"
        pad={
          size === "small" ? "16px" : { horizontal: "131px", vertical: "24px" }
        }
        elevation="header"
      >
        <a href="/">
          <Image src={LogoHorizontal} label="Dakshya Nepal" />
        </a>
        <ResponsiveContext.Consumer>
          {size =>
            size === "small" ? (
              <Box justify="end" onClick={() => setShowLayer(true)}>
                <MenuIcon />
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
      {showLayer && (
        <Layer full animation="fadeIn">
          <Header
            background="w1"
            pad={
              size === "small"
                ? "16px"
                : { horizontal: "131px", vertical: "24px" }
            }
            elevation="header"
          >
            <a href="/">
              <Image src={LogoHorizontal} label="Dakshya Nepal" />
            </a>
            <Box justify="end" onClick={() => setShowLayer(false)}>
              <Exit />
            </Box>
          </Header>
          <Box
            fill
            background="transparent"
            pad={{ horizontal: "large", vertical: "none" }}
            margin={{ vertical: "small" }}
          >
            <List
              data={locations}
              border={{ color: "w2", side: "bottom" }}
              fill
              pad={{ vertical: "small", horizontal: "none" }}
            >
              {(datum, index) => (
                <a
                  href="#"
                  style={{ color: "inherit", textDecoration: "none" }}
                  key={index}
                >
                  <Text code="body" style={{ lineHeight: "32px" }}>
                    {datum}
                  </Text>
                </a>
              )}
            </List>
          </Box>
        </Layer>
      )}
    </div>
  )
}
