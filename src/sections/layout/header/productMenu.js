import React from "react"
import { Box, Collapsible, Grid } from "grommet"
import Heading from "../../../components/heading"
import Button from "../../../components/button"

import products from "../../../content/products.json"
import Card from "../../productList/card"

import chevUp from "../../../components/icons/chevron-up"
import chevDown from "../../../components/icons/chevron-down"

export default props => {
  const [open, setOpen] = React.useState(false)
  const Icon = open ? chevUp : chevDown

  return (
    <>
      <Box
        width="100%"
        direction="row"
        border={{ size: "1px", side: "top" }}
        pad={{ top: "12px" }}
      >
        <Box direction="row" alignSelf="center" onClick={() => setOpen(!open)}>
          <Heading code={4} size="small">
            Smart School
          </Heading>
          <Icon color="b1" />
        </Box>
        <Box flex="grow">
          <Button alignSelf="end" primary label="Know More" />
        </Box>
      </Box>
      <Box width="100%">
        <Collapsible open={open} {...props}>
          <Grid columns="31%" gap="medium" pad={{ top: "24px" }}>
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Grid>
        </Collapsible>
      </Box>
    </>
  )
}
