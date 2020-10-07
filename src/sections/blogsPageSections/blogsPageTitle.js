import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Search from "../../components/icons/search"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      justify="between"
      pad={
        mobile
          ? { top: "22px", horizontal: "16px" }
          : { top: "54px", horizontal: "131.5px" }
      }
      direction={mobile ? "column" : "row"}
    >
      <Heading code={2}>Dakshya Blogs</Heading>
      <FormField
        width="352px"
        margin={mobile ? { top: "16px" } : { top: "0px" }}
        icon={<Search />}
        placeholder="Search by name or category"
      />
    </Box>
  )
}
