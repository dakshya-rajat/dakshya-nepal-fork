import React from "react"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"
import { Box } from "grommet"

export default ({ mobile }) => {
  return (
    <Box
      pad={mobile ? "0px" : { vertical: "34px", right: "large" }}
      width={mobile ? "100%" : "40%"}
      align={mobile ? "center" : null}
    >
      <Heading code={3}>We Believe In</Heading>
      <Heading code={1}>Skilled Nepal</Heading>
      <Text
        code="subtext-r"
        color="b2"
        margin={{ top: "8px", bottom: "24px" }}
        size="small"
        textAlign={mobile ? "center" : "left"}
      >
        Dakshya Nepal is a company fundamentally focused on digitizing the
        education system of the country. We deliver the proper mechanisms to
        revolutionize the traditional way of learning to make it more productive
        and effective.
      </Text>
      <Box width={mobile ? "100%" : "small"}>
        <Button primary label="Explore Products" />
      </Box>
    </Box>
  )
}
