import React from "react"
import { Header, Box, ResponsiveContext, Image, Layer } from "grommet"
import { Link } from "gatsby"

import Button from "../../../components/button"
import Text from "../../../components/text"

import MenuIcon from "../../../components/icons/menu"
import Exit from "../../../components/icons/exit"
import LogoHorizontal from "../../../images/logo-horizontal.svg"

export default ({ active }) => {
  const size = React.useContext(ResponsiveContext)
  const [showLayer, setShowLayer] = React.useState(false)
  const menuItems = [
    { label: "Products", url: "/products" },
    { label: "Blogs", url: "#" },
    { label: "About", url: "#" },
    { label: "Careers", url: "#" },
    { label: "Language: क", url: "#" },
  ]

  return (
    <div>
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
        <ResponsiveContext.Consumer>
          {size =>
            size === "small" ? (
              <Box justify="end" onClick={() => setShowLayer(true)}>
                <MenuIcon />
              </Box>
            ) : (
              <Box justify="end" direction="row" gap="medium">
                <Link to="/products" style={{ margin: "auto 0" }}>
                  <Button
                    as="div"
                    label="Products"
                    active={active === "products"}
                  />
                </Link>
                <Button label="Blogs" active={active === "blogs"} />
                <Button label="About" active={active === "about"} />
                <Button label="Careers" active={active === "careers"} />
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
            <Link to="/">
              <Image src={LogoHorizontal} label="Dakshya Nepal" />
            </Link>
            <Box justify="end" onClick={() => setShowLayer(false)}>
              <Exit />
            </Box>
          </Header>
          <Box
            fill
            background="transparent"
            pad={{ horizontal: "large", vertical: "none" }}
            direction="column"
          >
            {menuItems.map((item, index) => (
              <Box
                border={{ color: "w2", side: "bottom" }}
                pad={{ vertical: "small" }}
              >
                <Link
                  to={item.url}
                  style={{ color: "inherit", textDecoration: "none" }}
                  key={index}
                >
                  <Text code="body" style={{ lineHeight: "32px" }}>
                    {item.label}
                  </Text>
                </Link>
              </Box>
            ))}
          </Box>
        </Layer>
      )}
    </div>
  )
}
