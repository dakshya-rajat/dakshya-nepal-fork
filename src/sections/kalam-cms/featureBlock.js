import React from "react"
import { Avatar, Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"

export default ({ title, description, icon, mobile }) => {
  return (
    <Box>
      <Avatar size="80px" pad="20px" border={{ color: "w2" }}>
        <Image src={icon} fill />
      </Avatar>
      <Heading code={3} size="small">
        {title}
      </Heading>
      <Text code="subtext-r" color="b2" size="small">
        {description}
      </Text>
    </Box>
  )
}
