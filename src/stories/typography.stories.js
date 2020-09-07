import React from "react"
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
    <>
      <Text color="brand">test test</Text>
    </>
  )
}
