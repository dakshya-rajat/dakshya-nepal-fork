import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Benefit from "./benefit"
import benefits from "./benefitData.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "91px", horizontal: "16px" }
          : { top: "91px", horizontal: "131px" }
      }
      gap="medium"
      direction={mobile ? "column" : "row"}
    >
      {benefits.map((data, index) => (
        <Benefit
          title={data.title}
          benefits={data.benefits}
          image={data.image}
          key={index}
        />
      ))}
    </Box>
  )
}
