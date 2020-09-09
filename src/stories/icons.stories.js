import React from "react"
import { Avatar, Box } from "grommet"
import ArrowLeft from "../components/icons/arrow-left"
import ArrowRight from "../components/icons/arrow-right"
import Call from "../components/icons/call"
import ChevronDown from "../components/icons/chevron-down"

export default {
  title: "Design/Icons",
}

export const controlIconList = () => {
  return (
    <div>
      <p>
        These are some of the control icons. These can be used in various places
        like buttons, avatars, form controls, etc{" "}
      </p>
      <Box direction="row" gap="small">
        <Box direction="column">
          <Avatar alignSelf="center">
            <ArrowLeft />
          </Avatar>
          <pre>arrow-left</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <ArrowRight />
          </Avatar>
          <pre>arrow-right</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Call />
          </Avatar>
          <pre>call</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <ChevronDown />
          </Avatar>
          <pre>chevron-down</pre>
        </Box>
      </Box>
    </div>
  )
}
