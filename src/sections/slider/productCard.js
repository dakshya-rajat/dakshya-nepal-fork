import React from "react"
import { Image, Box } from "grommet"
import ArrowRight from "../../components/icons/arrow-right"
import Heading from "../../components/heading"
import { Link } from "gatsby"

export default ({ product, height, width, margin }) => {
  return (
    <Link to={product.url} style={{ textDecoration: "none" }}>
      <Box
        border={{ color: "w2", size: "2px" }}
        round="8px"
        width={width || null}
        height={height || null}
        background="w1"
        margin={margin}
        elevation="d1"
      >
        <Box pad="24px">
          <Box direction="row">
            <Box flex="grow">
              <Heading code={3} margin={{ bottom: "4px", top: "0px" }}>
                {product.name}
              </Heading>
              {product.price !== "" && (
                <Heading code={4} color="h1" margin="0">
                  @NPR{product.price}/Session
                </Heading>
              )}
            </Box>
            <Box alignSelf="center">
              <ArrowRight color="b1" />
            </Box>
          </Box>
        </Box>
        <Box
          background="p1-l"
          pad={{ top: "medium" }}
          round={{ corner: "bottom", size: "8px" }}
        >
          <Image src={product.image} fit="contain" fill="vertical" />
        </Box>
      </Box>
    </Link>
  )
}
