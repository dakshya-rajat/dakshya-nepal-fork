import React from "react"
import { Link } from "gatsby"
import Text from "../../../components/text"
import { Box } from "grommet"

export default props => {
  return (
    <Box border={{ color: "w2", side: "bottom" }} pad={{ vertical: "small" }}>
      <Link
        to={props.item.url}
        style={{ color: "inherit", textDecoration: "none" }}
      >
        <Text code="body" style={{ lineHeight: "32px" }}>
          {props.item.label}
        </Text>
      </Link>
    </Box>
  )
}
