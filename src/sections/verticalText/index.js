import React from "react"
import { Box, Image } from "grommet"
import textList from "./textList"
import TextSlider from "./textSlider"

export default props => {
  return (
    <Box pad={{ top: "31px", horizontal: "131px" }}>
      <Box direction="row" gap="medium">
        <Box flex="shrink" height="medium">
          <TextSlider textList={textList} />
          <Box
            height="62%"
            width="30%"
            background="linear-gradient(180deg,#FFFBEF 13%,rgba(254,250,237,0) 87%)"
            style={{
              position: "absolute",
              transform: "rotate(-180deg)",
              pointerEvents: "none",
            }}
          />
          <Box
            height="12%"
            width="30%"
            background="linear-gradient(180deg, #FFFFFE 0%, rgba(254, 250, 237, 0) 87.5%)"
            style={{
              position: "absolute",
              pointerEvents: "none",
            }}
          />
        </Box>
        <Box flex="grow">
          <Image src="illustrations/about us.svg" />
        </Box>
      </Box>
    </Box>
  )
}
