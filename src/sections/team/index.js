import React from "react"
import { Box, Grid, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import TeamWithoutDesc from "./teamWithoutDesc"
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
