import React from "react"
import Heading from "../../components/heading"
import { Box, ResponsiveContext } from "grommet"
import Text from "../../components/text"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "49px", horizontal: "16px" }
          : { top: "31px", horizontal: "131px" }
      }
      gap="small"
    >
      <Heading code={2}>Guidance Counseling</Heading>
      <Text color="b2" code="sub-r">
        Viverra turpis neque massa est erat felis lectus rhoncus magnis. Rutrum
        quam arcu habitant est. Condimentum sed enim est, fermentum id egestas.
        Amet, eget neque aliquet ultricies ac nibh elementum velit et.
        Adipiscing quis dolor felis vitae viverra elit a in. Nam consequat nulla
        cursus donec faucibus nunc massa in. Quisque tincidunt netus in
        consequat risus dignissim morbi. Vulputate sit tempus, tincidunt sit.
        Ridiculus aenean scelerisque eu, in nisi. Facilisis mattis netus
        consectetur ipsum nec quam.
      </Text>
    </Box>
  )
}
