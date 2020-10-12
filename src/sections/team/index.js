import React from "react"
import { Box, Grid, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import TeamWithoutDesc from "./teamWithoutDesc"
import TeamWithDesc from "./teamWithDesc"
import teamdata0 from "./teamdata-0.json"
import teamdata from "./teamdata.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "80px", horizontal: "16px" }
          : { top: "91px", horizontal: "131px" }
      }
    >
      <Heading code={2}>People @Dakshya Nepal</Heading>
      <Grid
        pad={{ top: "65px" }}
        columns={mobile ? "100%" : "48%"}
        gap="medium"
      >
        {teamdata0.map((data, index) => (
          <TeamWithDesc key={index} member={data} />
        ))}
      </Grid>
      <Grid
        pad={mobile ? { top: "32px" } : { top: "70px" }}
        columns={mobile ? "50%" : "33.33%"}
        gap={{ row: "large" }}
      >
        {teamdata.map((data, index) => (
          <TeamWithoutDesc member={data} key={index} />
        ))}
      </Grid>
    </Box>
  )
}
