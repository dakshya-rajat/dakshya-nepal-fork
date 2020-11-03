import React from "react"
import { Link } from "gatsby"
import { Box, ResponsiveContext, Grid } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import BlogCard from "./blogCard"

export default ({ title, url, data }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  const blogPosts = []
  data.allCockpitBlog.edges.map(data =>
    blogPosts.push({
      category: data.node.category.value,
      title: data.node.title.value,
      minRead: data.node.timeToRead.value,
      image: data.node.coverImage.value.childImageSharp.fluid,
      link: data.node.fields.path,
    })
  )

  return (
    <Box
      pad={
        mobile
          ? { top: "90px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
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
      <Grid
        margin={mobile ? { top: "16px" } : { top: "48px" }}
        columns={mobile ? "32%" : "100%"}
        gap="small"
      >
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            category={post.category}
            mobile={mobile}
            title={post.title}
            image={post.image}
            minRead={post.minRead}
            link={post.link}
          />
        ))}
      </Grid>
    </Box>
  )
}
