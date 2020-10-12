import React from "react"
import TeamWithoutDesc from "./teamWithoutDesc"
import { Box } from "grommet"
import Text from "../../components/text"

export default ({ member }) => {
  return (
    <Box gap="medium">
      <TeamWithoutDesc member={member} />
      <Text code="subtext-r" color="b2" size="small">
        Learning should not be restrictive, learning should always focus on the
        overall development of a child. It should be fun and engaging and at the
        same time, help a child explore his innovativeness. Dakshya Nepal plans
        on becoming the largest digital educator of Nepal and we are here to
        join hands with you to be the best.
      </Text>
    </Box>
  )
}
