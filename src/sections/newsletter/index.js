import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Card from "../../components/card"
import FormField from "../../components/formField"
import Button from "../../components/button"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131px" }
      }
    >
      <Heading code={2}>Get updated</Heading>
      <Card
        pad={mobile ? { vertical: "24px", horizontal: "16px" } : "32px"}
        margin={
          mobile
            ? { top: "32px", bottom: "70px" }
            : { top: "40px", bottom: "140px" }
        }
        direction={mobile ? "column" : "row"}
        gap="large"
      >
        <Heading code={4}>
          Subscribe to our news letter for blogs, news and updates.
        </Heading>
        <Box direction={mobile ? "column" : "row"} gap="small" flex="grow">
          <Box flex="grow">
            <FormField placeholder="Your Email" />
          </Box>
          <Box>
            <Button primary label="Send me updates" />
          </Box>
        </Box>
      </Card>
    </Box>
  )
}
