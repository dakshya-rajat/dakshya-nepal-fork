import React from "react"
import { Box, Image } from "grommet"
import Header from "../sections/layout/header"
import Footer from "../sections/layout/footer"
import Card from "../components/card"
import productimg from "../images/illustrations/Online classes.svg"

export default {
  title: "Sections/layout",
}

export const header = () => {
  return <Header active="products" />
}

export const footer = () => {
  return <Footer />
}
