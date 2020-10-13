import React from "react"
import { Box, Collapsible } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"
import chevUp from "../../components/icons/chevron-up"
import chevDown from "../../components/icons/chevron-down"

export default ({ info, active }) => {
  const [open, setOpen] = React.useState(active)
  const Icon = open ? chevUp : chevDown
  return (
    <Box round="8px" border={{ size: "2px", color: "w2" }}>
      <Box
        direction="row"
        onClick={() => setOpen(!open)}
        background={open ? "p1-l" : "w1"}
        pad="24px"
        round={open ? { corner: "top", size: "8px" } : { size: "8px" }}
        border={open ? { side: "bottom", size: "2px" } : ""}
      >
        <Heading code={4}>{info.position}</Heading>
        <Box align="end" flex="grow">
          <Icon color="b1" alignSelf="end" />
        </Box>
      </Box>
      <Collapsible open={open}>
        <Box pad="24px" gap="small">
          <Text code="sub-m" size="small">
            Experience: {info.experience}
          </Text>
          <Text code="sub-m" size="small">
            Requirement: {info.requirement}
          </Text>
          <Text code="sub-m" size="small">
            Responsibilities:
          </Text>
          <Text code="sub-r" size="small">
            {info.responsibilities}
          </Text>
          <Button secondary label="Apply" alignSelf="start" />
        </Box>
      </Collapsible>
    </Box>
  )
}
