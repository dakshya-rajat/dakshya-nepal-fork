import React from "react"
import Layout from "../sections/layout"
import SEO from "../components/seo"
import Blog from "../sections/blog"
import BlogsPageTitle from "../sections/blogsPageSections/blogsPageTitle"
import BlogsListingByCategories from "../sections/blogsPageSections/blogsListingByCategories"

export default () => {
  return (
    <Layout active="blogs">
      <SEO title="Blogs" />
      <BlogsPageTitle />
      <BlogsListingByCategories />
      <Blog />
    </Layout>
  )
}
