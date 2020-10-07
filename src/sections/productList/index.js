import React from "react"
import { Box, Grid } from "grommet"
import Heading from "../../components/heading"
import products from "../../content/products.json"
import Card from "./card"

export default props => {
  return (
    <Box pad={{ top: "40px", horizontal: "131px" }}>
      <Heading code={2}>Products</Heading>
      <Grid margin={{ top: "42px" }} columns="33.33%">
        {products.map((product, index) => (
          <Box margin={{ bottom: "24px", right: "24px" }}>
            <Card product={product} key={index} />
          </Box>
        ))}
      </Grid>
    </Box>
  )
}
