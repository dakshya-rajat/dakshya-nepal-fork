import React from "react"
import { Box, ResponsiveContext } from "grommet"

import TextBlock from "./textBlock"
import SliderBlock from "./sliderBlock"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box
      pad={
        mobile
          ? { horizontal: "16px", top: "40px" }
          : { horizontal: "131px", top: "80px" }
      }
    >
      <Box direction={mobile ? "column" : "row"}>
        <TextBlock mobile={mobile} />
        <SliderBlock mobile={mobile} />
      </Box>
    </Box>
  )
}
