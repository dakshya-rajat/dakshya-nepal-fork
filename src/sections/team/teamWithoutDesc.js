import React from "react"
import { Avatar, Box } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import { Link } from "gatsby"
import Linkedin from "../../components/icons/linkedin"
import Email from "../../components/icons/email"

export default ({ member }) => {
  return (
    <Box direction="row" gap="medium">
      <Avatar round="4px" size="140px" src={member.image} />
      <Box direction="column" alignSelf="center" gap="xxsmall">
        <Heading code={4}>{member.name}</Heading>
        <Text code="subtext-m" size="small" color="b2">
          {member.position}
        </Text>
        <Box direction="row" gap="xsmall">
          <Link to={member.linkedin}>
            <Linkedin color="b2" />
          </Link>
          <a href={member.email}>
            <Email color="b2" />
         </a>
        </Box>
      </Box>
    </Box>
  )
}
