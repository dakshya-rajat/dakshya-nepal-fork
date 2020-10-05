import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import BlogCard from "./blogCard"
import ComponentSlider from "../componentSlider"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box>
      <Box
        pad={
          mobile
            ? { top: "90px", horizontal: "16px" }
            : { top: "90px", horizontal: "131.5px" }
        }
      >
        <Box direction="row">
          <Heading code={2}>Blogs</Heading>
          <Box flex="grow">
            <Button secondary label="view all" alignSelf="end" />
          </Box>
        </Box>
      </Box>
      <ComponentSlider margin={mobile ? { top: "16px" } : { top: "48px" }}>
        {[1, 2, 3].map(index => (
          <BlogCard key={index} mobile={mobile} />
        ))}
      </ComponentSlider>
    </Box>
  )
}
