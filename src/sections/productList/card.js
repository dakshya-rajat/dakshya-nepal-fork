import React from "react"
import { Image, Box } from "grommet"
import ArrowRight from "../../components/icons/arrow-right"
import Heading from "../../components/heading"

export default ({ product }) => {
  return (
    <Box border={{ color: "w2", size: "2px" }} round="8px" background="w1">
      <Box pad="24px">
        <Box direction="row">
          <Box flex="grow">
            <Heading code={3} margin={{ bottom: "4px", top: "0px" }}>
              {product.name}
            </Heading>
            <Heading code={4} color="h1" margin="0">
              @NPR{product.price}/Session
            </Heading>
          </Box>
          <Box alignSelf="center">
            <ArrowRight color="b1" />
          </Box>
        </Box>
      </Box>
      <Box round={{ corner: "bottom", size: "8px" }}>
        <Image src={product.image} fill="horizontal" />
      </Box>
    </Box>
  )
}
