/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { Grommet } from "grommet"
import dakshyaTheme from "./grommet.theme"
import "./src/styles/reset.css"

export const onInitialClientRender = () => {
  document.getElementById("___gatsby").style.display = "block"
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
  }, 0)
}

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date()
  ;(function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0]
    s1.async = true
    s1.src = "https://embed.tawk.to/5f9a779f7f0a8e57c2d81cb4/default"
    s1.charset = "UTF-8"
    s1.setAttribute("crossorigin", "*")
    s0.parentNode.insertBefore(s1, s0)
  })()
  return (
    <Grommet {...props} theme={dakshyaTheme}>
      {element}
    </Grommet>
  )
}
