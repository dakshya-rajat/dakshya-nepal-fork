import React from "react"
import { Box, Grid } from "grommet"
import Heading from "../../components/heading"
import JoinUs from "./joinus"
import joinus from "./joinUsData.json"

export default props => {
  return (
    <Box pad={{ top: "34px", horizontal: "131px" }}>
      <Heading code={2}>Careers</Heading>
      <Grid pad={{ top: "24px" }} columns="45%" gap="medium">
        {joinus.map((data, index) => (
          <JoinUs data={data} key={index} />
        ))}
      </Grid>
    </Box>
  )
}
