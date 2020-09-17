import React from "react"
import { Blank } from "grommet-icons"

export default props => {
  return (
    <Blank {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 9L12 15L6 9" stroke="inherit" stroke-width="2" />
      </svg>
    </Blank>
  )
}
