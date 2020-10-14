import React from "react"
import { Box, Image, ResponsiveContext } from "grommet"
import textList from "./textList"
import TextSlider from "./textSlider"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box
      pad={
        mobile
          ? { top: "49px", horizontal: "16px" }
          : { top: "31px", horizontal: "131px" }
      }
    >
      <Box direction={mobile ? "column" : "row"} gap="medium">
        <Box height="medium" width={mobile ? "100%" : "50%"}>
          <TextSlider textList={textList} />
          <Box
            height={mobile ? "200%" : "62%"}
            width={mobile ? "100%" : "30%"}
            background={`linear-gradient(180deg,#FFFBEF 13%,rgba(254,250,237,0) 87%)`}
            style={{
              position: "absolute",
              transform: "rotate(-180deg)",
              pointerEvents: "none",
              left: mobile ? "0" : null,
            }}
          />
          <Box
            height={mobile ? "30%" : "8%"}
            width={mobile ? "88%" : "30%"}
            background={`linear-gradient(180deg, #FFFFFE 0%, rgba(254, 250, 237, 0) 87.5%)`}
            style={{
              position: "absolute",
              pointerEvents: "none",
            }}
          />
        </Box>
        <Box width={mobile ? "100%" : "50%"}>
          <Image src="illustrations/about us.svg" />
        </Box>
      </Box>
    </Box>
  )
}
