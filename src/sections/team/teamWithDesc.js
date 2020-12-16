import React from "react"
import TeamWithoutDesc from "./teamWithoutDesc"
import { Box } from "grommet"
import Text from "../../components/text"

export default ({ member }) => {
  return (
    <Box gap="medium">
      <TeamWithoutDesc member={member} />
      <Text code="subtext-r" color="b2" size="small">
      {member.desc}
      </Text>
    </Box>
  )
}
