import React from "react"
import Text from "../../components/text"

export default ({ name }) => {
  return (
    <Text code="subtext-m" size="small" weight={500} margin={{ bottom: "8px" }}>
      {name}
    </Text>
  )
}
