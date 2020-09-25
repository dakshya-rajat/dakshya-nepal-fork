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

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <Grommet {...props} theme={dakshyaTheme}>
      {element}
    </Grommet>
  )
}
