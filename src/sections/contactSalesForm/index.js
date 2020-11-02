import React from "react"
import { Box, ResponsiveContext, Image } from "grommet"
import Heading from "../../components/heading"
import Form from "./form"

export default ({ title, image, product }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
    >
      <Heading code={2}>{title}</Heading>
      <Box
        margin={{ vertical: "32px" }}
        direction="row"
        border={{ color: "w2", size: "2px" }}
        round="8px"
      >
        <Box width={mobile ? "100%" : "50%"}>
          <Form product={product} />
        </Box>
        <Box
          background="p1-l"
          pad={{ horizontal: "medium" }}
          style={{ display: mobile ? "none" : "flex" }}
          flex="grow"
          justify="end"
        >
          <Image src={image} fill="horizontal" />
        </Box>
      </Box>
    </Box>
  )
}
