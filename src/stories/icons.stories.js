import React from "react"
import { Avatar } from "grommet"
import ArrowLeft from "../components/icons/arrow-left"

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
      <Avatar>
        <ArrowLeft />
      </Avatar>
    </div>
  )
}
