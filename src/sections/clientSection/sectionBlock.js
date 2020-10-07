import React from "react"
import { Image, Box } from "grommet"
import Heading from "../../components/heading"
import SlideSelector from "./slideSelector"

export default ({ name, mobile }) => {
  return (
    <Box width={mobile ? "100%" : "50%"}>
      <Heading code={2}>{name}</Heading>
      <SlideSelector>
        {[1, 2, 3, 4, 5, 6, 7].map(index => (
          <Box>
            <Box
              round="4px"
              border={{ size: "2px", color: "w2" }}
              pad="xsmall"
              margin={mobile ? { right: "24px" } : { right: "0px" }}
            >
              <Image src="/images/client.png" fill="horizontal" />
            </Box>
          </Box>
        ))}
        <Box round="4px" pad="xsmall" background="p1-l" alignContent="center">
          <Heading
            code={2}
            alignSelf="center"
            textAlign="center"
            margin={{ vertical: "25%" }}
            color="g1"
          >
            +4
          </Heading>
        </Box>
      </SlideSelector>
    </Box>
  )
}
