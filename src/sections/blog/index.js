import React from "react"
import { Link } from "gatsby"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import BlogCard from "./blogCard"
import ComponentSlider from "../componentSlider"

export default ({ title, url, data }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box>
      <Box
        pad={
          mobile
            ? { top: "28px", horizontal: "16px" }
            : { top: "40px", horizontal: "131px" }
        }
      >
        <Box direction="row">
          <Heading code={2}>{title}</Heading>
          <Box flex="grow">
            {url ? (
              <Box alignSelf="end">
                <Link to={url}>
                  <Button secondary label="view all" />
                </Link>
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
      <ComponentSlider
        margin={mobile ? { top: "16px" } : { top: "48px" }}
        gap="small"
      >
        {data.map((post, index) => (
          <BlogCard
            key={index}
            category={post.category}
            mobile={mobile}
            title={post.title}
            image={post.coverImage.path}
            minRead={post.timeToRead}
            link={post.link}
          />
        ))}
      </ComponentSlider>
    </Box>
  )
}
