import React from "react"
import { Box, ResponsiveContext, Image } from "grommet"
import Heading from "../../components/heading"
import FormSideImage from "../../../static/illustrations/Qubex.svg"
import Form from "./form"

export default ({ title }) => {
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
          <Form />
        </Box>
        <Box
          width={mobile ? "0%" : "50%"}
          background="p1-l"
          alignContent="end"
          justify="end"
        >
          <Image src={FormSideImage} fill="horizontal" />
        </Box>
      </Box>
    </Box>
  )
}
