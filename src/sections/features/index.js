import React from "react"
import { Box, ResponsiveContext } from "grommet"
import FeatureBlock from "./featureBlock"
import features from "./features.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      direction={mobile ? "column" : "row"}
      pad={
        mobile
          ? { vertical: "64px", horizontal: "16px" }
          : { vertical: "131.5px", horizontal: "129px" }
      }
      gap="medium"
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
    </Box>
  )
}
