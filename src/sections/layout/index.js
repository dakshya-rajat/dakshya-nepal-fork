import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Box } from "grommet"

const Layout = ({ children, active }) => {
  const location = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <div>
      <Box animation={location === "/" ? { type: "slideDown" } : "null"}>
        <Header active={active} />
      </Box>
      <Box animation={location === "/" ? { type: "slideUp" } : ""}>
        {children}
      </Box>
      <Footer />
    </div>
  )
}

export default Layout
