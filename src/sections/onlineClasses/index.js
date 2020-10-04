import React from "react"
import { Box } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import classes from "./classes.json"
import OnlineClassBlock from "./onlineClassBlock"
export default props => {
  return (
    <Box pad={{ horizontal: "131.5px", top: "98px" }}>
      <Box direction="row">
        <Heading code={2} size="medium">
          online classes
        </Heading>
        <Box flex="grow">
          <Button secondary label="Explore" alignSelf="end" />
        </Box>
      </Box>
      <Box margin={{ top: "48px" }} direction="row">
        {classes.map((cls, index) => (
          <OnlineClassBlock
            title={cls.title}
            tutor={cls.tutor}
            sesh={cls.sesh}
            price={cls.price}
            course={cls.course}
            key={index}
          />
        ))}
      </Box>
    </Box>
  )
}
