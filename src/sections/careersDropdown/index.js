import React from "react"
import { Box } from "grommet"
import Heading from "../../components/heading"
import Dropdown from "./dropdown"
import careers from "./careers.json"

export default props => {
  return (
    <Box pad={{ top: "90px", horizontal: "131px" }}>
      <Heading code={2}>open Careers @ dakshya nepal</Heading>
      <Box pad={{ top: "40px" }} gap="medium">
        {careers.map((data, index) => (
          <Dropdown info={data} key={index} active={index === 1} />
        ))}
      </Box>
    </Box>
  )
}
