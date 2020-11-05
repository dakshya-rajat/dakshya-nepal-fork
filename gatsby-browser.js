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
  return (
    <Grommet {...props} theme={dakshyaTheme}>
      {element}
    </Grommet>
  )
}
