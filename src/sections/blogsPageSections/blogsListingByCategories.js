import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import BlogCard from "../blog/blogCard"
import ComponentSlider from "../componentSlider"
import blogPosts from "../blog/blogData.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  const categories = blogPosts.reduce((allPosts, current) => {
    return allPosts.includes(current.category)
      ? allPosts
      : allPosts.concat([current.category])
  }, [])
  return (
    <Box>
      {categories.map(category =>
        blogPosts
          .filter(blog => blog.category === category)
          .map(filteredBlog => (
            <React.Fragment>
              <Box
                pad={
                  mobile
                    ? { top: "16px", horizontal: "16px" }
                    : { top: "33px", horizontal: "131.5px" }
                }
              >
                <Box direction="row">
                  <Heading code={3}>{category}</Heading>
                  <Box flex="grow">
                    <Button secondary label="view all" alignSelf="end" />
                  </Box>
                </Box>
              </Box>
              <ComponentSlider
                margin={mobile ? { top: "16px" } : { top: "33px" }}
              >
                <BlogCard
                  mobile={mobile}
                  title={filteredBlog.title}
                  image={filteredBlog.image}
                  minRead={filteredBlog.minRead}
                  category={filteredBlog.tag}
                />
              </ComponentSlider>
            </React.Fragment>
          ))
      )}
    </Box>
  )
}
