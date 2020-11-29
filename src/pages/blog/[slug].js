import React from "react"

import Layout from "../../sections/layout"
import SEO from "../../components/seo"

import { BlogLoading, BlogLoaded } from "../../sections/blogLoading"

export default props => {
  const slug = props.params.slug
  const [blogData, setBlogData] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // get data from api
    fetch(
      `${process.env.GATSBY_API_URL}/api/collections/get/blog?filter[slug]=${slug}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setLoading(null)
        setBlogData(resultData.entries[0])
        document.title = resultData.entries[0].title
      }) // set data for the blog
  }, [slug])
  return (
    <Layout active="blogs">
      <SEO title={blogData.name} />
      {loading ? <BlogLoading /> : <BlogLoaded blogData={blogData} />}
    </Layout>
  )
}
