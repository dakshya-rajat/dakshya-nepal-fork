import React from "react"
import { Link } from "gatsby"
import { Box, Image, ResponsiveContext } from "grommet"
import Heading from "../../../components/heading"
import Text from "../../../components/text"
import ArrowRight from "../../../components/icons/arrow-right"

export default ({ product }) => {
  return (
    <Link
      to={product.link}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ResponsiveContext.Consumer>
        {size =>
          size === "small" ? (
            <Box
              border={{ side: "bottom", color: "b1" }}
              pad={{ bottom: "small" }}
            >
              <Text code="body">{product.name}</Text>
            </Box>
          ) : (
            <Box
              height="xsmall"
              direction="row"
              round="4px"
              gap="small"
              border={{ size: "2px" }}
            >
              <Box
                background="p1-l"
                width="25%"
                round={{ corner: "left", size: "4px" }}
              >
                <Image src={product.image} fit="contain" />
              </Box>
              <Box flex="grow" alignSelf="center" direction="row">
                <Heading code={4}>{product.name}</Heading>
                <Box flex="grow" align="end" pad={{ right: "small" }}>
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Link>
  )
}
