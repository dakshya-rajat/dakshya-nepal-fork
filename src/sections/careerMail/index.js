import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Button from "../../components/button"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box
      pad={
        mobile
          ? { horizontal: "16px", vertical: "58px" }
          : { horizontal: "131px", vertical: "90px" }
      }
    >
      <Heading code={2}>Can’t find what you do?</Heading>
      <Box
        margin={{ top: "32px" }}
        pad="24px"
        direction={mobile ? "column" : "row"}
        border={{ size: "2px", color: "w2" }}
        round="8px"
        gap="large"
      >
        <Box width={mobile ? "100%" : "28%"}>
          <Heading code={4}>
            get a reminder for these positions if they are open again.
          </Heading>
        </Box>
        <Box direction={mobile ? "column" : "row"} gap="small" flex="grow">
          <FormField placeholder="Select a position" flex="grow" />
          <FormField placeholder="Your E-mail" flex="grow" />
          <Button primary label="Remind Me" />
        </Box>
      </Box>
    </Box>
  )
}
