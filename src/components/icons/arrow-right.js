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
        <path
          d="M3 12L20 12"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path d="M14 5L20 12L14 19" stroke="black" stroke-width="2" />
      </svg>
    </Blank>
  )
}
