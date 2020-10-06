import React from "react"
import Heading from "../../components/heading"
import { Box, ResponsiveContext, Grid } from "grommet"
import products from "../../templates/products.json"
import ProductCard from "../../sections/productCard"

export default () => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { horizontal: "16px", top: "28px" }
          : { horizontal: "107px", top: "40px" }
      }
    >
      <Heading code={2}>Products</Heading>
      <Grid
        columns={mobile ? "100%" : "medium"}
        pad={mobile ? { top: "12px" } : { top: "18px" }}
      >
        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            margin={
              mobile ? { bottom: "16px" } : { right: "24px", bottom: "24px" }
            }
          />
        ))}
      </Grid>
    </Box>
  )
}
