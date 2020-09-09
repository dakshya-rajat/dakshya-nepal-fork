import React from "react"
import { Avatar, Box } from "grommet"
import ArrowLeft from "../components/icons/arrow-left"
import ArrowRight from "../components/icons/arrow-right"
import Call from "../components/icons/call"
import ChevronDown from "../components/icons/chevron-down"
import ChevronLeft from "../components/icons/chevron-left"
import ChevronRight from "../components/icons/chevron-right"
import ChevronUp from "../components/icons/chevron-up"
import Email from "../components/icons/email"
import Exit from "../components/icons/exit"
import Facebook from "../components/icons/facebook"
import Instagram from "../components/icons/instagram"
import Linkedin from "../components/icons/linkedin"
import Location from "../components/icons/location"
import Menu from "../components/icons/menu"
import Search from "../components/icons/search"
import Twitter from "../components/icons/twitter"
import User from "../components/icons/user"

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
      <Box direction="row" gap="small" wrap>
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
        <Box direction="column">
          <Avatar alignSelf="center">
            <ChevronLeft />
          </Avatar>
          <pre>chevron-left</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <ChevronRight />
          </Avatar>
          <pre>chevron-right</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <ChevronUp />
          </Avatar>
          <pre>chevron-up</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Email />
          </Avatar>
          <pre>email</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Exit />
          </Avatar>
          <pre>exit</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Facebook />
          </Avatar>
          <pre>facebook</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Instagram />
          </Avatar>
          <pre>instagram</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Linkedin />
          </Avatar>
          <pre>linkedin</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Location />
          </Avatar>
          <pre>location</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Menu />
          </Avatar>
          <pre>menu</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Search />
          </Avatar>
          <pre>search</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <Twitter />
          </Avatar>
          <pre>twitter</pre>
        </Box>
        <Box direction="column">
          <Avatar alignSelf="center">
            <User />
          </Avatar>
          <pre>user</pre>
        </Box>
      </Box>
    </div>
  )
}
