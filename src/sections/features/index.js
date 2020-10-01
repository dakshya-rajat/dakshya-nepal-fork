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
          ? { top: "16px", horizontal: "64px" }
          : { top: "129px", horizontal: "131.5px" }
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
