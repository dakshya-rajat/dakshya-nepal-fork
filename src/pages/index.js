import React from "react"

import Seo from "../components/seo"
import Layout from "../sections/layout"
import Slider from "../sections/slider"
import Features from "../sections/features"
import OnlineClasses from "../sections/onlineClasses"
import Blog from "../sections/blog"
import CtaBox from "../sections/ctaBox"
import ClientSection from "../sections/clientSection"
import Testimonial from "../sections/testimonial"
import Newsletter from "../sections/newsletter"

export default ({ data }) => {
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
    <Layout>
      <Seo title="Home" />
      <Slider />
      <Features />
      <OnlineClasses />
      <Blog title="blog" url="/blog" data={blogData} />
      <CtaBox />
      <ClientSection />
      <Testimonial />
      <Newsletter />
    </Layout>
  )
}
