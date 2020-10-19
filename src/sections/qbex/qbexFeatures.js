import React from "react"
import { Box, ResponsiveContext, Grid } from "grommet"
import FeatureBlock from "./featureBlock"
import features from "./features.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
    >
      
      <Grid
        columns={mobile ? "100%" : "31%"}
        gap={{ row: "medium", column: "medium" }}
      >
        {features.map((data, index) => (
          <FeatureBlock
            icon={data.icon}
            title={data.title}
            description={data.description}
            key={index}
            mobile={mobile}
          />
        ))}
      </Grid>
    </Box>
  )
}
