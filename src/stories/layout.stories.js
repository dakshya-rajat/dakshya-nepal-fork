import React from "react"
import Header from "../sections/layout/header"
import Footer from "../sections/layout/footer"

export default {
  title: "Sections/layout",
}

export const header = () => {
  return <Header active="products" />
}

export const footer = () => {
  return <Footer />
}
