import React from "react"
import { Box, FormField, TextInput, Button } from "grommet"
import Heading from "../components/heading"
import Text from "../components/text"

export default {
  title: "Design/Typography",
}

export const headingStyles = () => {
  return (
    <>
      <Heading code={1}>heading one</Heading>
      <Heading code={2}>heading two</Heading>
      <Heading code={3}>heading three</Heading>
      <Heading code={4}>heading four</Heading>
    </>
  )
}

export const textStyles = () => {
  return (
    <Box direction="column">
      <Text code="body">
        This is the default text style. it uses style of body text.
      </Text>
      <Text code="quote">
        This is the default text style. it uses style of quote text.
      </Text>
      <Text code="sub-r">
        This is the default text style. it uses style of subtext R variant text.
      </Text>
      <Text code="sub-m">
        This is the default text style. it uses style of subtext M variant text.
      </Text>
    </Box>
  )
}

export const fromStyle = () => {
  return (
    <>
      <FormField label={<Text code="label">Form Label</Text>}>
        <TextInput placeholder="type here" />
      </FormField>
      <Button primary label={<Text code="button">check now</Text>} />
    </>
  )
}
