import React from "react"

import Layout from "../sections/layout"
import SEO from "../components/seo"
import Blog from "../sections/blog"

export default () => {
  const [blogData, setBlogData] = React.useState([])

  React.useEffect(() => {
    // get data from api
    fetch(`${process.env.GATSBY_API_URL}/api/collections/get/blog`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setBlogData(resultData.entries)
      }) // set data for the blog
  }, [])
  return (
    <Layout active="blogs">
      <SEO title="Blogs" />
      <Blog title="All Blogs" data={blogData} />
    </Layout>
  )
}
