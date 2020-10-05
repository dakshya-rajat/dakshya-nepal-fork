import React from "react"
import { Image, Box, Grid, Avatar } from "grommet"
import Heading from "../../components/heading"

export default ({ name }) => {
  return (
    <Box width="50%">
      <Heading code={2}>{name}</Heading>
      <Grid columns="xsmall" gap="medium" margin={{ top: "40px" }}>
        {[1, 2, 3, 4, 5, 6, 7].map(index => (
          <Box round="4px" border={{ size: "2px", color: "w2" }} pad="xsmall">
            <Image src="/images/client.png" fill="horizontal" />
          </Box>
        ))}
        <Box round="4px" pad="xsmall" background="p1-l">
          <Heading
            code={2}
            alignSelf="center"
            margin={{ vertical: "25%" }}
            color="g1"
          >
            +4
          </Heading>
        </Box>
      </Grid>
    </Box>
  )
}
