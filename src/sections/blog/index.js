import React from "react"
import { Box } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import BlogCard from "./blogCard"
import ComponentSlider from "../componentSlider"

export default props => {
  return (
    <Box>
      <Box pad={{ top: "90px", horizontal: "131.5px" }}>
        <Box direction="row">
          <Heading code={2}>Blogs</Heading>
          <Box flex="grow">
            <Button secondary label="view all" alignSelf="end" />
          </Box>
        </Box>
      </Box>
      <ComponentSlider margin={{ top: "48px" }}>
        {[1, 2, 3].map(index => (
          <BlogCard key={index} />
        ))}
      </ComponentSlider>
    </Box>
  )
}
