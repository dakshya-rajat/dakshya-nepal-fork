import React from "react"
import { Box, Collapsible } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Exit from "../../components/icons/exit"
import { Validate, Alert } from "grommet-icons"

export default ({ title, type, message }) => {
  const [open, setOpen] = React.useState(true)
  const Icon = type === "success" ? Validate : Alert

  return (
    <Box style={{ position: "fixed", bottom: 0 }} width="80%">
      <Collapsible open={open}>
        <Box
          round={{ size: "8px", corner: "top" }}
          background={type === "success" ? "s1" : "s2"}
          pad={{ vertical: "medium", horizontal: "large" }}
          align="center"
          justify="center"
          direction="row"
        >
          <Box flex="grow">
            <Box direction="row" gap="medium">
              <Icon size="large" />
              <Box alignSelf="center">
                <Heading code={3}>{title}</Heading>
                <Text code="sub-m">{message}</Text>
              </Box>
            </Box>
          </Box>
          <Box onClick={() => setOpen(false)}>
            <Exit />
          </Box>
        </Box>
      </Collapsible>
    </Box>
  )
}
