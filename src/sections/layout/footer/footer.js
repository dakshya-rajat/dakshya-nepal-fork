import React from "react"
import { Box, Image, ResponsiveContext } from "grommet"
import footerBg from "../../../images/footer-border.svg"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box fill="horizontal">
      <Box pad={{ horizontal: "3px", vertical: "9px" }}>
        <Image src={footerBg} width="100%" />
      </Box>
      <Box
        background="b1"
        pad={
          mobile
            ? { horizontal: "16px", vertical: "24px" }
            : { horizontal: "130.5px", vertical: "40px" }
        }
        direction={mobile ? "column" : "row"}
        gap={mobile ? "none" : "xlarge"}
      >
        {props.children}
      </Box>
      <Box height="10px" background={{ color: "p1" }} />
    </Box>
  )
}
