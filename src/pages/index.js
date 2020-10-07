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

export default () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Slider />
      <Features />
      <OnlineClasses />
      <Blog />
      <CtaBox />
      <ClientSection />
      <Testimonial />
    </Layout>
  )
}
