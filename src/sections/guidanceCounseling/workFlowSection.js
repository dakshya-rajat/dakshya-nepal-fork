import React from "react"
import { Box, ResponsiveContext, Image } from "grommet"
import Heading from "../../components/heading"
import Image1 from "../../../static/illustrations/about us.svg"
import WorkFlow from "./workFlow"
import workflowdata from "./workFlowData.json"

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
      <Heading code={2}>How It Works</Heading>

      <Box gap="medium" pad={{ top: "32px" }} direction="row">
        <Box
          direction="column"
          justify="center"
          width={mobile ? "100%" : "50%"}
          gap="medium"
        >
          {workflowdata.map(data => (
            <WorkFlow
              number={data.number}
              title={data.title}
              description={data.description}
              mobile={mobile}
            />
          ))}
        </Box>
        <Box width={mobile ? "0%" : "50%"} background="p1-l" justify="end">
          <Image src={Image1} fill="horizontal"></Image>
        </Box>
      </Box>
    </Box>
  )
}
